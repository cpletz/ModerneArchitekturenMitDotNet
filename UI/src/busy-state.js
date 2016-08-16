export class BusyState {


    constructor() {
        this._busyCount = 0;
        this.isBusy = false;
    }

    increment() {
        this._busyCount += 1;
        this.isBusy = true;
    }

    decrement() {
        this._busyCount -= 1;
        if(this._busyCount === 0) this.isBusy = false;
    }
}