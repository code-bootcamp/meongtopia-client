import { Rate } from "antd";
import "antd/dist/antd.css";
import ListSlider from "../../../commons/sliders/listslider";
import * as CafeList from "./CafeList.styles";
import { ICafeListUIProps } from "./CafeList.types";
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";
import Select from "react-select";

const LOCATION_TAGS = ["전체", "홍대", "강남", "대학로", "건대", "잠실"];
const CONDITION_TAGS = [
  "애견동반 가능",
  "야외마당 있음",
  "대형견 있음",
  "아이동반 가능",
];

const ORDER_OPTIONS = [
  { value: "최신순", label: "최신순" },
  { value: "과거순", label: "과거순" },
];

const PRICE_OPTIONS = [
  { value: "가격기본순", label: "가격기본순" },
  { value: "가격높은순", label: "가격높은순" },
  { value: "가격낮은순", label: "가격낮은순" },
];

export default function CafeListUI(props: ICafeListUIProps) {
  let data = [...(props.data?.fetchStores || [])];

  // 위치별 태그 필터링
  if (props.locationActive !== "전체") {
    const dataLocation = data?.filter(
      (el) => el.locationTag.name === props.locationActive
    );
    data = dataLocation;
  }

  // 조건별 태그 필터링
  // if (props.conditionActive.length > 1) {
  //   let dataCondition = data;

  //   for (let i = 1; i < props.conditionActive.length; i++) {
  //     dataCondition = dataCondition?.filter((el) => {
  //       for (let j = 0; j < el.storeTag.length; j++) {
  //         if (
  //           el.storeTag[j].name === props.conditionActive[i] &&
  //           el.storeTag.length === props.conditionActive.length - 1
  //         ) {
  //           return el;
  //         }
  //       }
  //     });
  //   }
  //   data = dataCondition;
  // }
  if (props.conditionActive.length > 1) {
    const dataCondition = data?.filter((el: any) => {
      for (let i = 1; i < props.conditionActive.length; i++) {
        if (el.storeTag.includes(props.conditionActive[i])) {
          return el;
        }
      }
    });
    data = dataCondition;
  }

  // 검색 필터링
  if (props.search) {
    const dataSearch = data?.filter((el) => el.name?.includes(props.search));
    data = dataSearch;
  }

  // 정렬 필터링
  let dataPrice: any = [];
  if (props.price === "가격높은순") {
    dataPrice = data?.sort((a, b) => b.entranceFee - a.entranceFee);
    data = dataPrice;
  }
  if (props.price === "가격낮은순") {
    dataPrice = data?.sort((a, b) => a.entranceFee - b.entranceFee);
    data = dataPrice;
  }

  return (
    <>
      {/* 검색 컴포넌트 */}
      <CafeList.SearchContainer>
        <CafeList.SearchWrapper>
          <CafeList.Title>애견카페 맞춤 검색</CafeList.Title>
          <CafeList.SearchList>
            <CafeList.TagLabel>위치별 태그</CafeList.TagLabel>
            <CafeList.TagsWrapper>
              {LOCATION_TAGS.map((el) => (
                <CafeList.Tag
                  key={uuidv4()}
                  id={el}
                  isActive={props.locationActive === el}
                  onClick={props.onClickLocationTag}
                >
                  {el}
                </CafeList.Tag>
              ))}
            </CafeList.TagsWrapper>
          </CafeList.SearchList>
          <CafeList.SearchList>
            <CafeList.TagLabel>조건별 태그</CafeList.TagLabel>
            <CafeList.TagsWrapper>
              <CafeList.Tag
                isActive={props.conditionActive.length === 1}
                onClick={props.onClickConditionTagInit}
              >
                조건 없음
              </CafeList.Tag>
              {CONDITION_TAGS.map((el) => (
                <CafeList.Tag
                  key={uuidv4()}
                  id={el}
                  isActive={props.conditionActive.includes(el)}
                  onClick={props.onClickConditionTag}
                >
                  {el}
                </CafeList.Tag>
              ))}
            </CafeList.TagsWrapper>
          </CafeList.SearchList>
          <CafeList.SearchList>
            <CafeList.TagLabel>매장 이름 검색</CafeList.TagLabel>
            <CafeList.SearchBar onChange={props.onChangeSearch} />
          </CafeList.SearchList>
        </CafeList.SearchWrapper>
      </CafeList.SearchContainer>
      {/* 정렬 컴포넌트 */}
      <CafeList.SortContainer>
        <CafeList.SortWrapper>
          <div style={{ marginRight: "1rem" }}>
            <Select
              id="long-value-select"
              instanceId="long-value-select"
              options={ORDER_OPTIONS}
              defaultValue={ORDER_OPTIONS[0]}
              onChange={props.onChangeOrder}
            />
          </div>
          <Select
            id="long-value-select"
            instanceId="long-value-select"
            options={PRICE_OPTIONS}
            defaultValue={PRICE_OPTIONS[0]}
            onChange={props.onChangePrice}
          />
        </CafeList.SortWrapper>
      </CafeList.SortContainer>
      {/* 리스트 컴포넌트 */}
      <CafeList.ListContainer>
        <InfiniteScroll
          pageStart={1}
          loadMore={props.onFetchMore}
          hasMore={true}
        >
          <CafeList.ListWrapper>
            {data?.map((el) => (
              <CafeList.CafeListWrapper key={uuidv4()}>
                {/* 슬라이더 컴포넌트 */}
                <CafeList.SliderWrapper>
                  <ListSlider url={el} />
                </CafeList.SliderWrapper>
                {/* 상세정보 컴포넌트 */}
                <CafeList.CafeList
                  id={el.storeID}
                  onClick={props.onClickMoveToDetail}
                >
                  <CafeList.ContentsText>
                    <CafeList.Title>{el.name}</CafeList.Title>
                    <CafeList.RatingWrapper>
                      <Rate value={el.avgRating} disabled />
                      <span style={{ marginLeft: "0.5rem" }}>
                        {el.avgRating}
                      </span>
                    </CafeList.RatingWrapper>
                  </CafeList.ContentsText>
                  <CafeList.ContentsText>
                    <CafeList.SelectTag>
                      {el.storeTag.map((el) => (
                        <span
                          key={uuidv4()}
                          style={{
                            marginRight: "1rem",
                            color: props.conditionActive.includes(el.name)
                              ? "red"
                              : "orange",
                          }}
                        >{`# ${el.name}`}</span>
                      ))}
                    </CafeList.SelectTag>
                    <CafeList.PickWrapper>
                      <CafeList.Heart />
                      {el.pickCount}
                    </CafeList.PickWrapper>
                  </CafeList.ContentsText>
                  <CafeList.Horizon />
                  <CafeList.ContentsText>
                    <span>{el.address}</span>
                    <CafeList.DogWrapper>
                      <img
                        style={{
                          width: "30px",
                          height: "28px",
                        }}
                        src="/images/bigdog.svg"
                      />
                      <span
                        style={{ margin: "0 1rem 0 0.5rem" }}
                      >{`대형견 ${el.bigDog} 마리`}</span>
                      <img
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                        src="/images/smalldog.svg"
                      />
                      <span
                        style={{ marginLeft: "0.5rem" }}
                      >{`소형견 ${el.smallDog} 마리`}</span>
                    </CafeList.DogWrapper>
                  </CafeList.ContentsText>
                  <CafeList.ContentsText>
                    <span>{`${el.open} ~ ${el.close}`}</span>
                    <CafeList.RatingWrapperMobile>
                      <Rate value={el.avgRating} disabled />
                      <span style={{ marginLeft: "0.5rem" }}>
                        {el.avgRating}
                      </span>
                    </CafeList.RatingWrapperMobile>
                  </CafeList.ContentsText>
                  <CafeList.ContentsText>
                    <CafeList.DogImgContainer>
                      {el.pet
                        .filter((_, i) => i < 4)
                        .map((el) => (
                          <CafeList.DogImg
                            key={uuidv4()}
                            src={`https://storage.googleapis.com/${el.petImgUrl}`}
                          />
                        ))}
                      <CafeList.Add>더 보기{` >`}</CafeList.Add>
                    </CafeList.DogImgContainer>
                    <span
                      style={{ fontSize: "1.2rem" }}
                    >{`입장료 ${el.entranceFee.toLocaleString()}원`}</span>
                    <CafeList.PickWrapperMobile>
                      <CafeList.Heart />
                      {el.pickCount}
                    </CafeList.PickWrapperMobile>
                  </CafeList.ContentsText>
                </CafeList.CafeList>
              </CafeList.CafeListWrapper>
            ))}
          </CafeList.ListWrapper>
        </InfiniteScroll>
      </CafeList.ListContainer>
    </>
  );
}
