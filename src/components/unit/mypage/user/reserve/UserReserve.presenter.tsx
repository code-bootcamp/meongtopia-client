import * as UserReserve from "./UserReserve.styles";
import { Rate } from "antd";
import "antd/dist/antd.css";

export default function MyPageUserReserveUI() {
  return (
    <UserReserve.Wrapper>
      <UserReserve.SortWrapper>
        <UserReserve.SortSelect name="정렬방식">
          <option>정렬방식</option>
        </UserReserve.SortSelect>
      </UserReserve.SortWrapper>
      <UserReserve.ListContainer>
        <UserReserve.Img src="/images/cafe2.jpeg" />
        <UserReserve.DetailContainer>
          <UserReserve.Title>상수역 멍멍 애견카페</UserReserve.Title>
          <UserReserve.RatingContainer>
            <UserReserve.RatingLabel>별점</UserReserve.RatingLabel>
            <Rate value={5} disabled />
          </UserReserve.RatingContainer>
          <UserReserve.Text>서울특별시 마포구 상수동 123</UserReserve.Text>
          <UserReserve.Text>영업시간: 9:00 ~ 20:00</UserReserve.Text>
          <UserReserve.Date>예약일: 2022년 9월 1일</UserReserve.Date>
          <UserReserve.CostContainer>
            <UserReserve.CostText>성인 2명 입장료</UserReserve.CostText>
            <UserReserve.CostText>₩ 18,000원</UserReserve.CostText>
          </UserReserve.CostContainer>
        </UserReserve.DetailContainer>
      </UserReserve.ListContainer>
      <UserReserve.ListContainer>
        <UserReserve.Img src="/images/cafe2.jpeg" />
        <UserReserve.DetailContainer>
          <UserReserve.Title>상수역 멍멍 애견카페</UserReserve.Title>
          <UserReserve.RatingContainer>
            <UserReserve.RatingLabel>별점</UserReserve.RatingLabel>
            <Rate value={5} disabled />
          </UserReserve.RatingContainer>
          <UserReserve.Text>서울특별시 마포구 상수동 123</UserReserve.Text>
          <UserReserve.Text>영업시간: 9:00 ~ 20:00</UserReserve.Text>
          <UserReserve.Date>예약일: 2022년 9월 1일</UserReserve.Date>
          <UserReserve.CostContainer>
            <UserReserve.CostText>성인 2명 입장료</UserReserve.CostText>
            <UserReserve.CostText>₩ 18,000원</UserReserve.CostText>
          </UserReserve.CostContainer>
        </UserReserve.DetailContainer>
      </UserReserve.ListContainer>
      <UserReserve.ListContainer>
        <UserReserve.Img src="/images/cafe2.jpeg" />
        <UserReserve.DetailContainer>
          <UserReserve.Title>상수역 멍멍 애견카페</UserReserve.Title>
          <UserReserve.RatingContainer>
            <UserReserve.RatingLabel>별점</UserReserve.RatingLabel>
            <Rate value={5} disabled />
          </UserReserve.RatingContainer>
          <UserReserve.Text>서울특별시 마포구 상수동 123</UserReserve.Text>
          <UserReserve.Text>영업시간: 9:00 ~ 20:00</UserReserve.Text>
          <UserReserve.Date>예약일: 2022년 9월 1일</UserReserve.Date>
          <UserReserve.CostContainer>
            <UserReserve.CostText>성인 2명 입장료</UserReserve.CostText>
            <UserReserve.CostText>₩ 18,000원</UserReserve.CostText>
          </UserReserve.CostContainer>
        </UserReserve.DetailContainer>
      </UserReserve.ListContainer>
    </UserReserve.Wrapper>
  );
}
