import { authenticationResolvers } from "./authentication.resolver.js";
import { userResolvers } from "./user.resolver.js";

//Unificate every resolver in global resolver object
export const resolvers = {
    Query: 
    {...userResolvers.Query, ...authenticationResolvers.Query}, 
    Mutation:
    {...userResolvers.Mutation}
}