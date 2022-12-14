import { gql } from "@apollo/client";

export const FETCH_STORE = gql`
  query fetchStore($storeID: String!) {
    fetchStore(storeID: $storeID) {
      name
      description
      entranceFee
      phone
      open
      close
      address
      addressDetail
      bigDog
      user {
        name
        nickname
      }
      smallDog
      avgRating
      reservation {
        resID
      }
      storeTag {
        name
      }
      storeImg {
        url
      }
      pet {
        name
        age
        breed
        description
        petImgUrl
      }

      locationTag {
        name
      }
    }
  }
`;

export const CREATE_RESERVATION = gql`
  mutation createReservation(
    $storeID: String!
    $createReservationInput: CreateReservationInput!
  ) {
    createReservation(
      storeID: $storeID
      createReservationInput: $createReservationInput
    ) {
      resID
      amount
    }
  }
`;

export const Toggle_Pick = gql`
  mutation togglePick($storeID: String!) {
    togglePick(storeID: $storeID)
  }
`;

export const FETCH_RESERVATION = gql`
  query fetchReservation {
    fetchReservation {
      resID
      date
    }
  }
`;

export const REVIEW_COUNT = gql`
  query ReviewCount($storeID: String!) {
    ReviewCount(storeID: $storeID)
  }
`;

export const FETCH_USER_RESERVATION = gql`
  query fetchUserReservation($order: String) {
    fetchUserReservation(order: $order) {
      resID
    }
  }
`;
