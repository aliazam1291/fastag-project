"use client";
import { useState } from "react";
import AuthForm from "@/components/AuthForm";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />
  );
}
