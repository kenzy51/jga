/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import { Upload, message, Button, Popconfirm, Progress } from "antd";
import useMediaQuery from "@hooks/useMediaQuery";
import { useTranslation } from "react-i18next";
import $api from "@utils/axios";
import { AuthApi } from "@constants/api";
import { Links } from "@enums/links";
import styles from "./minio.module.scss";

interface File {
  originFileObj: any;
  name: string;
  type: string;
}

interface MinioUploaderProps {
  onFileName: (fileName: string) => void;
}

const MinioUploader: React.FC<MinioUploaderProps> = ({ onFileName }) => {
  const { t } = useTranslation();
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadCompleted, setUploadCompleted] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false); // Track if uploading is in progress
  const isMobile = useMediaQuery("sm");

  const handleUpload = () => {
    if (!file || uploadCompleted) {
      message.warning("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file.originFileObj);

    setUploading(true); // Set uploading flag to true

    $api
      .post(`${AuthApi.VacancyReply}/file`, formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            // @ts-ignore

            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      })
      .then((response) => {
        onFileName(response.data.url);
        setUploadProgress(0);
        setUploadCompleted(true);
        message.success("Файл успешно загружен");
      })
      .catch((error) => {
        message.error("Ошибка при загрузке файла");
        setFile(null);
        setUploadProgress(0);
      })
      .finally(() => {
        setUploading(false); // Reset uploading flag when upload completes or fails
      });
  };

  const props = {
    classNames: styles.customMinio,
    multiple: false,
    accept: ".pdf,.docx",
    onChange: (info: any) => {
      const { file } = info;
      setFile(file);
      setUploadCompleted(false);
      setUploadProgress(0);
    },
    fileList: file ? [file] : [],
    onRemove: () => {
      setFile(null);
      setUploadCompleted(false);
    },
  };

  const handleReset = () => {
    setFile(null);
    setUploadProgress(0);
    setUploadCompleted(false);
  };

  const handleCancelUpload = () => {
    // Implement cancellation logic here if needed
    message.warning("Upload cancellation is not implemented.");
  };

  return (
    <div className={styles.wrapper}>
      {!file && !uploadCompleted && (
        // @ts-ignore
        <Upload.Dragger {...props}>
          <div className={styles.block}>{t("otclick.doc")}</div>
          <img src={Links.doc} alt="" className={styles.icon} />
        </Upload.Dragger>
      )}
      {file && !uploadCompleted && (
        <div className={styles.upload}>
          <p>{file.name}</p>
          {uploadProgress > 0 && <Progress percent={uploadProgress} />}
          <Popconfirm
            cancelText="Отменить"
            okText="Да"
            onConfirm={handleUpload}
            title="Вы уверены, что хотите загрузить? Действие необратимо"
          >
            <Button type="primary" disabled={uploading}>
              {uploading ? "Загружается..." : "Загрузить"}
            </Button>
          </Popconfirm>
          <Button onClick={handleReset} style={{ marginLeft: "8px" }}>
            Сбросить
          </Button>
        </div>
      )}
      {file && uploadCompleted && (
        <div className={styles.success}>
          {file.type === "application/pdf" ? (
            <>
              <p>{file.name}</p>
              <img src={Links.doc} alt="" className={styles.icon} />
            </>
          ) : (
            <p>Uploaded file is not a PDF</p>
          )}
        </div>
      )}
      {uploading && (
        <div style={{ marginTop: "20px" }}>
          <Popconfirm
            title="Отменить загрузку?"
            onConfirm={handleCancelUpload}
            okText="Да"
            cancelText="Нет"
          >
            <Button danger>Отмена</Button>
          </Popconfirm>
        </div>
      )}
      <br />
    </div>
  );
};

export default MinioUploader;
