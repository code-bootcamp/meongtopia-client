import styled from "@emotion/styled";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
`;

export const InfoWrapper = styled.div`
  padding: 2rem;
  margin-right: 8rem;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 0;
  }
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 2rem;

  @media ${breakPoints.mobile} {
    margin: 1rem 0;
    font-size: 1rem;
  }
`;

export const Contents = styled.div`
  font-size: 0.9rem;
  color: #a9a9a9;
  margin-bottom: 0.5rem;

  @media ${breakPoints.mobile} {
    font-size: 0.7rem;
  }
`;

export const Copyright = styled.div`
  font-size: 0.7rem;
  color: #c9c9c9;
  margin-top: 1rem;
`;

export const CSWrapper = styled.div`
  padding: 2rem;
  display: flex;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    padding: 1rem;
  }
`;

export const MenuWrapper = styled.div`
  margin-left: 6rem;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

export const Menu = styled.div`
  font-size: 0.9rem;
  margin-bottom: 0.9rem;
`;

export const SNSWrapper = styled.div`
  width: 8rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    margin-top: 1rem;
  }
`;

export const Instagram = styled(AiFillInstagram)`
  color: #a9a9a9;
  font-size: 1.7rem;
`;

export const Facebook = styled(FaFacebookSquare)`
  color: #a9a9a9;
  font-size: 1.5rem;
`;

export const NaverBlog = styled(RiKakaoTalkFill)`
  color: #a9a9a9;
  font-size: 1.7rem;
`;

export const Youtube = styled(FaYoutube)`
  color: #a9a9a9;
  font-size: 1.7rem;
`;
