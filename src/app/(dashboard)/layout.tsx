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
      <div>
        <Sidebar domains={authenticated.domain} />
      </div>
    </ChatProvider>
  );
};

export default OwnerLayout;
