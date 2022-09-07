import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #cacaca;
  display: flex;
  justify-content: center;

  /* @media ${breakPoints.mobile} {
    padding: 1rem;
    font-size: 1rem;
  } */
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* @media ${breakPoints.mobile} {
    width: 100%;
    padding: 0 1rem;
  } */
`;

export const Logo = styled.img`
  width: 120px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 80px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Menu = styled.a`
  font-size: 20px;
  font-weight: 600;
  margin: 0 20px;
  cursor: pointer;

  :hover {
    color: #f6d849;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
`;

export const Login = styled.a`
  font-size: 18px;
  margin-left: 1rem;
  color: #c4c4c4;

  cursor: pointer;
  :hover {
    color: #f6d849;
  }
`;
