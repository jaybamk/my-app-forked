import styles from "@/app/page.module.scss";
import Header from "@/components/Header/index";
import Welcome from "./welcome";
import { useEffect, useRef } from "react";
import { FadeInAnimation } from "./animation";

export default function AboutUs() {
  const ref = useRef(null);

  useEffect(() => {
    const animation = new FadeInAnimation(ref.current); //Instance of FadeInAnimation
    animation.start(1000);
    return () => {
      animation.stop();
    };
  }, []);

  return (
    <main className={styles.main}>
      <div>My Next.js contact page</div>
      <Header />
      <Welcome />
      <h1
        ref={ref}
        style={{
          opacity: 0,
          color: 'white',
          padding: 50,
          textAlign: 'center',
          fontSize: 50,
          backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
        }}
      >
        Welcome
      </h1>
    </main>
  );
}
