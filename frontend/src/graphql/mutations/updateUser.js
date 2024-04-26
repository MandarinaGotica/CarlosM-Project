import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
mutation UpdateUser($updateUserId: Int!, $name: String!, $email: String!, $role: String!, $password: String!) {
  updateUser(id: $updateUserId, name: $name, email: $email, role: $role, password: $password) {
    id
    name
    email
    role
  }
}`