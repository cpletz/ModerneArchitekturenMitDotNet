export class ServiceUrl {
    constructor() {
        // this.url = 'http://tictactechplayer.azurewebsites.net/api/player/';
        this.url = 'http://localhost:60572/api/player/';
    }

    static get Url() {
        // return 'http://tictactechplayer.azurewebsites.net/api/player/';
        return 'http://localhost:60572/api/player/';        
    }

}