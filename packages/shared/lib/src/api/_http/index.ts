export abstract class Http {
    private _config: RequestInit = {};

    private get config() { return this._config; }
    private set config(data: Partial<RequestInit>) { this._config = { ...this._config, ...data }; }

    private static async handle(response: Response) {
        const status = response.status;
        const success = response.ok;

        let json: any;

        try {
            json = await response.json();
        } catch (error) {
            json = undefined;
        }

        const data = { status, response: json };

        if (!success) { throw data; }

        return data;
    }

    public async get<T>(url: string): Promise<T> {
        this.config.method = 'GET';
        return this.send(url);
    }

    public async post<T>(url: string, body: any, config: RequestInit): Promise<T> {
        this.config = {
            method: 'POST',
            headers: config.headers,
            body: JSON.stringify(body),
            ...config
        };
        return this.send(url);
    }

    private async send(url: string): Promise<any> {
        return fetch(url, this.config as any)
            .then(response => Http.handle(response as unknown as Response))
            .then(handle => handle && handle.response)
            .catch(e => { console.error('REQUEST ERROR:', e); });
    }
}
