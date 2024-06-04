"use client";
import React from "react";

type Props = {};

const BreadCrumb = (props: Props) => {
  //WIP: set up use sidebar hook for real time chat and chat bot stuff
  //WIP: setup the description and the switch statement
  return (
    <div className=" flex flex-col">
      <div className="flex gap-5 items-center">
        <h2 className="text-3xl font-bold capitalize">Title</h2>
      </div>
      <p className=" text-gray-500 text-sm">
        Modify domain settings, change chatbot options, enter sales questions
        and train your bot to do what you want it to.
      </p>
    </div>
  );
};

export default BreadCrumb;
