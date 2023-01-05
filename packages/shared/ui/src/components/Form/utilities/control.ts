import { Validator } from '@services/validator';
import { FIELD_MESSAGES } from '../../Input/const';

type Ttype = 'text' | 'email' | 'password';
type TValue = string | number | boolean;

export interface Control {
    value: TValue;
    disabled?: boolean;
    required?: boolean;
    dirty?: boolean;
    error?: string;
    type: Ttype;
}

export class FormControl {
    protected _value = '';
    protected _error = '';
    protected _disabled!: boolean;
    protected _required!: boolean;
    protected _dirty!: boolean;
    protected _type!: Ttype;

    private static validator: Validator = new Validator();

    public get value(): string { return this._value; }
    public set value(value: TValue) {
        this._value = String(value);
        this.validate();
    }

    public get disabled() { return this._disabled; }
    public set disabled(disabled: boolean) { this._disabled = disabled; }

    public get required() { return this._required; }
    public set required(required: boolean) { this._required = required; }

    public get dirty() { return this._dirty; }
    public set dirty(dirty: boolean) { this._dirty = dirty; }

    public get type() { return this._type; }
    public set type(type: Ttype) { this._type = type; }

    public get error() { return this._error; }
    public set error(error: string) { this._error = error; }

    constructor(control: Control) {
        this.value = String(control.value);
        this.disabled = Boolean(control.disabled);
        this.required = Boolean(control.required);
        this.type = control.type;
        this.validate();
    }

    public validate(): void {
        const data: any = {};

        data.required = this.required ? !this.value : false;
        data.email = this.type === 'email' ? !FormControl.validator.isValidEmail(this.value) : false;
        data.password = this.type === 'password' ? !FormControl.validator.isValidPassword(this.value) : false;

        const hasError = Object.keys(data).some(key => data[key]);

        if (hasError) {
            const att = Object.keys(data).find(key => data[key]) as string;
            this.error = FIELD_MESSAGES[att];
        } else {
            this.error = '';
        }
    }
}