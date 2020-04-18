import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";

export default {
    input: "src/main.ts",
    output: {
        file: "public/bundle.js",
        format: "es"
    },
    inlineDynamicImports: true,
    plugins: [
        copy({
            targets: [
                {
                    src: "node_modules/@webgpu/glslang/dist/web-devel/glslang.wasm",
                    dest: "public"
                }
            ]
        }),
        resolve({
            browser: true,
        }),
        typescript()
    ]
}