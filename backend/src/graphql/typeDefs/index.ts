import { readFile, readFileSync } from "fs"
import path from "path"
import { fileURLToPath } from "url"

const userTypes = readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), "/user.graphql"), {
    encoding: "utf-8"
})

const authenticationTypes = readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), "/authentication.graphql"), {
    encoding: "utf-8"
})

//Combined every typeDefsModel in global typeDef
console.log(`
${userTypes}
${authenticationTypes}
`)
export const typeDefs =
`
    ${userTypes}
    ${authenticationTypes}
`