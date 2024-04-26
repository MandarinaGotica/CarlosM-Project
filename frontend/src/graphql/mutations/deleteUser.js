import { gql } from "@apollo/client";

export const DELETE_USER = gql`
mutation DeleteUser($deleteUserId: Int!, $name: String!, $email: String!, $role: String!, $password: String!) {
  deleteUser(id: $deleteUserId, name: $name, email: $email, role: $role, password: $password) {
    id
    name
    email
    role
  }
}`