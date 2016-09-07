export class ServiceUrl {
    static get Url() {
        return document.domain === 'localhost' ?
            'http://localhost:60572/api/player/' :
            'http://tictactechplayer.azurewebsites.net/api/player/';
    }
}