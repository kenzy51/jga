export type SignInType = {
  email: string;
  password: string;
};

export type SignUpType = {
  name: string;
  email: string;
  lastname: string;
  password: string;
  confirmPassword: string;
};

export type SignSendUpType = {
  name: string;
  email: string;
  lastname: string;
  password: string;
};

export type ForgotPasswordType = {
  email: string;
};

export type ConfirmPasswordType = {
  resetToken: string;
  password: string;
  confirmPassword: string;
};

export type ConfirmSendPasswordType = {
  resetToken: string;
  password: string;
};

export type SendCode = {
  email: string;
};

export type CheckCode = {
  verificationCode: string;
  email: string;
};

export type SendApplication = {
  username: string;
  phone: string;
  email: string;
  application_type: string;
};
