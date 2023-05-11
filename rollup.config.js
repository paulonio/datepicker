import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import packageJson from './package.json' assert { type: 'json' };
import alias from '@rollup/plugin-alias';

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
      external(),
      resolve(),
      eslint(),
      babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
      typescript({ tsconfig: './tsconfig.json' }),
      alias({
        resolve: ['.js', '.ts', '.jsx', '.tsx'],
        entries: [
          {find: '@components', replacement: path.resolve(rootDir, 'src/components')},
          {find: '@constants', replacement: path.resolve(rootDir, 'src/constants')},
          {find: '@hooks', replacement: path.resolve(rootDir, 'src/hooks')},
          {find: '@styles', replacement: path.resolve(rootDir, 'src/styles')},
          {find: '@types', replacement: path.resolve(rootDir, 'src/types')},
          {find: '@utils', replacement: path.resolve(rootDir, 'src/utils')},

        ],
        customResolver,
      }),
      terser(),
    ],
  },
];
