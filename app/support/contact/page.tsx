import Image from "next/image";
import styles from "@/app/page.module.scss";
import Header from "@/components/Header/index";

export default function ContactUs() {
  return (
    <main className={styles.main}>
      <div>My Next.js contact page</div>
      <Header/>
    </main>
  );
}
