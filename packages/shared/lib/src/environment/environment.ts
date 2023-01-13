import { IApi, IEnvironment } from './interface';

export class Environment {
    static api: IApi;

    constructor(data: IEnvironment) {
        Environment.api = data.api;
    }
}
