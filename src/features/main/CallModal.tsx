import React from "react";
import { Button, Form } from "antd";
import { CustomModal } from "@ui-kit/customModal";
import { Trans, useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import { CloseOutlined } from "@ant-design/icons";
import { FormInput } from "@ui-kit/formInput";
import { useButtonDisabled } from "@hooks/useButtonDisabled";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { sendApplication, setCallModal } from "@store/slices";
import { useAppSelector } from "@hooks/useAppSelector";
import { getCallVisibleSelector } from "@store/selectors";
import styles from "./CallModal.module.scss";
import "react-phone-input-2/lib/style.css";

type PropsType = {
  onClose: () => void;
};

export const CallModal: React.FC<PropsType> = ({ onClose }) => {
  const callVisible = useAppSelector(getCallVisibleSelector);
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { isButtonDisabled } = useButtonDisabled(form);
  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    dispatch(sendApplication(values));
    dispatch(setCallModal(false));
    form.resetFields();
  };

  return (
    <CustomModal
      centered
      open={callVisible}
      onCancel={onClose}
      title={t("call.title")}
      closeIcon={
        <CloseOutlined
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
      }
      width={800}
      footer={false}
    >
      <Form name="codeForm" onFinish={onFinish} form={form}>
        <div className={styles.block}>
          <Form.Item name="name">
            <FormInput type="text" placeholder={t("call.name")} />
          </Form.Item>
          <Form.Item name="lastname">
            <FormInput type="text" placeholder={t("call.lastname")} />
          </Form.Item>
        </div>
        <div className={styles.block}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите email",
              },
              {
                type: "email",
                message: "Введите корректный email",
              },
            ]}
          >
            <FormInput placeholder={t("call.email")} />
          </Form.Item>
          <Form.Item name="phone" className={styles.phone}>
            <PhoneInput inputStyle={{ width: "100%" }} country="kg" />
          </Form.Item>
        </div>
        <Form.Item name="text">
          <FormInput type="text" placeholder={t("call.message")} />
        </Form.Item>
        <div className={styles.btnBlock}>
          <Button
            htmlType="submit"
            className={styles.btn}
            disabled={isButtonDisabled}
          >
            <Trans i18nKey="call.btn" />
          </Button>
        </div>
      </Form>
    </CustomModal>
  );
};
