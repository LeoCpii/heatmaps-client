import { FormControl } from './control';

export interface AbstractControl { [key: string]: FormControl; }

export class FormGroup {
    private _valid!: boolean;
    private _controls!: AbstractControl;

    constructor(controls: AbstractControl) {
        this.controls = controls;
        this.validation();
    }

    public get controls() { return this._controls; }
    public set controls(control: AbstractControl) {
        this._controls = { ...this._controls, ...control };
    }

    public get values(): any {
        const values: { [key: string]: any } = {};

        this.eachControl((control, key) => ({ [key]: control.value }))
            .forEach(control => { for (const prop in control) { values[prop] = control[prop]; } });

        return values;
    }

    public get errors() {
        return Object.values(this.controls).filter(i => i.error);
    }

    public get isValid(): boolean { return this._valid; }
    public set isValid(validity: boolean) { this._valid = validity; }

    private eachControl(fn: (control: FormControl, key: string) => any) {
        return Object.keys(this.controls).map(key => {
            return fn(this.controls[key], key);
        });
    }

    public dirty(): void {
        this.eachControl((control, _) => control.dirty = true);
    }

    public validation() {
        this.isValid = !this.errors.length;
    }
}