export class Sanitize {
    public text(value: string) {
        const regex = /[/A-Z!@#$%^&*()-\.,.\s+?":{}|<>]/g;
        return value.replace(regex, '');
    }

    public number(value: string) {
        const clean = value.replace(',', '.');
        return clean;
    }
}