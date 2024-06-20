/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { message } from "antd";
import $api from "@utils/axios";
import { AuthApi } from "@constants/api";

export const useFilesUpload = () => {
  const [loadingFile, setLoadingFile] = useState(false);

  const uploadFile = async (file: any) => {
    try {
      setLoadingFile(true);

      const formData = new FormData();
      formData.append("file", file);

      const response = await $api.post(
        `${AuthApi.VacancyReply}/file`,
        formData
      );

      setLoadingFile(false);

      if (response.data.url) {
        return response.data.url;
      }
      return "";
    } catch (error) {
      setLoadingFile(false);
      console.error("Upload failed:", error);
      message.error("Ошибка при загрузке файла.");
      return "";
    }
  };

  return {
    fileUpload: {
      uploadFile,
      loadingFile,
    },
  };
};
