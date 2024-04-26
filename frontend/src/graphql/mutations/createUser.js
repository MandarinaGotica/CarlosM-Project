import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
mutation Mutation($name: String!, $email: String!, $role: String!, $password: String!) {
  createUser(name: $name, email: $email, role: $role, password: $password) {
    id
    name
    email
    role
  }
}`