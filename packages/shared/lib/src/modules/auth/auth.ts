import { IParams } from './interface';
import APIs from '@api';

export class Auth {
    private static path = 'auth';
    private get api() { return new APIs().heatmaps; }

    public login(params: IParams) {
        // return this.api
        //     .path(`${Auth.path}/login`)
        //     .post(params);

        return new Promise((resolve, reject) => reject(''));
    }
}