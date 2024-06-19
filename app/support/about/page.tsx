import Image from "next/image";
import styles from "@/app/page.module.scss";
import Header from "@/components/Header/index";
import Welcome from "./welcome";

export default function AboutUs() {
  return (
    <main className={styles.main}>
      <div>My Next.js contact page</div>
      <Header />
      <Welcome />
    </main>
  );
}
