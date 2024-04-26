import { gql } from "@apollo/client";

export const GET_USERS_QUERY = gql`
    query Users {
    users {
        id
        name
        email
        role
    }
    }
`