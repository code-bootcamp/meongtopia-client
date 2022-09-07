import MyPageUserPick from "./pick/UserPick.container";
import MyPageUserReserve from "./reserve/UserReserve.container";
import MyPageUserReview from "./review/UserReview.container";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1200px;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
`;
const Menu = styled.div`
  cursor: pointer;
  :hover {
    background-color: #ffe812;
  }
`;

export default function MyPageUser() {
  return (
    <Wrapper>
      <Container>
        <SideBar>
          <Menu>내 정보</Menu>
          <Menu>찜한 목록</Menu>
          <Menu>예약 내역</Menu>
          <Menu>내가 쓴 리뷰</Menu>
        </SideBar>
        <MyPageUserPick />
        <MyPageUserReserve />
        <MyPageUserReview />
      </Container>
    </Wrapper>
  );
}
