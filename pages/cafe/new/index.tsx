import styled from "@emotion/styled";
import CafeContentsWrite from "../../../src/components/unit/cafe/write/cafecontents/CafeContentsWrite.container";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-top: 1rem;
  width: 800px;
  display: flex;
  flex-direction: column;
`;

export default function CafeWritePage() {
  return (
    <Container>
      <Wrapper>
        <CafeContentsWrite />
      </Wrapper>
    </Container>
  );
}
