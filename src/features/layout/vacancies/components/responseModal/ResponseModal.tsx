/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-plusplus */
import { FC, useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Button, Form, notification } from "antd";
import { LocalStorageKey } from "@enums/localStorage";
import { LocalStorage } from "@localStorage/localStorage";
import { IVacancies } from "@enums/slices";
import { replyVacancy } from "@store/slices";
import { VacancieModal } from "@ui-kit/vacancieModal";
import { VacationInput, VacationTextArea } from "@ui-kit/vacationInput";
import { UploadFileUI } from "@ui-kit/uploadFileUI";
import { useAppSelector } from "@hooks/useAppSelector";
import { useAppDispatch } from "@hooks/useAppDispatch";
import styles from "./ResponseModal.module.scss";
import { useFilesUpload } from "./fileUpload";

const saveVacancyIdsToLocalStorage = (ids: Record<string, boolean>): void => {
  LocalStorage.setItem(LocalStorageKey.VacancyIds, JSON.stringify(ids));
};

type PropsType = {
  open: boolean;
  onClose: () => void;
  currentVacancy?: IVacancies | null;
  vacancyIds: Record<string, boolean> | any;
  setVacancyIds: (ids: Record<string, boolean>) => void;
};

export const ResponseModal: FC<PropsType> = (props) => {
  const { open, onClose, currentVacancy, vacancyIds, setVacancyIds } = props;
  const { t } = useTranslation();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.barca.replyVacancy);

  const {
    fileUpload: { uploadFile, loadingFile },
  } = useFilesUpload();

  const isLoading = loading || loadingFile;

  const addVacancyId = (vacancyId: number): void => {
    const currentIds = { ...vacancyIds };
    currentIds[vacancyId.toString()] = true;
    setVacancyIds(currentIds);
    saveVacancyIdsToLocalStorage(currentIds);
  };

  const onFinish = async (values: any) => {
    const cv = await uploadFile(values.cv);

    const updatedData = {
      ...values,
      vacancyId: currentVacancy?.id,
      cv,
    };

    if (cv) {
      dispatch(replyVacancy(updatedData)).then((data) => {
        if (data.meta.requestStatus === "fulfilled") {
          notification.success({
            message: "Резюме отправлено",
          });
          if (currentVacancy && !vacancyIds[currentVacancy.id]) {
            addVacancyId(currentVacancy.id);
          }
          form.resetFields();
          onClose();
        }

        if (data.meta.requestStatus === "rejected") {
          notification.error({
            message: "Что-то пошло не так",
          });
        }
      });
    }
  };

  const handlePhoneKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  return (
    <VacancieModal
      centered
      open={open}
      onCancel={onClose}
      width={screenWidth < 700 ? "100%" : 622}
      footer={false}
    >
      <Form
        name="codeForm"
        onFinish={onFinish}
        form={form}
        disabled={isLoading}
        className={styles.form}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: t("otclick.fioText"),
            },
          ]}
        >
          <VacationInput placeholder={t("otclick.fio")} />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: t("otclick.phoneText"),
            },
          ]}
        >
          <VacationInput
            placeholder={t("otclick.phone")}
            defaultValue="+"
            inputMode="numeric"
            pattern="[0-9]*"
            onKeyPress={handlePhoneKeyPress}
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: t("otclick.emailText"),
            },
            {
              type: "email",
              message: t("otclick.emailCorrect"),
            },
          ]}
        >
          <VacationInput placeholder="Email" />
        </Form.Item>

        <Form.Item name="coverLetter">
          <VacationTextArea
            placeholder={t("otclick.cover")}
            className={styles.cover}
          />
        </Form.Item>

        <Form.Item
          name="cv"
          rules={[
            {
              required: true,
              message: t("otclick.docText"),
            },
          ]}
        >
          <UploadFileUI form={form} name="cv" />
        </Form.Item>
        <Button
          className={styles.btn}
          htmlType="submit"
          loading={isLoading}
          disabled={false}
        >
          <Trans i18nKey="vacancies.otclick" />
        </Button>
      </Form>
    </VacancieModal>
  );
};
