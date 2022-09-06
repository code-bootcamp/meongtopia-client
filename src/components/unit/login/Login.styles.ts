import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  height: 968px;
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
`;

export const Image = styled.img`
  height: 968px;
  width: 100%;
  background-color: lightsalmon;

  @media ${breakPoints.mobile} {
    background-color: transparent;
    width: 0%;
  }
`;
export const LoginPartWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  width: 768px;
  padding: 0rem 3rem;
  @media ${breakPoints.mobile} {
    z-index: 999;
    width: 100%;
  }
`;

export const ElWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45%;
  width: 300px;
`;

export const Title = styled.h1``;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  align-items: center;
  /* border: 2px solid green; */
  width: 100%;
  height: 30rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0px 20px;
  outline: none;
`;

export const Error = styled.div`
  color: red;
  font-size: 0.6rem;
  margin-top: 5px;
  /* margin-left: -200px; */
`;

export const PasswordChk = styled.input`
  width: 20rem;
  height: 3rem;
`;

export const LoginBtn = styled.div`
  width: 10rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.3rem;
  text-align: center;
  background-color: #54bd54;
  color: white;
  border-radius: 50px;
  margin-bottom: 10px;
`;

export const SignUp = styled.div`
  width: 12rem;
  font-size: 0.8rem;
  color: gray;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const MoveToSignUp = styled.div`
  font-size: 0.8rem;
  color: black;
  :hover {
    text-decoration: underline;
    color: black;
  }
`;

export const SocialLoginWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  width: 14rem;
`;

export const SocialLoginBtn = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100px;
  background-color: lightcoral;
`;
