import DetailDogContents from "../../../src/components/unit/cafe/detail/dogcontents/DogContents.container";
import DetailCafeContents from "../../../src/components/unit/cafe/detail/cafecontents/CafeContents.container";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
`;

export default function CafeDetailPage() {
  return (
    <Container>
      <Wrapper>
        <DetailDogContents />
        <DetailCafeContents />
      </Wrapper>
    </Container>
  );
}
