import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  /* width: 90%; */
  height: 968px;
  display: flex;
  flex-direction: row;
  margin: 0px auto;
  border: 4px solid red;
  /* overflow-y: hidden; */
`;

export const SignUpWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  /* justify-content: center; */
  /* width: 35%; */
  width: 768px;
  margin: 0px auto;
  border: 1px solid blue;
  @media ${breakPoints.mobile} {
    z-index: 999;
    width: 100%;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 66%;
  margin-bottom: 20px;
`;

export const OwnerUserWrap = styled.div`
  width: 50%;
  height: 60px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #808080;
  background-color: #f5cf1f; // 나중에 삼항연산자로 색 입히기
  margin: 0px 5px;
  margin-bottom: 20px;
`;

export const Ment1 = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: #ffffff;
`;

export const Ment2 = styled.div`
  font-size: 9px;
  color: #ffffff;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 650;
  margin-bottom: 10px;
`;

export const ElWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 300px; */
  width: 65%;
  /* border: 4px solid red; */
  /* height: 55%; */
`;

export const IdPwWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
`;

export const NickNameWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgb(118, 118, 118);
  width: 100%;
  border-radius: 2px;
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0px 10px;
  outline: none;
`;

export const NickNameInput = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0px 10px;
  border: none;
  outline: none;
`;

export const Error = styled.div`
  color: red;
  font-size: 0.6rem;
  margin-bottom: 5px;
`;

export const CheckBtn = styled.div`
  width: 5.3rem;
  height: 1.5rem;
  color: white;
  font-size: 12px;
  font-weight: 450;
  line-height: 1.5rem;
  text-align: center;
  background-color: #c8c8c8;
  margin-right: 10px;
`;

export const AgreeWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`;

export const AgreeWrap2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  border: 1px solid #c8c8c8;
`;

export const AgreeChkWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px 40px;
`;

export const AgreeContents1 = styled.div`
  font-size: 12px;
  color: red;
  width: 20%;
`;
export const AgreeContents2 = styled.div`
  font-size: 12px;
  color: gray;
  width: 60%;
`;
export const AgreeContents3 = styled.div`
  font-size: 12px;
  color: gray;
  width: 15%;
`;

export const PhoneWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 20px 0px;
`;

export const PhoneNum = styled.input`
  width: 100%;
  height: 3rem;
  margin-right: 10px;
  padding: 0px 10px;
`;
export const NumBtn = styled.div`
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 20px;
  background-color: green;
  color: white;
`;

export const NumberWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  color: white;
`;

export const Number = styled.input`
  width: 100%;
  height: 3rem;
  margin-right: 10px;
  padding: 0px 10px;
`;

export const SignUpBtn = styled.div`
  width: 7rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 50px;
  background-color: green;
  color: white;
  text-align: center;
  margin-top: 10px;
`;
