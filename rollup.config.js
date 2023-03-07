import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/mod.ts",
  plugins: [
    typescript({
      experimentalDecorators: true,
      target: "es2019",
    }),
    nodeResolve(),
    commonjs({ sourceMap: false }),
    terser(),
  ],
  preserveEntrySignatures: false,
  output: {
    dir: "dist",
    format: "es",
    sourcemap: true,
  },
  watch: {
    exclude: "data/**/**",
  },
  onwarn: (warning) =>
    warning.code !== "THIS_IS_UNDEFINED"
      ? console.warn(warning.message)
      : undefined,
};
