"use client";
import loginAuth from "../auth/LoginAuth";
import ResetPasswordForm from "../components/Forms/ResetPasswordForm";

const page = () => {
  return <ResetPasswordForm />;
};

export default loginAuth(page);
