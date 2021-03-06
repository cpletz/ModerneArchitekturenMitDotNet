import {LogManager} from 'aurelia-framework';
import $ from 'jquery';
import 'ms-signalr-client';
import {StatsServiceUrl} from './stats-service-url';

const logger = LogManager.getLogger('live-games');

export class Live {

    constructor() {
        this.heading = 'Live games';
        this._games = new Map();
        this.games = [];
    }

    makeBoardArray(board) {
        return Array.from(board.split('').map(e => e === 'E' ? ' ' : e));
    }

    getGameInfo(gameId) {
        let gameInfo = this._games.get(gameId);
        if (!gameInfo) gameInfo = {
            startTime: '',
            endTime: '',
            playerX: '',
            playerO: '',
            status: 'started',
            board: this.makeBoardArray('EEEEEEEEE'),
            pos: -1,
            finished: false
        };
        return gameInfo;
    }

    updateGames(gameId, gameInfo) {
        this._games.set(gameId, gameInfo);
        this.games = Array.from(this._games.values())
            .sort( (a, b) => a.startTime > b.startTime ? -1 : 1);
    }

    gameStarted(msg) {
        logger.info("game started");
        const msgObj = JSON.parse(msg);
        const gameInfo = this.getGameInfo(msgObj.gameId);
        gameInfo.startTime = new Date(msgObj.startTime).toLocaleTimeString();
        gameInfo.playerX = msgObj.playerX;
        gameInfo.playerO = msgObj.playerO;
        gameInfo.status = 'started';
        this.updateGames(msgObj.gameId, gameInfo);
    }

    gameFinished(msg) {
        logger.info("game finished");
        const msgObj = JSON.parse(msg);
        const gameInfo = this.getGameInfo(msgObj.gameId);
        gameInfo.finished = true;
        gameInfo.status = msgObj.result;    
        gameInfo.endTime = msgObj.endTime;
        gameInfo.board = this.makeBoardArray(msgObj.board);
        gameInfo.pos = -1;
        this.updateGames(msgObj.gameId, gameInfo);
    }

    gameMove(msg) {
        logger.info("game move");
        const msgObj = JSON.parse(msg);
        const gameInfo = this.getGameInfo(msgObj.gameId);
        if(!gameInfo.finished) {
            gameInfo.status = `Move by ${msgObj.moveBy}`;
            gameInfo.board = this.makeBoardArray(msgObj.board);
            gameInfo.pos = msgObj.position;
            this.updateGames(msgObj.gameId, gameInfo);
        }
    }


    activate() {
        let connection = $.hubConnection(StatsServiceUrl.Url);
        let proxy = connection.createHubProxy('LiveGamesHub');
        proxy.logging = true;

        proxy.on('gameStarted', msg => {
            this.gameStarted(msg);
        });

        proxy.on('gameFinished', msg => {
            this.gameFinished(msg);
        });

        proxy.on('gameMove', msg => {
            this.gameMove(msg);
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

        connection.start();
    }

}