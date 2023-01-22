export class Timer {
    private _id!: number;
    private _start!: number;
    private _remaining!: number;

    private delay!: number;
    private callback!: () => any;

    constructor(delay: number, callback: () => any) {
        this.delay = delay;
        this.remaining = delay;
        this.callback = callback;
    }

    private get id() { return this._id; }
    private set id(value: number) { this._id = value; }
 
    private get start() { return this._start; }
    private set start(value: number) { this._start = value; }

    private get remaining() { return this._remaining; }
    private set remaining(value: number) { this._remaining = value; }

    public pause() {
        window.clearTimeout(this.id);
        this.remaining -= Date.now() - this.start;
    }

    public resume() {
        this.start = Date.now();
        this.id = window.setTimeout(() => {
            this.remaining = this.delay;
            this.resume();
            this.callback();
        }, this.remaining);
    }

    public reset() {
        this.remaining = this.delay;
    }
}