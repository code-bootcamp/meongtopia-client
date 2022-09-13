import { useRouter } from "next/router";
import SignUpOwnerPresenterPage from "./Signup.owner.presenter";
import { useMutation } from "@apollo/client";
import {
  CHECK_VALID_TOKEN,
  GET_TOKEN,
  CREATE_OWNER,
  UPLOAD_FILE,
} from "./Signup.owner.queries";
import { ChangeEvent, useState, useEffect } from "react";
import { Modal, message } from "antd";
import "antd/dist/antd.css";
import { checkEmail } from "../../../commons/libraries/utils";

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

export default function SignUpOwnerContainerPage() {
  const router = useRouter();

  const [getToken] = useMutation(GET_TOKEN);
  const [checkValidToken] = useMutation(CHECK_VALID_TOKEN);
  const [createOwner] = useMutation(CREATE_OWNER);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [phone, setPhone] = useState("");
  const [checkNum, setCheckNum] = useState("");
  const [file, setFile] = useState(""); // 사업장 이미지
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordChk, setPasswordChk] = useState("");
  const [storeName, setStoreName] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordChkError, setPasswordChkError] = useState("");
  const [storeNameError, setStoreNameError] = useState("");

  const [phoneCheck, setPhoneCheck] = useState(false);

  //====================================================================================//
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const [isCountdown, setIsCountdown] = useState(false);

  useEffect(() => {
    if (isCountdown === false) return;

    const timer = setInterval(() => {
      if (Number(seconds) > 0) {
        setSeconds(Number(seconds) - 1);
      }

      if (Number(seconds) === 0) {
        if (Number(minutes) === 0) {
          clearInterval(timer);
        } else {
          setMinutes(Number(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [minutes, seconds, isCountdown]);

  //====================================================================================//

  //====================================================================================//

  const onChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const onChangeCheckNum = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckNum(event.target.value);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };

  const onChangePasswordChk = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordChk(event.target.value);
    if (event.target.value !== "") {
      setPasswordChkError("");
    }
  };

  const onChangeStoreName = (event: ChangeEvent<HTMLInputElement>) => {
    setStoreName(event.target.value);
    if (event.target.value !== "") {
      setStoreNameError("");
    }
  };

  const onChangeFile = (event: any) => {
    setFile(event.target.value);
  };

  // img url 만들어주는 api;
  const onChangeImg = async (event: any) => {
    const ImageFile = event.target.files[0];

    try {
      const result = await uploadFile({ variables: { files: ImageFile } });
      setFile(result.data?.uploadFile);
      console.log(result.data?.uploadFile);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const onClickGetToken = async () => {
    if (phone.length < 11) {
      message.error({
        content: "번호를 제대로 입력해주세요",
      });
      return;
    }
    try {
      console.log("시작");
      const result = await getToken({
        variables: {
          phone: String(phone),
        },
      });
      console.log(result);
      Modal.success({
        content: "인증번호가 발송되었습니다.",
      });
      setIsCountdown((prev) => !prev); // countdown 시작
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: "이미 등록되어 있는 번호입니다",
        });
      }
    }
  };

  const onClickCheckValidToken = async () => {
    try {
      const result = await checkValidToken({
        variables: {
          phone: String(phone),
          token: String(checkNum),
        },
      });
      setPhoneCheck(true);
      console.log(result.data?.checkValidToken); // output : true
      message.success("인증 완료되었습니다.");
      setIsCountdown((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) {
        message.error("인증 실패. 다시 시도해주세요");
      }
    }
  };

  const onClickSubmit = async () => {
    if (!checkEmail(email)) {
      setEmailError("이메일 @까지 입력해주세요");
    }

    if (!password) {
      setPasswordError("비밀번호를 입력해주세요");
    }

    if (!passwordChk) {
      setPasswordChkError("비밀번호를 입력해주세요");
    }
    if (password !== passwordChk) {
      setPasswordError("비밀번호가 일치하지 않습니다");
      setPasswordChkError("비밀번호가 일치하지 않습니다");
    }

    if (!storeName) {
      setStoreNameError("상호명을 입력해주세요");
    }

    if (phoneCheck === false) {
      Modal.error({
        content: "핸드폰 인증을 완료해주세요",
      });
      return;
    }

    try {
      const result = await createOwner({
        variables: {
          createUserInput: {
            name: "이름",
            nickname: "닉네임",
            email,
            password,
            storeName,
            businessLicenseImg: [file].flatMap,
            phone,
          },
        },
      });
      console.log(result);
      Modal.success({
        content: `${storeName}사장님 회원가입 되셨습니다. 관리자가 사업등록번호를 확인한 후 가게를 등록할 수 있습니다.`,
      });
      router.push("/login");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  const onClickMoveToUser = () => {
    router.push("/signup");
  };

  // const schema = yup.object({
  //   email: yup
  //     .string()
  //     .required("이메일을 입력해주세요")
  //     .matches(
  //       /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
  //       "이메일 형식에 맞지 않습니다"
  //     ),
  //   password: yup
  //     .string()
  //     .required("비밀번호를 입력해주세요")
  //     .min(8, "비밀번호는 최소 8자리 이상 입력해주세요"),
  //   storeName: yup.string().required("상호명을 입력해주세요"),
  // });

  // const { register, handleSubmit, formState } = useForm({
  //   resolver: yupResolver(schema),
  //   mode: "onChange",
  // });

  return (
    <SignUpOwnerPresenterPage
      // handleSubmit={handleSubmit}
      // register={register}
      // formState={formState} // 에러메세지담긴곳
      onClickMoveToUser={onClickMoveToUser}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangePasswordChk={onChangePasswordChk}
      onChangeStoreName={onChangeStoreName}
      onChangePhone={onChangePhone}
      onChangeCheckNum={onChangeCheckNum}
      onChangeFile={onChangeFile}
      emailError={emailError}
      passwordError={passwordError}
      passwordChkError={passwordChkError}
      storeNameError={storeNameError}
      minutes={minutes}
      seconds={seconds}
      isCountdown={isCountdown}
      onClickGetToken={onClickGetToken}
      onClickCheckValidToken={onClickCheckValidToken}
      onClickSubmit={onClickSubmit}
      onChangeImg={onChangeImg}
    />
  );
}
