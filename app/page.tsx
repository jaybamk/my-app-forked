'use client';
import Link from "next/link";
import routes from "@/routes";
import styles from "@/app/page.module.scss";
import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/index";
import Header from "@/components/Header/index";
import useCounter from "@/hooks/Counter";

export default function Home() {
  const [count, setCount] = useCounter(0)

  return (
    <main className={styles.main}>
      <Header />
      <div style={{ width: 'auto', height: 'auto' }}>My Next.js App</div>
      <Link href={routes.support.contact}>contact</Link>
      <Button setCount={setCount} count={count} counted={1} size={'small'} />
      <Button setCount={setCount} count={count} counted={2} size={'large'} />

      <div style={{ width: 200, height: 200 }}> djkfdjkdfkfd</div>
      <Footer />
    </main>
  );
}
