import { deleteUser, getUser, getUsers, insertUser, updateUser } from "../../db/services/user.services.js"

export const userResolvers = {
    Query: {
        users: async () => {
            return await getUsers()
        },
        user: async (any, args) => {
            const {email} = args
            return await getUser(email)
        }
    },
    Mutation: {
        createUser: async (any, args) => {
            return await insertUser(args)
        },
        updateUser: async (any, args) => {
            return await updateUser(args)
        },
        deleteUser: async (any, args) => {
            return await deleteUser(args)
        }
    }
}