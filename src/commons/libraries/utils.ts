// 이메일 유효 검사
export const checkEmail = (email: string) => {
  const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return regEmail.test(email);
};

// 영어 + 숫자 8자리 이상 비밀번호 유효 검사
export const checkPassword = (password: string) => {
  const regPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;
  return regPassword.test(password);
};

// 이메일 가리기
export const emailBlind = (email: string) => {
  if (!email) return;
  const idx1 = email.indexOf("@");
  const idx2 = email.indexOf(".");
  const idSlice = email.slice(3, idx1);
  const emailSlice = email.slice(idx1 + 2, idx2);
  let Replace = email.replace(idSlice, "*".repeat(idSlice.length));
  Replace = Replace.replace(emailSlice, "*".repeat(emailSlice.length));
  return Replace;
};

// 휴대폰 번호 가리기
export const phoneBlind = (phone: string) => {
  if (!phone) return;
  if (phone.length === 11) {
    phone = phone.replace(/(\d{4})(\d{3})(\d{4})/g, `$1***$3`);
    phone = phone.slice(0, -3) + "***";
  }
  if (phone.length === 10) {
    phone = phone.replace(/(\d{4})(\d{2})(\d{4})/g, "$1**$3");
    phone = phone.slice(0, -3) + "***";
  }
  return phone;
};

// 에러메세지 경고창
export const getErrorMessage = (error: unknown) => {
  let message: string;
  if (error instanceof Error) message = error.message;
  else message = String(error);

  alert(message);
};

export const getDate = (value: any) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
};
