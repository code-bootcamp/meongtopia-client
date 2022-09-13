import * as CafeContentsWrite from "./CafeContentsWrite.styles";
import CafeImgUpload from "../../../../commons/upload/cafeimg/CafeImgUpload.container";
import KakaoMap from "../../../../commons/map";
import "antd/dist/antd.css";
import DogContentsWrite from "../dogcontents/DogContentsWrite.container";
import dynamic from "next/dynamic";
import "@toast-ui/editor/dist/toastui-editor.css";

const ToastEditor = dynamic(() => import("../../../../commons/toast/Toast"), {
  ssr: false,
});

export default function CafeContentsWriteUI(props) {
  return (
    <>
      <CafeContentsWrite.Wrapper>
        <CafeContentsWrite.ProcedureWrapper>
          <CafeContentsWrite.Procedure01>
            01 카페정보 입력
          </CafeContentsWrite.Procedure01>
          <CafeContentsWrite.Procedure02>
            02 강아지정보 입력
          </CafeContentsWrite.Procedure02>
        </CafeContentsWrite.ProcedureWrapper>
        <CafeContentsWrite.ProcedureUnderBar>
          <CafeContentsWrite.ProcedureUnderBar01 next={props.next} />

          <CafeContentsWrite.ProcedureUnderBar02 next={props.next} />
        </CafeContentsWrite.ProcedureUnderBar>

        {props.next && <DogContentsWrite />}
        <form onSubmit={props.handleSubmit(props.onClickCreateStore)}>
          {!props.next && (
            <>
              <CafeContentsWrite.Tag>
                업체명을 입력해주세요
              </CafeContentsWrite.Tag>
              <CafeContentsWrite.CafeNameInput
                required
                placeholder="OO 애견카페"
                {...props.register("name")}
              ></CafeContentsWrite.CafeNameInput>
              <CafeContentsWrite.ErrorTag>
                {props.formState.errors.name?.message}
              </CafeContentsWrite.ErrorTag>

              <CafeContentsWrite.Tag>
                업체 사진을 추가해 주세요
                <CafeContentsWrite.ImageUploadWrapper>
                  {props.fileUrls.map((el, index) => (
                    <CafeImgUpload
                      index={index}
                      fileUrl={el}
                      onChangeFileUrls={props.onChangeFileUrls}
                    />
                  ))}
                </CafeContentsWrite.ImageUploadWrapper>
              </CafeContentsWrite.Tag>
              <CafeContentsWrite.Tag>
                상세 설명을 입력해주세요
              </CafeContentsWrite.Tag>
              <div
                style={{
                  marginTop: "1rem",
                }}
              >
                <ToastEditor
                  defaultValue=""
                  editorRef={props.editorRef}
                  onChangeDescription={props.onChangeDescription}
                />
                {props.description === "<p><br></p>" || "" ? (
                  <CafeContentsWrite.ErrorTag>
                    상세 설명을 입력해주세요
                  </CafeContentsWrite.ErrorTag>
                ) : (
                  ""
                )}
              </div>
              <CafeContentsWrite.Tag>
                전화번호를 입력해주세요
              </CafeContentsWrite.Tag>
              <CafeContentsWrite.CafeNumberInput
                placeholder="010-1234-5678"
                {...props.register("phone")}
              ></CafeContentsWrite.CafeNumberInput>
              <CafeContentsWrite.ErrorTag>
                {props.formState.errors.phone?.message}
              </CafeContentsWrite.ErrorTag>
              <CafeContentsWrite.TimeAndFeeWrapper>
                <CafeContentsWrite.TimeWrapper>
                  <CafeContentsWrite.Tag>운영 시간</CafeContentsWrite.Tag>
                  <CafeContentsWrite.TimeInputWrapper>
                    <CafeContentsWrite.StartTimeInput
                      placeholder="08:00"
                      {...props.register("open")}
                    ></CafeContentsWrite.StartTimeInput>

                    <div>~</div>
                    <CafeContentsWrite.CloseTimeInput
                      placeholder="21:00"
                      {...props.register("close")}
                    ></CafeContentsWrite.CloseTimeInput>
                  </CafeContentsWrite.TimeInputWrapper>
                </CafeContentsWrite.TimeWrapper>

                <CafeContentsWrite.FeeWrapper>
                  <CafeContentsWrite.Tag>입장료</CafeContentsWrite.Tag>
                  <CafeContentsWrite.CafeFeeInput
                    placeholder="5000"
                    {...props.register("entranceFee")}
                  ></CafeContentsWrite.CafeFeeInput>
                </CafeContentsWrite.FeeWrapper>
              </CafeContentsWrite.TimeAndFeeWrapper>
              <CafeContentsWrite.TimeAndFeeErrorWrapper>
                <CafeContentsWrite.ErrorTag>
                  {props.formState.errors.open?.message}
                </CafeContentsWrite.ErrorTag>
                <CafeContentsWrite.ErrorTag>
                  {props.formState.errors.close?.message}
                </CafeContentsWrite.ErrorTag>
                <CafeContentsWrite.ErrorTag>
                  {props.formState.errors.entranceFee?.message}
                </CafeContentsWrite.ErrorTag>
              </CafeContentsWrite.TimeAndFeeErrorWrapper>
              <CafeContentsWrite.Tag>주소를 입력해주세요</CafeContentsWrite.Tag>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <CafeContentsWrite.AddressInput
                  readOnly
                  value={props.address}
                  {...props.register("address")}
                  placeholder="주소 검색하기"
                ></CafeContentsWrite.AddressInput>
                <CafeContentsWrite.ErrorTag>
                  {props.formState.errors.address?.message}
                </CafeContentsWrite.ErrorTag>
                <CafeContentsWrite.AddressBtn
                  onClick={props.onClickAddressModal}
                  type="button"
                >
                  검색하기
                </CafeContentsWrite.AddressBtn>
              </div>
              <CafeContentsWrite.AddressDetailInput
                type="text"
                {...props.register("addressDetail")}
                placeholder="상세주소 입력하기"
              ></CafeContentsWrite.AddressDetailInput>
              <CafeContentsWrite.Tag>
                우리 업체 위치를 확인해주세요
              </CafeContentsWrite.Tag>
              <div
                style={{
                  marginTop: "1.7em",
                  width: "100%",
                  height: "300px",
                }}
              >
                <KakaoMap address={props.address} />
              </div>
              <CafeContentsWrite.Tag>위치 검색 키워드</CafeContentsWrite.Tag>
              <div
                style={{
                  marginTop: "1.7em",
                }}
              >
                <CafeContentsWrite.LocationTagWrapper
                  onChange={props.onChangeLocation}
                  defaultValue="a"
                  buttonStyle="solid"
                >
                  <CafeContentsWrite.LocationButton1
                    location={props.location}
                    value="홍대"
                  >
                    홍대
                  </CafeContentsWrite.LocationButton1>
                  <CafeContentsWrite.LocationButton2
                    location={props.location}
                    value="강남"
                  >
                    강남
                  </CafeContentsWrite.LocationButton2>
                  <CafeContentsWrite.LocationButton3
                    location={props.location}
                    value="대학로"
                  >
                    대학로
                  </CafeContentsWrite.LocationButton3>
                  <CafeContentsWrite.LocationButton4
                    location={props.location}
                    value="건대"
                  >
                    건대
                  </CafeContentsWrite.LocationButton4>
                  <CafeContentsWrite.LocationButton5
                    location={props.location}
                    value="잠실"
                  >
                    잠실
                  </CafeContentsWrite.LocationButton5>
                </CafeContentsWrite.LocationTagWrapper>
              </div>

              <CafeContentsWrite.Tag>옵션 검색 키워드</CafeContentsWrite.Tag>
              <CafeContentsWrite.OptionWrapper>
                <CafeContentsWrite.WithDogBtn
                  type="button"
                  withDog={props.withDog}
                  value="애견동반 가능"
                  onClick={props.onClickWithDog}
                >
                  애견동반 가능
                </CafeContentsWrite.WithDogBtn>
                <CafeContentsWrite.YardBtn
                  yard={props.yard}
                  type="button"
                  value="야외마당 있음"
                  onClick={props.onClickYard}
                >
                  야외마당 있음
                </CafeContentsWrite.YardBtn>
                <CafeContentsWrite.LargeDogBtn
                  type="button"
                  largeDog={props.largeDog}
                  value="대형견 있음"
                  onClick={props.onClickLargeDog}
                >
                  대형견 있음
                </CafeContentsWrite.LargeDogBtn>
                <CafeContentsWrite.WithChildBtn
                  type="button"
                  withChild={props.withChild}
                  value="아이동반 가능"
                  onClick={props.onClickWithChild}
                >
                  아이동반 가능
                </CafeContentsWrite.WithChildBtn>
              </CafeContentsWrite.OptionWrapper>
            </>
          )}
          <CafeContentsWrite.ButtonWrapper>
            <CafeContentsWrite.PrevButton
              type="button"
              onClick={props.onClickPrev}
            >
              이전 단계
            </CafeContentsWrite.PrevButton>
            {!props.next ? (
              <CafeContentsWrite.NextButton
                storeArr={props.storeArr}
                location={props.location}
                fileUrls={props.fileUrls}
                formState={props.formState}
                type="button"
                onClick={props.onClickNext}
              >
                다음
              </CafeContentsWrite.NextButton>
            ) : (
              <CafeContentsWrite.SubmitButton>
                등록 완료
              </CafeContentsWrite.SubmitButton>
            )}
          </CafeContentsWrite.ButtonWrapper>
        </form>
      </CafeContentsWrite.Wrapper>

      {props.isOpen && (
        <CafeContentsWrite.AddressModal
          onOk={props.handleOk}
          onCancel={props.closeModal}
          visible={true}
        >
          <CafeContentsWrite.AddressSearchInput
            onComplete={props.onCompleteAddressSearch}
          />
        </CafeContentsWrite.AddressModal>
      )}
    </>
  );
}
