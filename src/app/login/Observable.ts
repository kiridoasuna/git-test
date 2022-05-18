export class Observable {
    _subscribe;

    constructor(subscribe) {
        this._subscribe = subscribe
    }

    subscribe(observer) {
        const defaultObserver = {
            next: () => {},
            error: () => {},
            complete:() =>{}
        }

        if (typeof observer ==='function') {
            this._subscribe({...defaultObserver, next: observer});
        } else {
            this._subscribe({...defaultObserver, ...observer})
        }
    }
}

