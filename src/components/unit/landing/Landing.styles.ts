import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 96%;
  margin: auto;
  margin-top: 60px;
`;

export const ReCafeList = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* border: 1px solid black; */
`;

export const ReTitle = styled.h2``;

export const ReCafeWrap = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: center; */
  margin-bottom: 20px;
  /* background-color: lightgrey; */
`;

export const CafeDetail = styled.div`
  /* display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between; */
  /* background-color: lightyellow; */
  border: 2px solid red;
`;

export const CafeImg = styled.img`
  width: 100%;
  margin-right: 50px;
`;

export const CafeInfoWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid black;
`;

export const InfoTitle = styled.div`
  font-size: 1.2vw;
`;
export const CafeName = styled.div`
  font-size: 1.3em;
  font-weight: 700;
`;
export const RatingWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RatingImg = styled.img`
  width: 7rem;
  height: 1.5rem;
`;
export const RatingTitle = styled.div`
  font-size: 1em;
`;

export const CafeDetailInfo = styled.div`
  font-size: 0.9rem;
`;

export const MoveToCafe = styled.img`
  width: 5vw;
  height: 12vh;
  border-radius: 100px;
`;

export const DescWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #ebf5ff;
  padding: 20px;
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 1.9rem;
  margin-top: 8rem;
  margin-bottom: 80px;

  /* @media ${breakPoints.mobile} {
    font-weight: 800;
    font-size: 20px;
  } */
`;

export const DetailWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 15px;
  margin-bottom: 100px;
`;

export const DescImg = styled.img`
  width: 5rem;
  height: 10vh;
  background-color: lightcyan;
`;

export const DescMents = styled.div`
  font-size: 0.8rem;
`;

export const LastPart = styled.img`
  width: 100%;
  height: 450px;
  background-color: #f5cf1f;
`;
