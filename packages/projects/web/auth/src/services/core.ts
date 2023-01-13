import { Auth } from '@heatmaps/lib';

class Core {
    public auth: Auth;

    constructor() {
        this.auth = new Auth();
    }
}

export default new Core();
