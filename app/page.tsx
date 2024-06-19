import styles from "@/app/page.module.scss";
import Footer from "@/components/Footer/index";
import Header from "@/components/Header/index";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div>My Next.js App</div>
      
      <a href="/contact">contact</a>
      <div style={{ width: 200, height: 200 }}> djkfdjkdfkfd</div>
      <Footer />
    </main>
  );
}
