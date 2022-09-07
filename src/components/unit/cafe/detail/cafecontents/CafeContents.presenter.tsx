import moment from "moment";
import { useEffect } from "react";
import * as CafeContents from "./CafeContents.styles";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function DetailCafeContentsUI() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=16d68c6a7dd55f93102ec051f30cf0a7&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(34.84719, 128.59191), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        console.log(map);

        const markerPosition = new window.kakao.maps.LatLng(
          34.84719,
          128.59191
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    };
  }, []);
  return (
    <>
      <CafeContents.Wrapper>
        <CafeContents.TitleWrapper>
          <CafeContents.Title>왕왕 애견카페</CafeContents.Title>
          <CafeContents.Pick />
        </CafeContents.TitleWrapper>
        <CafeContents.InfoWrapper>
          <CafeContents.Label>
            왕왕 애견카페에 오신 걸 환영합니다.
          </CafeContents.Label>
          <CafeContents.Label>010-1111-1111</CafeContents.Label>
          <CafeContents.Label>10:00 ~ 20:00</CafeContents.Label>
        </CafeContents.InfoWrapper>
        <CafeContents.CafeImg src="/images/cafe1.png" />
        <CafeContents.Title>태그</CafeContents.Title>
        <CafeContents.TagsWrapper>
          <CafeContents.Tag>없음</CafeContents.Tag>
          <CafeContents.Tag>동반 가능 유무</CafeContents.Tag>
          <CafeContents.Tag>야외 마당 유무</CafeContents.Tag>
          <CafeContents.Tag>대형견 유무</CafeContents.Tag>
        </CafeContents.TagsWrapper>
        <CafeContents.Title>메뉴</CafeContents.Title>
        <CafeContents.MenuWrapper>
          <CafeContents.Title>이용 요금</CafeContents.Title>
        </CafeContents.MenuWrapper>
        <CafeContents.Menu></CafeContents.Menu>
        <CafeContents.PaymentBtn>결제하기</CafeContents.PaymentBtn>
        <CafeContents.Title>예약 가능 날짜</CafeContents.Title>
        <CafeContents.CalendarWrapper>
          {/* <CafeContents.Cal
            locale="ko"
            formatDay={(locale, date) => moment(date).format("DD")}
          /> */}
        </CafeContents.CalendarWrapper>
        <CafeContents.Map>
          <div
            id="map"
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          />
        </CafeContents.Map>
      </CafeContents.Wrapper>
    </>
  );
}
