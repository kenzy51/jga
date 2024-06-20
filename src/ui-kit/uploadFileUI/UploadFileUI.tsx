/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-useless-fragment */
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, FormInstance, Tag, Upload, message } from "antd";
import { Links } from "@enums/links";
import styles from "./UploadFileUI.module.scss";

type UploadFileUIProps = {
  form: FormInstance;
  name: string;
  onChange?: any;
};

export const UploadFileUI: FC<UploadFileUIProps> = (props) => {
  const { t } = useTranslation();
  const { form, name, onChange } = props;
  const [file, setFile] = useState<any>(null);

  useEffect(() => {
    if (form && name) {
      setFile(form.getFieldValue(name));
    }
  }, [form, name]);

  const handleFileChange = async (info: any) => {
    let files = [...info.fileList];

    if (files.length > 1) {
      files = [files[files.length - 1]];
    }

    if (files[0]?.status) {
      onChange("");
      setFile(null);
    } else {
      setFile(files[0].originFileObj);
      onChange(files[0].originFileObj);
    }
  };

  const beforeUpload = (upload: any) => {
    const isPdfOrDocx =
      upload.type === "application/pdf" ||
      upload.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

    if (!isPdfOrDocx) {
      message.error(t("uploadFile.accept"));
      return true;
    }

    if (upload.size / 1024 / 1024 > 20) {
      message.error(t("uploadFile.acceptableSize"));
      return true;
    }

    return false;
  };

  const handleDeleteFile = () => {
    setFile(null);
    onChange("");
  };

  return (
    <>
      {file ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "fit-content",
          }}
        >
          {file?.name && (
            <Tag color="green">{`${file.name} ${t(
              "uploadFile.downFile"
            )}`}</Tag>
          )}
          <Button
            size="small"
            danger
            onClick={handleDeleteFile}
            style={{ width: "inherit" }}
          >
            {t("uploadFile.getAnother")}
          </Button>
        </div>
      ) : (
        <Upload.Dragger
          fileList={[]}
          onChange={handleFileChange}
          accept=".pdf,.docx"
          beforeUpload={beforeUpload}
          style={{ background: "#EBEBF2" }}
          className={styles.upload}
        >
          <p className={styles.text}>{t("uploadFile.dropFile")}</p>
          <img src={Links.doc} alt="" />
        </Upload.Dragger>
      )}
    </>
  );
};
