"use client";
import loginAuth from "../auth/LoginAuth";
import LoginForm from "../components/Forms/LoginForm";

const page = () => {
  return <LoginForm />;
};

export default loginAuth(page);
