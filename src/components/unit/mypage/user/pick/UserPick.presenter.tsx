import * as UserPick from "./UserPick.styles";
import { Rate } from "antd";
import "antd/dist/antd.css";

export default function MyPageUserPickUI() {
  return (
    <UserPick.Wrapper>
      <UserPick.SortWrapper>
        <UserPick.SortSelect name="정렬방식">
          <option>정렬방식</option>
        </UserPick.SortSelect>
      </UserPick.SortWrapper>
      <UserPick.ListContainer>
        <UserPick.Img src="/images/cafe2.jpeg" />
        <UserPick.DetailContainer>
          <UserPick.Title>상수역 멍멍 애견카페</UserPick.Title>
          <UserPick.RatingContainer>
            <UserPick.RatingLabel>별점</UserPick.RatingLabel>
            <Rate value={5} disabled />
          </UserPick.RatingContainer>
          <UserPick.Text>서울특별시 마포구 상수동 123</UserPick.Text>
          <UserPick.Text>9:00 ~ 20:00</UserPick.Text>
          <UserPick.Text>입장료 9000원</UserPick.Text>
        </UserPick.DetailContainer>
      </UserPick.ListContainer>
      <UserPick.ListContainer>
        <UserPick.Img src="/images/cafe2.jpeg" />
        <UserPick.DetailContainer>
          <UserPick.Title>상수역 멍멍 애견카페</UserPick.Title>
          <UserPick.RatingContainer>
            <UserPick.RatingLabel>별점</UserPick.RatingLabel>
            <Rate value={5} disabled />
          </UserPick.RatingContainer>
          <UserPick.Text>서울특별시 마포구 상수동 123</UserPick.Text>
          <UserPick.Text>9:00 ~ 20:00</UserPick.Text>
          <UserPick.Text>입장료 9000원</UserPick.Text>
        </UserPick.DetailContainer>
      </UserPick.ListContainer>
      <UserPick.ListContainer>
        <UserPick.Img src="/images/cafe2.jpeg" />
        <UserPick.DetailContainer>
          <UserPick.Title>상수역 멍멍 애견카페</UserPick.Title>
          <UserPick.RatingContainer>
            <UserPick.RatingLabel>별점</UserPick.RatingLabel>
            <Rate value={5} disabled />
          </UserPick.RatingContainer>
          <UserPick.Text>서울특별시 마포구 상수동 123</UserPick.Text>
          <UserPick.Text>9:00 ~ 20:00</UserPick.Text>
          <UserPick.Text>입장료 9000원</UserPick.Text>
        </UserPick.DetailContainer>
      </UserPick.ListContainer>
    </UserPick.Wrapper>
  );
}
