import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/client";
import Button from "@material-tailwind/react/Button";

function Login() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2">
      <Image
        src="https://1000logos.net/wp-content/uploads/2020/05/Google-Docs-logo-400x400.jpg"
        height="300"
        width="550"
        objectFit="contain"
      />
      <Button
        className="w-44 mt-10"
        color="blue"
        buttonType="filled"
        ripple="light"
        onClick={signIn}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
