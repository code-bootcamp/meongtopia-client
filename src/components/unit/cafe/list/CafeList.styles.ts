import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { IIsActiveProps } from "./CafeList.types";
import { AiFillHeart } from "react-icons/ai";

//
// 검색 컴포넌트
//
export const SearchContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0px 10px 10px -15px black;
  padding: 3rem 0 2rem 0;
  font-size: 1rem;
`;

export const SearchWrapper = styled.div`
  width: 1200px;
  /* @media ${breakPoints.mobile} {
  } */
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  margin: 0;
`;

export const SearchList = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  /* @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  } */
`;

export const TagLabel = styled.h3`
  margin: 0;
`;

export const TagsWrapper = styled.div`
  display: flex;
  margin-left: 3.5rem;
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  width: 8em;
  height: 2em;
  background-color: ${(props: IIsActiveProps) =>
    props.isActive ? "orange" : "#fff"};
  border-radius: 30px;
  border: 1px solid
    ${(props: IIsActiveProps) =>
      props.isActive ? "orange" : "rgb(223, 227, 234)"};
  /* box-shadow: rgb(0 0 0 / 3%) 0px 2px 3px 0px; */
  color: ${(props: IIsActiveProps) => (props.isActive ? "#fff" : "#999")};
  cursor: pointer;

  /* @media ${breakPoints.mobile} {
    width: 5.2em;
    margin-left: 1em;
  } */
`;

export const SearchBar = styled.input`
  width: 20rem;
  height: 3rem;
  font-size: 1rem;
  padding-left: 1.5rem;
  margin-left: 2rem;
  border: 1px solid rgb(235, 235, 235);
  /* box-shadow: rgb(0 0 0 / 5%) 0px 0px 5px 0px; */
  border-radius: 30px;
`;

//
// 정렬 컴포넌트
//
export const SortContainer = styled.div`
  width: 100%;
  padding: 5rem 0 1rem 0;
  display: flex;
  justify-content: center;
`;
export const SortWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: flex-end;
`;
export const Sort = styled.select`
  font-size: 1.1rem;
  color: #555;
  padding: 0 0.5rem;
  margin-left: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
//
// 리스트 컴포넌트
//
export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ListWrapper = styled.section`
  width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const CafeListWrapper = styled.div`
  width: 100%;
  height: 17rem;
  margin-bottom: 2rem;
  display: flex;
  border: 1px solid rgb(235, 235, 235);
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 7%) 0px 0px 12px 0px;

  /* @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100%;
  } */
`;

export const SliderWrapper = styled.div`
  width: 26rem;
  height: 100%;
  padding: 0.2rem;
  /* @media ${breakPoints.mobile} {
    width: 100%;
  } */
`;

export const CafeList = styled.ul`
  width: 50rem;
  padding: 1rem 3rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  /* @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding-top: 0em;
  } */
`;

export const ContentsText = styled.li`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  line-height: normal;
  font-weight: 700;
  margin: 0.5rem 0;
  & span {
    font-size: 1rem;
    line-height: normal;

    & p {
      margin: 0;
      margin-top: 0.5rem;
    }
  }
`;

export const RatingWrapper = styled.span`
  font-size: 1rem;
  display: flex;
  align-items: flex-start;
`;

export const SelectTag = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: orange;
`;

export const Horizon = styled.div`
  border-bottom: 1px solid #cacaca;
  margin: 1rem 0;
`;

export const DogWrapper = styled.span`
  display: flex;
  align-items: flex-end;
`;

export const Heart = styled(AiFillHeart)`
  font-size: 1.2rem;
  color: orangered;
  margin-right: 0.5rem;
`;
