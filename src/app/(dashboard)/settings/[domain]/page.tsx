import { onGetCurrentDomain, onGetCurrentDomainInfo } from "@/actions/settings";
import SettingsForm from "@/components/forms/settings/form";
import InfoBar from "@/components/infobar";
import { redirect } from "next/navigation";
import React from "react";

type Props = { params: { domain: string } };

const DomainSettingsPage = async ({ params }: Props) => {
  const domain = await onGetCurrentDomainInfo(params.domain);
  if (!domain) redirect("/dashboard");
  return (
    <>
      <InfoBar />
      <div className=" overflow-y-auto w-full  chat-window flex-1 h-0">
        <SettingsForm domain={domain} />
      </div>
    </>
  );
};
