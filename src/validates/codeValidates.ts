import { RuleObject } from "rc-field-form/lib/interface";

export const codeValidates = /^[0-9]{3}-[0-9]{3}$/;
export const passwordValidates =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d.,\-_]{8,}$/;

export const validatePassword = (
  rule: RuleObject,
  value: string,
  callback: (is?: string) => void
) => {
  const pattern = passwordValidates;
  if (value && !pattern.test(value)) {
    callback(
      "Пароль должен содержать минимум одну заглавную букву и один символ"
    );
  } else {
    callback();
  }
};
