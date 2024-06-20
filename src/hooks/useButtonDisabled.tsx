import { Form, FormInstance } from "antd";
import { useMemo } from "react";

type ReturnType = {
  isButtonDisabled: boolean;
};

export function useButtonDisabled(form: FormInstance): ReturnType {
  const formValues = Form.useWatch([], form);

  const isButtonDisabled = useMemo(() => {
    if (formValues === undefined || formValues === null) {
      return true;
    }
    return Object.keys(formValues).some((key) => {
      const value = formValues[key];
      return !value;
    });
  }, [formValues]);

  return {
    isButtonDisabled,
  };
}
