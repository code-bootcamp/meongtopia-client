import styled from "@emotion/styled";
import { useState } from "react";
import MyPageUserPick from "../../../src/components/unit/mypage/user/pick/UserPick.container";
import MyPageUserReserve from "../../../src/components/unit/mypage/user/reserve/UserReserve.container";
import MyPageUserReview from "../../../src/components/unit/mypage/user/review/UserReview.container";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
`;

const SideBarWrapper = styled.div`
  width: 20%;
  padding-right: 40px;
`;

const SideBar = styled.div`
  height: 200px;
  margin-top: 120px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Menu = styled.h2`
  margin: 0;
  border-bottom: 5px solid #fff;
  cursor: pointer;

  :hover {
    color: #ffe812;
  }
`;

const MENU = ["내 정보", "찜한 목록", "예약 내역", "내가 쓴 리뷰"];

export default function MyPageUserPage() {
  const [isActive, setIsActive] = useState(false);

  const onClickMenu = () => {
    setIsActive(true);
  };
  return (
    <Wrapper>
      <Container>
        <SideBarWrapper>
          <SideBar>
            {MENU.map((el) => (
              <Menu onClick={onClickMenu}>{el}</Menu>
            ))}
          </SideBar>
        </SideBarWrapper>
        {/* <div>내정보</div> */}
        {isActive && <MyPageUserPick />}
        {/* {isActive && <MyPageUserReserve />} */}
        {/* {isActive && <MyPageUserReview />} */}
      </Container>
    </Wrapper>
  );
}
