export interface ITypes {
    required: string;
    cpf: string;
    cnpj: string;
    tel: string;
    cel: string;
    cep: string;
    number: string;
    email: string;
    password: string;
    cnpjcpf: string;
    telcel: string;
    date: string;
    percent: string;
}

export const NUMBER = ['cpf', 'cel', 'tel', 'cnpj', 'cep'];
export const MASKS = ['cpf', 'celWithDDD', 'cel', 'tel', 'cnpj', 'cep', 'currency'];
export const NUMBER_MASK = ['number', 'decimal', 'percent'];

export const FIELD_MESSAGES: ITypes = {
    required: 'FORM.ERROR.REQUIRED',
    cpf: 'FORM.ERROR.CPF',
    cnpj: 'FORM.ERROR.CNPJ',
    tel: 'FORM.ERROR.TEL',
    cel: 'FORM.ERROR.CEL',
    cep: 'FORM.ERROR.CEP',
    number: 'FORM.ERROR.NUMBER',
    email: 'FORM.ERROR.EMAIL',
    password: 'FORM.ERROR.PASSWORD',
    cnpjcpf: 'FORM.ERROR.DOCUMENT',
    telcel: 'FORM.ERROR.CONTACT',
    date: 'FORM.ERROR.DATE',
    percent: 'FORM.ERROR.PERCENT'
};