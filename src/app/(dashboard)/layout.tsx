import { onLoginUser } from "@/actions/auth";
import Sidebar from "@/components/sidebar";
import { ChatProvider } from "@/context/user-chat-context";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const OwnerLayout = async ({ children }: Props) => {
  const authenticated = await onLoginUser();
  if (!authenticated) return null;
  return (
    <ChatProvider>
      <div className="flex h-screen w-full">
        <Sidebar domains={authenticated.domain} />
        <div className=" flex flex-col h-screen w-full py-3 pr-10 pl-20 md:px-10">
          {children}
        </div>
      </div>
    </ChatProvider>
  );
};

export default OwnerLayout;
