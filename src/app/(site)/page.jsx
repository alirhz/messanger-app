"use client";
import SendMessage from "../layouts/SendMessage";
import Messages from "../layouts/Messages";
import { useSelector } from "react-redux"

export default function Home() {

  return (
    <>
      <main>
          <SendMessage />
          <Messages />
      </main>
    </>
  );
}
