"use client";
import {
  onGetConversationMode,
  onToggleRealtime,
} from "@/actions/conversation";
import { useToast } from "@/components/ui/use-toast";
import { useChatContext } from "@/context/user-chat-context";
import { useClerk } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import path from "path";
import React, { useEffect, useState } from "react";

const useSideBar = () => {
  const [expand, setExpand] = useState<boolean | undefined>(undefined);
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const [realtime, setRealtime] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { chatRoom } = useChatContext();

  const onActivateRealtime = async (e: any) => {
    try {
      const realtime = await onToggleRealtime(
        chatRoom!,
        (e.targer.ariaChecked = "true" ? false : true)
      );
      if (realtime) {
        setRealtime(realtime.chatRoom.live);
        toast({
          title: "Success",
          description: realtime.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onGetCurrentMode = async () => {
    setLoading(true);
    const mode = await onGetConversationMode(chatRoom!);
    if (mode) {
      setExpand(mode.live);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (chatRoom) {
      onGetCurrentMode();
    }
  }, [chatRoom]);

  const page = pathname.split("/").pop();
  const { signOut } = useClerk();
  const onSignOut = () => signOut(() => router.push("/"));
  const onExpand = () => setExpand((prev) => !prev);
  return {
    expand,
    onExpand,
    onActivateRealtime,
    realtime,
    loading,
    onSignOut,
    page,
    chatRoom,
  };
};

export default useSideBar;
