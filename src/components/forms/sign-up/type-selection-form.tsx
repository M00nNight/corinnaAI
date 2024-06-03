import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
};

const TypeSelectionForm = ({ register, setUserType, userType }: Props) => {
  return (
    <>
      <h2>Typeselection</h2>
    </>
  );
};

export default TypeSelectionForm;
