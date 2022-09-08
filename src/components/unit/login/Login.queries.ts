import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      userID
      name
      nickname
    }
  }
`;
