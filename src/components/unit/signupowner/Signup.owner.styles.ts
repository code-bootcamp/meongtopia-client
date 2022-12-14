import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

interface ISignUpStyleProps {
  isActive?: boolean;
  isActivePhone?: boolean;
  isActiveNum?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 6rem 0;

  @media ${breakPoints.mobile} {
    margin: 3rem 0;
  }
`;

export const SignUpWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  padding: 0 1rem;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const UserWrap = styled.div`
  width: 45%;
  height: 50px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #999;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 500;
  margin-right: 1rem;

  cursor: pointer;
`;

export const OwnerWrap = styled.div`
  width: 55%;
  height: 60px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffa500;
  border-radius: 50px;
  font-size: 1.3rem;
  font-weight: 600;
`;

export const OwnerNumWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-bottom: 30px;
  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 650;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const OwnerImg = styled.input``;

export const ElWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${breakPoints.mobile} {
    margin-bottom: 2rem;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
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
  height: 3.5rem;
  padding: 0px 10px;
  outline: none;
  border: 1px solid rgb(118, 118, 118);
  border-radius: 10px;
  margin-top: 3px;
  line-height: 3rem;

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const NamesWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NicknameWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  border-radius: 10px;
  border: 1px solid rgb(118, 118, 118);
  padding: 0px 10px;
`;

export const NicknameInput = styled.input`
  width: 100%;
  height: 3rem;
  outline: none;
  border: none;
`;

export const Error = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 5px;
  margin-left: 5px;
`;

export const CheckBtn = styled.div`
  width: 5.3rem;
  height: 2rem;
  color: white;
  font-size: 0.9rem;
  font-weight: 450;
  line-height: 1.5rem;
  text-align: center;
  border-radius: 50px;
  margin-left: 10px;
  background-color: ${(props: ISignUpStyleProps) =>
    props.isActive ? "#ffa500" : "#999"};
  line-height: 2rem;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 25%;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const AgreeWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AgreeWrap2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  border: 1px solid #c8c8c8;
  border-radius: 10px;
`;

export const AgreeChkWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 8vh;
  padding: 10px 50px;

  @media ${breakPoints.mobile} {
    padding: 10px;
    width: 100%;
    height: 6vh;
  }
`;

export const AgreeContents1 = styled.div`
  font-size: 1rem;
  color: #999;
  width: 20%;
`;

export const AgreeContents2 = styled.div`
  font-size: 1rem;
  color: #999;
  width: 60%;

  @media ${breakPoints.mobile} {
    font-size: 1rem;

    width: 60%;
  }
`;

export const AgreeContents3 = styled.div`
  font-size: 0.9rem;

  color: #999;
  width: 8%;
  margin-right: 20px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 12%;
  }
`;

export const PhoneWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 80px;
`;

export const PhoneNumWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
`;

export const PhoneNum = styled.input`
  width: 34rem;
  height: 3.5rem;
  padding: 0px 10px;
  outline: none;
  border: 1px solid rgb(118, 118, 118);
  border-radius: 10px;
  margin-top: 3px;
  line-height: 3rem;

  @media ${breakPoints.mobile} {
    width: 75%;
    font-size: 1rem;
  }
`;

export const NumBtn = styled.div`
  width: 20%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  background-color: ${(props: ISignUpStyleProps) =>
    props.isActivePhone ? "#ffa500" : "gray"};
  color: white;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 7rem;
    height: 35px;
    line-height: 35px;
  }
`;

export const NumberWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: black;
`;

export const CerWrap = styled.div`
  width: 34rem;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(118, 118, 118);
  border-radius: 10px;

  @media ${breakPoints.mobile} {
    width: 75%;
  }
`;

export const CerNum = styled.input`
  width: 85%;
  padding: 0px 10px;
  outline: none;
  border: none;
  border-radius: 10px;
  margin-top: 3px;
  line-height: 3rem;

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const NumBtn2 = styled.div`
  width: 20%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  background-color: ${(props: ISignUpStyleProps) =>
    props.isActiveNum ? "#ffa500" : "gray"};
  color: white;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 7rem;
    height: 35px;
    line-height: 35px;
  }
`;

export const Number = styled.input`
  width: 100%;
  height: 3rem;
  margin-right: 10px;
  padding: 0px 10px;
  color: black;
`;

export const SignUpBtn = styled.button`
  width: 15rem;
  height: 3rem;
  line-height: 3rem;
  border-radius: 50px;
  background-color: orange;
  color: white;
  text-align: center;
  margin: 40px 0px;
  margin-bottom: 6rem;
  font-size: 1.3rem;
  border: none;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 1px solid lightgray;
`;

export const Timer = styled.div`
  width: 70px;
  height: 30px;
  line-height: 30px;
  color: black;
  font-size: 1rem;

  @media ${breakPoints.mobile} {
    font-size: 1rem;
    text-align: center;
    width: 50px;
    height: 30px;
  }
`;
