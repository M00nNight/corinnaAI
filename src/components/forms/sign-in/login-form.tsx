"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import FormGenerator from "../form-generator";
import { USER_LOGIN_FORM } from "@/constants/forms";

type Props = {};

const LoginForm = ({}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Login</h2>
      <p>You will recieve a one time password</p>
      {USER_LOGIN_FORM.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          register={register}
          errors={errors}
          name={field.name}
        />
      ))}
    </>
  );
};

export default LoginForm;
