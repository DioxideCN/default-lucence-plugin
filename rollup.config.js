import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
    input: [
        "./src/index.ts"
    ],
    output: {
        file: './dist/Plugin.js',
        name: 'experience',
        format: 'esm',
    },
    plugins: [
        typescript(),
        resolve(), 
        terser(),
    ],
};