import { LocalStorageKey } from "@enums/localStorage";
import { LocalStorage } from "@localStorage/localStorage";

export const makeAuthorization = () => {
  const token = localStorage.getItem("at");
  const lang = LocalStorage.getItem(LocalStorageKey.Lang);
  let parsedToken = "";

  if (token !== null) {
    parsedToken = JSON.parse(token);
  }

  return {
    headers: {
      Authorization: `Bearer ${parsedToken}`,
      "Content-Type": "image/jpeg",
      "accept-language": lang,
    },
  };
};
