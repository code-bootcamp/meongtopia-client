import Link from "next/link";
import * as Header from "./Header.styles";

export default function LayoutHeader() {
  return (
    <Header.Container>
      <Header.Wrapper>
        <Link href="/">
          <Header.Logo src="/images/logo.svg" />
        </Link>
        <Header.MenuContainer>
          <Link href="/cafe">
            <Header.Menu>애견카페 정보</Header.Menu>
          </Link>
          <Header.LoginContainer>
            <Link href="/login">
              <Header.Login>로그인</Header.Login>
            </Link>
            <Link href="/signup">
              <Header.Login>회원가입</Header.Login>
            </Link>
          </Header.LoginContainer>
        </Header.MenuContainer>
      </Header.Wrapper>
    </Header.Container>
  );
}
