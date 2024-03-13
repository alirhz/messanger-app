import Messages from "@/components/Messages";
import "./globals.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Messages />
      </div>
    </main>
  );
}
