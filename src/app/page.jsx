import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 className={styles.fs_65}>SOLID Principles</h1>
      </div>
    </main>
  );
}
