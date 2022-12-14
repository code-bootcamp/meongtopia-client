import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import LoginPresenterPage from "./Login.presenter";
import { LOGIN } from "./Login.queries";

import { Modal } from "antd";
import "antd/dist/antd.css";

export default function LoginContainerPage() {
  const [login] = useMutation(LOGIN);

  const router = useRouter();
  const loginRef = useRef();

  // useEffect(() => {
  //   loginRef.current?.focus();
  // }, []);

  const onClickGoogle = () => {
    router.push("https://meongtopiaserver.shop/login/google");
  };

  const onClickNaver = () => {
    router.push("https://meongtopiaserver.shop/login/naver");
  };

  const onClickKakao = () => {
    router.push("https://meongtopiaserver.shop/login/kakao");
  };

  const [isActive, setIsActive] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }

    if (event.target.value && password) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    if (email && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onClickLogin = async () => {
    if (!email) {
      setEmailError("이메일을 입력해주세요");
    }

    if (!password) {
      setPasswordError("비밀번호를 입력해주세요");
    }

    try {
      const result = await login({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.login;
      setAccessToken(accessToken);
      setIsActive(true);

      if (!accessToken) {
        alert("로그인 실패. 다시 시도해주세요!");
        return;
      }
      router.push("/home");
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  const onClickMoveToSignup = () => {
    router.push("/signup");
  };

  return (
    <LoginPresenterPage
      emailError={emailError}
      passwordError={passwordError}
      isActive={isActive}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      onClickMoveToSignup={onClickMoveToSignup}
      onClickNaver={onClickNaver}
      onClickGoogle={onClickGoogle}
      onClickKakao={onClickKakao}
      // loginRef={loginRef}
    />
  );
}
