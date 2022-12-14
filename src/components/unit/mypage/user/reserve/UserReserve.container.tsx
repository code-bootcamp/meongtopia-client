import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { getErrorMessage } from "../../../../../commons/libraries/utils";
import {
  IMutation,
  IMutationCancelReservationArgs,
  IQuery,
} from "../../../../../commons/types/generated/types";
import { FETCH_USER } from "../../../../commons/layout/header/Header.queries";
import { FETCH_STORE } from "../../../cafe/detail/dogcontents/DogContents.queries";
import MyPageUserReserveUI from "./UserReserve.presenter";
import {
  CANCEL_RESERVATION,
  FETCH_CANCEL_RESERVATION,
  FETCH_USER_RESERVATION,
} from "./UserReserve.queries";

export default function MyPageUserReserve() {
  const router = useRouter();
  const [add, setAdd] = useState(1);

  const { data: reserveData } = useQuery<Pick<IQuery, "fetchUserReservation">>(
    FETCH_USER_RESERVATION
  );

  const { data: cancelData } = useQuery<Pick<IQuery, "fetchCancelReservation">>(
    FETCH_CANCEL_RESERVATION
  );

  const [cancelReservation] = useMutation<
    Pick<IMutation, "cancelReservation">,
    IMutationCancelReservationArgs
  >(CANCEL_RESERVATION);

  const onClickCancel = async (storeID: string, date: string) => {
    const cancelConfirm = confirm("정말 취소하시겠습니까?");
    if (cancelConfirm) {
      try {
        const result = await cancelReservation({
          variables: {
            storeID,
            date,
          },
          refetchQueries: [
            {
              query: FETCH_USER_RESERVATION,
            },
            {
              query: FETCH_USER,
            },
            {
              query: FETCH_STORE,
              variables: { storeID },
            },
          ],
        });
      } catch (error) {
        getErrorMessage(error);
      }
    }
  };

  const onClickAdd = () => {
    setAdd((prev) => prev + 1);
  };

  const onClickToDetail = (e: MouseEvent<HTMLUListElement>) => {
    router.push(`/cafe/${(e.currentTarget as HTMLUListElement).id}/`);
  };

  return (
    <MyPageUserReserveUI
      reserveData={reserveData}
      cancelData={cancelData}
      add={add}
      onClickCancel={onClickCancel}
      onClickAdd={onClickAdd}
      onClickToDetail={onClickToDetail}
    />
  );
}
