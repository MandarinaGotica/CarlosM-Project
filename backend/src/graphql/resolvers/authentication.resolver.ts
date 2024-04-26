import { authenticateUser } from "../../db/services/authentication.services.js"

export const authenticationResolvers = {
    Query: {
        authentication: async (any, args) => {
            const { email, password } = args
            return await authenticateUser(email, password)
        }
    }
}