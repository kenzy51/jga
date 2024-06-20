import { createContext, useMemo, useState } from "react";
import { AlertColor } from "@mui/material";

const ALERT_TIME = 5000;
const initialState = {
  text: "",
  type: "",
};

export const AlertContext = createContext({
  ...initialState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAlert: (alertText: string, alertType: AlertColor) => {},
});

export const AlertProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [text, setText] = useState("");
  const [type, setType] = useState<AlertColor>("warning");

  const setAlert = (alertText: string, alertType: AlertColor): void => {
    setText(alertText);
    setType(alertType);

    setTimeout(() => {
      setText("");
      setType("warning");
    }, ALERT_TIME);
  };

  return useMemo(
    () => (
      <AlertContext.Provider
        value={{
          text,
          type,
          setAlert,
        }}
      >
        {children}
      </AlertContext.Provider>
    ),
    [text, type]
  );
};
