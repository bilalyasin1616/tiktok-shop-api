export default {
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  external: ["request"],
  minify: true,
};
