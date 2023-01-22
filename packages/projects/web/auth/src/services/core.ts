import { Auth, Environment } from '@heatmaps/lib';

class Core {
    public auth: Auth;
    public environment = Environment;

    constructor() {
        this.auth = new Auth();

        new Environment({
            api: {
                url: process.env.REACT_APP_API_URL
            }
        })
    }
}

export default new Core();
