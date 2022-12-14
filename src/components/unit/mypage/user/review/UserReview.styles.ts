import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  margin: 5rem 0;

  @media ${breakPoints.mobile} {
    margin: 2rem 0;
    padding: 0 1rem;
  }
`;

export const PageTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: 14rem;
  margin-bottom: 2rem;
  display: flex;
  border: 1px solid rgb(235, 235, 235);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 7%) 0px 0px 12px 0px;
`;

export const Img = styled.img`
  width: 200px;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 0 0 10px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const UserList = styled.ul`
  width: 65%;
  padding: 1rem 2rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  margin: 0;
`;

export const ContentsText = styled.li`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  line-height: normal;
  font-weight: 700;
  margin: 0.5rem 0;
  & span {
    font-size: 1.1rem;
    line-height: normal;

    & p {
      margin: 0;
      margin-top: 0.5rem;
    }
  }
`;

export const Contents = styled.div`
  line-height: 1.8rem;
  width: 28rem;
  font-size: 1.1rem;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Horizon = styled.div`
  border-bottom: 1px solid #cacaca;
  margin: 1rem 0;
`;

export const Detail = styled.div`
  width: 6rem;
  background-color: orange;
  color: #fff;
  font-size: 1.4rem;
  border-radius: 0 10px 10px 0;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f4840b;
  }

  @media ${breakPoints.mobile} {
    width: 12%;
    padding-left: 1rem;
    font-size: 1.5rem;
  }
`;

export const AddBtn = styled.button`
  background-color: orange;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  padding: 0 1rem;
  line-height: 3rem;
  height: 3rem;

  cursor: pointer;

  :hover {
    background-color: #f4840b;
  }
`;
