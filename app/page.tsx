'use client';
import { useEffect } from "react";
import Link from "next/link";
import routes from "@/routes";
import styles from "@/app/page.module.scss";
import Footer from "@/components/Footer/index";
import Header from "@/components/Header/index";
import useCounter from "@/hooks/Counter";

export default function Home() {
  const [count, setCount] = useCounter(0)

  useEffect(() => {
    // console.log(count)
    alert(count)
    return () => alert("I'm going")
  }, [count])

  return (
    <main className={styles.main}>
      <Header />
      <div style={{ width: 'auto', height: 'auto' }}>My Next.js App</div>
      <Link href={routes.support.contact}>contact</Link>
      <Link href={routes.auth.signin}>Sign In</Link>
      <Link href={routes.auth.signup}>Sign Up</Link>
      <div style={{ width: 200, height: 200 }}></div>
      <Footer />
    </main>
  );
}
