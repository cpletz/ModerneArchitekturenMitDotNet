export class StatsServiceUrl {
    static get Url() {
        return document.domain === 'localhost' ?
            'http://localhost:52439/' :
            'http://tictactechstats.azurewebsites.net/';
    }
}