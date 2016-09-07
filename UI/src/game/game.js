import {HttpClient} from 'aurelia-http-client';
import $ from 'jquery';
import 'ms-signalr-client';
import {LogManager} from 'aurelia-framework';
import {computedFrom} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {CurrentPlayer} from './../current-player';
import {ServiceUrl} from './service-url';

const logger = LogManager.getLogger('game');

const gameServiceUri = ServiceUrl.Url;

@inject(CurrentPlayer)
export class Game {

    constructor(currentPlayer) {
        this.currentPlayer = currentPlayer;
        this.heading = 'Let\'s play!';
        this.playerId = currentPlayer.playerId;
        this.connectionId = ''
        this.gameHub = {};
        this.cells = [];
        this.resetCells();
        this.otherPlayer = '';
        this.role = '';
        this.status = 'NoGame';
        this.message = '';
        this.setMessage();
    }

    submit() {
        logger.info('submit called for: ' + this.playerId);
        if (this.playerId) {
            this.gameHub.invoke('LetMePlay', this.playerId, this.connectionId);
            this.resetCells();
            this.status = 'WaitingForOther';
            this.setMessage();
        }
    }

    cellClicked(index) {
        if (this.status === "MoveRequired" && this.cells[index] === 'E') {
            this.cells[index] = this.role;
            this.cells = this.cells.join('').split('');
            this.gameHub.invoke('SelectCell', this.playerId, this.connectionId, index);
            this.status = 'WaitAndSee';
        }
    }

    activate() {
        let connection = $.hubConnection(gameServiceUri);
        let proxy = connection.createHubProxy('GameHub');
        proxy.logging = true;

        proxy.on('gameStarted', (otherPlayer, yourRole) => {
            this.gameStarted(otherPlayer, yourRole);
        });

        proxy.on('gameStateChanged', (cells, status) => {
            this.gameStateChanged(cells, status);
        });

        connection.reconnecting(info => {
            logger.info('reconnecting');
        });

        connection.reconnected(info => {
            logger.info('reconnected');
        });

        connection.disconnected(info => {
            logger.info('disconnected');
        });

        connection.error(function (error) {
            logger.error('SignalR error: ' + error)
        });

        connection.start().done(info => { 
            this.connectionId = info.id;
            this.gameHub = proxy;
        });
    }

    resetCells() {
        this.cells = 'EEEEEEEEE'.split('');
    }

    getMessage() {
        switch (this.status) {
            case 'WaitingForOther': return 'Waiting for other player ...';
            case 'GameStarted': return 'Game has been started';
            case 'WaitAndSee': return 'Its the other\'s turn';
            case 'MoveRequired': return 'Its your turn!';
            case 'YouWon': return 'Congratulations! You won!';
            case 'YouLost': return 'Oh, oh ... you lost';
            case 'Tie': return 'No winner ... its a tie';
            default: return 'No game started';
        }
    }

    setMessage() { this.message = this.getMessage(); }

    gameStarted(otherPlayer, yourRole) {
        this.otherPlayer = otherPlayer;
        this.role = yourRole;
        this.status = 'GameStarted';
        this.setMessage();
    }

    gameStateChanged(cells, status) {
        this.cells = cells.split('');
        this.status = status;
        this.setMessage();
    }

    getCellClass(value) {
        if (value === 'X') return 'x';
        if (value === 'O') return 'o';
        return '';
    }

    getCellButtonClass(value) {
        if (value === 'X') return 'btn btn-warning square disabled';
        if (value === 'O') return 'btn btn-info square disabled';
        if (this.status === "MoveRequired") return 'btn btn-default square';
        return 'btn btn-default square disabled';
    }

    getCellImageClass(value) {
        if (value === 'X') return 'fa fa-remove fa-5x';
        if (value === 'O') return 'fa fa-circle-o fa-5x';
        if (value === 'WaitAndSee') return 'fa fa-spinner fa-splin';
        return 'fa fa-square-o fa-5x';
    }

    @computedFrom('role')
    get myRoleIcon() {
        switch (this.role) {
            case 'X': return 'remove';
            case 'O': return 'circle-o';
            default: return 'question-circle-o';
        }
    }

    @computedFrom('role')
    get otherRoleIcon() {
        switch (this.role) {
            case 'X': return 'circle-o';
            case 'O': return 'remove';
            default: return 'question-circle-o';
        }
    }





}