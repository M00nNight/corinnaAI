"use client";
import { Separator } from "@/components/ui/separator";
import { useSettings } from "@/hooks/settings/use-settings";
import React from "react";

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
      </div>
    </form>
  );
};

export default SettingsForm;
