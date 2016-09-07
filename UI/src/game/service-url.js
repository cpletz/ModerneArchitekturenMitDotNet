export class ServiceUrl {
    static get Url() {
        return document.domain === 'localhost' ?
            'http://localhost/' :
            'http://tictactech.westeurope.cloudapp.azure.com/'; 
    }
}