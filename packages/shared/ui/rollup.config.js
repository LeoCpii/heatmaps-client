import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';
import autoprefixer from 'autoprefixer';
import sass from 'rollup-plugin-sass';
import { terser } from 'rollup-plugin-terser';

import postcss from 'rollup-plugin-postcss';
import url from 'postcss-url';

// eslint-disable-next-line
const packageJson = require('./package.json');

const brand = process.env.ROLLUP_THEME || 'default';

export default [
    {
        input: 'src/index.ts',
        external: [...Object.keys(packageJson.peerDependencies)],
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            image(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({
                use: [
                    [
                        'sass',
                        {
                            data: `
                            @import "~@heatmaps/design/dist/themes/${brand}.css";
                        ` }
                    ]
                ],
                preprocessor: (content, id) => new Promise((resolve, reject) => {
                    const result = sass.renderSync({ file: id });
                    resolve({ code: result.css.toString() });
                }),
                plugins: [
                    url({
                        url: 'inline', // enable inline assets using base64 encoding
                        maxSize: 10, // maximum file size to inline (in kilobytes)
                        fallback: 'copy', // fallback method to use if max size is exceeded
                    }),
                    autoprefixer
                ],
                sourceMap: true,
                extract: `${brand}/index.css`,
                minimize: true,
                extensions: ['.sass', '.css', '.scss']
            }),
            terser()
        ],
    },
    {
        input: 'dist/esm/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
        external: [/\.scss$/],
    },
];
