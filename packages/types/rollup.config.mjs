import typescript from "@rollup/plugin-typescript"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import ttsc from "ttypescript"
import { defineConfig } from "rollup"
import fs from "node:fs/promises"
import path from "node:path"

export default defineConfig({
    input: ["src/ApiRequest.ts"],

    output: {
        format: "cjs",
        file: "gen/index.js",
    },

    plugins: [
        typescript({
            typescript: ttsc,
        }),
        nodeResolve(),
        commonjs(),
        {
            // tiny plugin to bundle .d.ts files
            closeBundle: async function () {
                const toGenPath = (...parts) => path.join("./gen", ...parts)
                const declarationFiles = await fs.readdir(toGenPath()).then(dir => dir.filter(file => file.endsWith(".d.ts")))

                const readAll = () =>
                    Promise.all(
                        declarationFiles.map(declaration => {
                            return fs.readFile(toGenPath(declaration))
                        })
                    )

                const deleteAll = () =>
                    Promise.all(
                        declarationFiles.map(declaration => {
                            return fs.rm(toGenPath(declaration))
                        })
                    )

                return readAll().then(async declarations => {
                    return Promise.all([fs.writeFile(toGenPath("typings.d.ts"), declarations.map(String).join("\n\n")), deleteAll()])
                })
            },
        },
    ],
})
