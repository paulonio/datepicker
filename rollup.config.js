import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import packageJson from './package.json' assert { type: 'json' };
import alias from '@rollup/plugin-alias';

const path = require('path');
const customResolver = resolve({
  extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss', '.tsx', '.ts']
});
const rootDir = path.resolve(__dirname);

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      alias({
        resolve: ['.js', '.ts', '.jsx', '.tsx'],
        entries: [
          {find: '@components', replacement: path.resolve(rootDir, 'src/components')},
          {find: '@constants', replacement: path.resolve(rootDir, 'src/constants')},
          {find: '@hooks', replacement: path.resolve(rootDir, 'src/hooks')},
          {find: '@styles', replacement: path.resolve(rootDir, 'src/styles')},
          {find: '@types', replacement: path.resolve(rootDir, 'src/types')},
          {find: '@utils', replacement: path.resolve(rootDir, 'src/utils')},
          {find: '@icons', replacement: path.resolve(rootDir, 'src/icons')},

        ],
        customResolver,
      }),
      external(),
      eslint(),
      babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
      typescript({ tsconfig: './tsconfig.json' }),
      resolve(),
      terser(),
    ],
  },
];
