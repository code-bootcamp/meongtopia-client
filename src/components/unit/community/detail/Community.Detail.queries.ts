import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardID: String!) {
    fetchBoard(boardID: $boardID) {
      boardID
      title
      contents
      boardImg {
        url
      }
      user {
        role
        userID
        nickname
      }
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardID: String!) {
    deleteBoard(boardID: $boardID)
  }
`;

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      userID
    }
  }
`;
