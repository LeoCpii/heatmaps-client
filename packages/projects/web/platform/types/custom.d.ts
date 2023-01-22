declare module "*.svg" {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare namespace NodeJS {
    export interface ProcessEnv {
        API_URL: string;
    }
}