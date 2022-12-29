import { Validator } from '@services/validator';
import { FIELD_MESSAGES } from '../Input/const';

type Ttype = 'text' | 'email' | 'password';
type TValue = string | number | boolean;

export interface Control {
    value: TValue;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    type: Ttype;
}

export class FormControl {
    public _value = '';
    public _disabled!: boolean;
    public _required!: boolean;
    public _error = '';
    public _type!: Ttype;

    private validator: Validator = new Validator();

    get value(): string { return this._value; }
    set value(value: TValue) {
        this._value = String(value);
        this.validate();
    }

    get disabled() { return this._disabled; }
    set disabled(disabled: boolean) { this._disabled = disabled; }

    get required() { return this._required; }
    set required(required: boolean) { this._required = required; }

    get type() { return this._type; }
    set type(type: Ttype) { this._type = type; }

    get error() { return this._error; }
    set error(error: any) { this._error = error; }

    constructor(control: Control) {
        this.value = String(control.value);
        this.disabled = Boolean(control.disabled);
        this.required = Boolean(control.required);
        this.type = control.type;
        this.validate();
    }

    private validate(): void {
        const data: any = {};

        data.required = this.required ? !this.value : false;
        data.email = this.type === 'email' ? !this.validator.isValidEmail(this.value) : false;
        data.password = this.type === 'password' ? !this.validator.isValidPassword(this.value) : false;

        const hasError = Object.keys(data).some(key => data[key]);

        if (hasError) {
            const att = Object.keys(data).find(key => data[key]) as string;
            this.error = FIELD_MESSAGES[att];
        } else {
            this.error = '';
        }
    }
}