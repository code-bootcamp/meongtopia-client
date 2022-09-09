import styled from "@emotion/styled";

export const DogImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  width: 70%;
  height: 259px;
  background: #ebebeb;
  border-radius: 2rem;
  transition: all 0.5s ease;
  cursor: pointer;

  span {
    padding-top: 1.25rem;
    font-size: 1.25rem;
    font-weight: 400;
  }

  img {
    transition: all 0.5s ease;
  }

  :hover {
    background: #f5cf1f;
    color: #ffffff;
    img {
      filter: brightness(0) invert(1);
    }
  }
`;

export const DogUploadImage = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 259px;
  background: #ebebeb;
  border-radius: 2rem;
  transition: all 0.5s ease;
  cursor: pointer;
`;
