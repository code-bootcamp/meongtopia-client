import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import Slider from "react-slick";

export const Wrapper = styled.div`
  .slick-list {
    width: 100%;
    background: #fbfbfb;
    /* border-radius: 1rem; */
  }
  .slick-dots {
    margin-bottom: 50px;

    & > li {
      color: white;
    }

    & li > div > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;

export const SlideImg = styled.img`
  margin: auto;
  height: 64vh;
  width: 100%;
  object-fit: cover;
`;

export const PrevArrow = styled.div`
  margin-left: 100px;
  z-index: 2;
  display: block;
  position: absolute;

  /* @media ${breakPoints.mobile} {
    background-color: red;
  } */
`;

export const NextArrow = styled.div`
  margin-right: 100px;
  display: block;
  position: absolute;
  right: 10em;
`;
