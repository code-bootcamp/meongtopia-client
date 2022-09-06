import { css } from "@emotion/react";
import { breakPoints } from "./media";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    @media ${breakPoints.tablet} {
      font-size: 14px;
    }
    @media ${breakPoints.mobile} {
      font-size: 12px;
    }
  }

  body {
    overflow-x: hidden;
  }

  ul {
    list-style: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    :visited {
      color: #000000;
    }
  }
`;
