import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import ignore from 'rollup-plugin-ignore'
import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM'
}

export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/umd/jsui.umd.production.js',
    format: 'umd',
    name: 'jsui',
    globals
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __SERVER__: JSON.stringify(false)
    }),
    ignore(['stream']),
    resolve({
      preferBuiltins: true
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['es2015-rollup'],
      babelrc: false
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'react-is': ['isValidElementType']
      }
    }),
    uglify()
  ],
  external: ['react', 'react-dom', 'styled-components']
}
