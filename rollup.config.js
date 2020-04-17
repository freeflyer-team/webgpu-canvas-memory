import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json"

export default [
    {
        input: 'src/main.ts',
        output: [
            {
                file: 'dist/main.ts',
                format: 'cjs'
            }
        ]
    }
]