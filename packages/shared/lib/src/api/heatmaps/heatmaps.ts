import { Http } from '../_http';
import { IHeader, IAssign } from './interface';
import { Environment } from '@environment';

export class HeatMaps extends Http {
    private static ASSIGN: IAssign = {};
    private _header: IHeader = { 'Content-Type': 'application/json' };

    constructor() { super(); }

    private get header() { return this._header; }
    private set header(data: Partial<IHeader>) { this._header = { ...this._header, ...data }; }

    private get url() {
        return `${Environment.api.url}/${HeatMaps.ASSIGN.path}`;
    }

    public path(path: string): this {
        HeatMaps.ASSIGN.path = path;
        return this;
    }

    public async post(data: any): Promise<any> {
        return await super.post(this.url, data, { headers: this.header });
    }
}
