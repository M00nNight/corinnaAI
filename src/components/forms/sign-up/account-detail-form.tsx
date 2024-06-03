import { USER_REGISTRATION_FORM } from "@/constants/forms";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import FormGenerator from "../form-generator";
import { register } from "module";

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
};

const AccountDetailsForm = ({ errors, register }: Props) => {
  return (
    <>
      <h2 className=" text-gravel md:text-4xl from-bold">Account Details</h2>
      <p>Enter your email and password</p>
      {USER_REGISTRATION_FORM.map((field) => (
        <FormGenerator
          {...field}
          key={field.id}
          errors={errors}
          register={register}
          name={field.name}
        />
      ))}
    </>
  );
};

export default AccountDetailsForm;
