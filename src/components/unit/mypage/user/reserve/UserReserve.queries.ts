import { gql } from "@apollo/client";

export const FETCH_RESERVATION = gql`
  query fetchReservation {
    fetchReservation {
      resID
      members
      pets
      amount
      date
      store {
        storeID
        avgRating
        name
        entranceFee
        storeImg {
          url
        }
      }
    }
  }
`;

export const CANCEL_RESERVATION = gql`
  mutation cancelReservation($storeID: String!, $date: String!) {
    cancelReservation(storeID: $storeID, date: $date)
  }
`;
