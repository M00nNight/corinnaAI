"use client";
import { Separator } from "@/components/ui/separator";
import { useSettings } from "@/hooks/settings/use-settings";
import React from "react";
import DomainUpdate from "./domain-update";
import CodeSnippet from "./code-snippet";
import PremiumBadge from "@/icons/premium-badge";
import EditChatbotIcon from "./edit-chatbot-icon";

type Props = {
  id: string;
  name: string;
  plan: "STANDARD" | "PRO" | "ULTIMATE";
  chatBot: {
    id: string;
    icon: string | null;
    welcomeMessage: string | null;
  } | null;
};

const SettingsForm = ({ id, name, chatBot, plan }: Props) => {
  const {
    register,
    onUpdateSettings,
    errors,
    onDeleteDomain,
    deleting,
    loading,
  } = useSettings(id);
  return (
    <form className=" flex fc gap-8 pb-10" onSubmit={onUpdateSettings}>
      <div className=" flex flex-col gap-3">
        <h2 className=" font-bold text-2xl">Doamin Settings</h2>
        <Separator orientation="horizontal" />
        <DomainUpdate name={name} register={register} errors={errors} />
        <CodeSnippet id={id} />
      </div>
      <div className=" flex flex-col gap-3 mt-5">
        <div className=" flex gap-4 items-center">
          <h2 className=" font-bold text-2xl"> Chatbot Settings</h2>
          <div className=" flex gap-1 bg-cream rounded-full px-3 py-1 text-xs items-center font-bold">
            <PremiumBadge />
            Premium
          </div>
        </div>
        <Separator orientation="horizontal" />
        <EditChatbotIcon
          chatBot={chatBot}
          register={register}
          errors={errors}
        />
        {/* <WelcomeMessage
          message={chatBot?.welcomeMessage!}
          register={register}
          errors={errors}
        /> */}
      </div>
    </form>
  );
};

export default SettingsForm;
