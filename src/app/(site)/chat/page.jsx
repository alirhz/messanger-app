"use client";
import SendMessage from "../../layouts/SendMessage";
import Messages from "../../layouts/Messages";
import isAuth from "../../../Authentication/isAuth";

const Home = () => {

  return (
    <>
      <main>
          <SendMessage />
          <Messages />
      </main>
    </>
  );
}

export default isAuth(Home);