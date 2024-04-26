import { gql } from "@apollo/client";

export const AUTH_QUERY=gql`
query Authentication($email: String!, $password: String!) {
  authentication(email: $email, password: $password) {
    id
    name
    email
    role
  }
}`