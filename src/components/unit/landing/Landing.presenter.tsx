import { Row, Col } from "antd";
import * as Landing from "./Landing.styles";

export default function LandingPresenterPage() {
  return (
    <Landing.Wrapper>
      <Landing.ReCafeList>
        <Landing.ReTitle>실시간 인기 애견카페</Landing.ReTitle>
        <Landing.ReCafeWrap>
          <Landing.CafeDetail>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Landing.CafeImg src="/images/cafe.jpeg" />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Landing.CafeInfoWrap>
                  <Landing.InfoTitle>상세정보</Landing.InfoTitle>
                  <Landing.CafeName>상수역 도기 애견카페</Landing.CafeName>
                  <Landing.RatingWrap>
                    <Landing.RatingTitle>별점</Landing.RatingTitle>
                    <Landing.RatingImg src="/images/star.png" />
                  </Landing.RatingWrap>
                  <Landing.CafeDetailInfo>
                    서울특별시 마포구 상수동 12-3
                  </Landing.CafeDetailInfo>
                  <Landing.CafeDetailInfo>9:00 ~ 20:00</Landing.CafeDetailInfo>
                  <Landing.CafeDetailInfo>
                    대표 메뉴 : 아메리카노 + 입장권 8500원
                  </Landing.CafeDetailInfo>
                </Landing.CafeInfoWrap>
              </Col>
            </Row>
            <Landing.MoveToCafe src="/images/movecafe.png" />
          </Landing.CafeDetail>
        </Landing.ReCafeWrap>
      </Landing.ReCafeList>

      <Landing.ReCafeList>
        <Landing.ReCafeWrap>
          <Landing.CafeDetail>
            <Landing.CafeImg src="/images/cafe.jpeg" />
            <Landing.CafeInfoWrap>
              <Landing.InfoTitle>상세정보</Landing.InfoTitle>
              <Landing.CafeName>상수역 도기 애견카페</Landing.CafeName>
              <Landing.RatingWrap>
                <Landing.RatingTitle>별점</Landing.RatingTitle>
                <Landing.RatingImg src="/images/star.png" />
              </Landing.RatingWrap>
              <Landing.CafeDetailInfo>
                서울특별시 마포구 상수동 12-3
              </Landing.CafeDetailInfo>
              <Landing.CafeDetailInfo>9:00 ~ 20:00</Landing.CafeDetailInfo>
              <Landing.CafeDetailInfo>
                대표 메뉴 : 아메리카노 + 입장권 8500원
              </Landing.CafeDetailInfo>
            </Landing.CafeInfoWrap>
            <Landing.MoveToCafe src="/images/movecafe.png" />
          </Landing.CafeDetail>
        </Landing.ReCafeWrap>
      </Landing.ReCafeList>

      <Landing.DescWrap>
        <Landing.Title>
          믿을 수 있고, <br />
          안심할 수 있어요
        </Landing.Title>

        <Landing.DetailWrap>
          <Landing.Detail>
            <Landing.DescImg src="/images/house1.jpeg" />
            <Landing.DescMents>4단계 신원 및 환경 검증</Landing.DescMents>
            <Landing.DescMents>
              신원 확인과 함께 직접 집에 방문하여 <br />
              돌봄 환경의 안전성을 제공합니다.
            </Landing.DescMents>
          </Landing.Detail>

          <Landing.Detail>
            <Landing.DescImg src="/images/house1.jpeg" />
            <Landing.DescMents>4단계 신원 및 환경 검증</Landing.DescMents>
            <Landing.DescMents>
              신원 확인과 함께 직접 집에 방문하여 <br />
              돌봄 환경의 안전성을 제공합니다.
            </Landing.DescMents>
          </Landing.Detail>

          <Landing.Detail>
            <Landing.DescImg src="/images/house1.jpeg" />
            <Landing.DescMents>4단계 신원 및 환경 검증</Landing.DescMents>
            <Landing.DescMents>
              신원 확인과 함께 직접 집에 방문하여 <br />
              돌봄 환경의 안전성을 제공합니다.
            </Landing.DescMents>
          </Landing.Detail>
        </Landing.DetailWrap>
      </Landing.DescWrap>

      <Landing.LastPart src="/images/lastpart.png" />
    </Landing.Wrapper>
  );
}
