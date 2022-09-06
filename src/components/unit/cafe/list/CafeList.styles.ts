import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2em;
`;

export const ListSelectWrapper = styled.div`
  font-size: 20px;
  font-weight: 700;
  width: auto;

  @media ${breakPoints.mobile} {
    justify-content: center;
    flex-direction: row;
    margin: 0;
    width: 100%;
  }
`;

export const LocationSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const CafeLocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LocationTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9em;
  height: 3.5em;
  background-color: white;
  margin-left: 3rem;
  border-radius: 28px;
  border: 1.5px solid rgb(223, 227, 234);
  box-shadow: rgb(0 0 0 / 3%) 0px 2px 3px 0px;
  font-size: 15px;
  font-weight: 600;
  color: rgb(187, 193, 204);
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 5.2em;
    margin-left: 1em;
  }
`;

export const ConditionSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 2em;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const CafeCondtionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ConditionTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9em;
  height: 3.5em;
  background-color: white;
  margin-left: 3rem;
  border-radius: 28px;
  border: 1.5px solid rgb(223, 227, 234);
  box-shadow: rgb(0 0 0 / 3%) 0px 2px 3px 0px;
  font-size: 15px;
  font-weight: 600;
  color: rgb(187, 193, 204);
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 7em;
    margin-left: 1em;
  }
`;

export const SearchList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 2em;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
  }
`;

export const SearchBar = styled.input`
  margin-left: 3rem;
  width: 20rem;
  height: 3.5rem;
  border: 1px solid rgb(235, 235, 235);
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 5px 0px;
  border-radius: 28px;
`;

// 카페 리스트

export const CafeListWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  width: 75rem;
  border: 1px solid rgb(235, 235, 235);
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 7%) 0px 0px 12px 0px;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100%;
  }
`;

export const SliderWrapper = styled.div`
  width: 40%;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const CafeList = styled.div`
  flex-direction: column;
  padding-top: 2.5em;
  width: 60%;
  padding-left: 2.5em;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding-top: 0em;
  }
`;

export const NameTag = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export const AddressTag = styled.div`
  margin-top: 1em;
`;

export const SelectTag = styled.div`
  margin-top: 1em;
  font-weight: 700;
  color: brown;
`;

export const RatingTag = styled.div`
  margin-top: 1em;
`;
