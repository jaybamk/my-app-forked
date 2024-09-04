"use client";
import Image from "next/image";
import routes from "@/routes";
import { useEffect } from "react";
import hero from "@/img/homepage-section11.png";
import arrow from "@/img/section9/arrow.png";
import styles from "@/app/page.module.scss";
import Footer from "@/components/Footer/index";
import Header from "@/components/Header/index";
import "swiper/scss";
import "swiper/scss/pagination";
import SwiperContainer from "@/components/SwiperContainer";
// import SecButton from "@/components/button";

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${styles.main} mt-5`}>
        <section className="w-100 d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-0 my-5">
          <div className="p-7vw col-md-7">
            <h1>
              Earn over <span className="text-secondary">$500</span> Monthly
            </h1>
            <h2>
              <div className="text-secondary">LEARN AND EARN</div>
              <div>BECOME OUR LANGUAGE AMBASSADOR</div>
            </h2>
            <p>
              Our online education platform is a fully functional learning place
              consisting of virtual class,e-library,testing/assessment modus and
              others.It is an interactive medium where students can engage the
              teachers just from the comfort of their homes.
            </p>
          </div>
          <div className={`w-100 ${styles.hero}`}>
            <Image className="w-100" src={hero} alt="hero" />
          </div>
        </section>
        <section className="mb-5 w-100 p-7vw d-md-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center">AMBASSADOR PACKAGES</h2>
          <p className="text-md-center col-md-9 col-lg-7">
            Our approach to teaching is unique and our teachers are extremely
            highly rated. We are affordable, simple, effective and very
            intensive{" "}
          </p>
          <div className="w-100">
            <SwiperContainer />
          </div>
        </section>

        <section className={`${styles.section8}`}>
          <div className={`${styles.heading1}`}>
            <h1 className={`${styles.heading1Header}`}>What do we sell?</h1>
          </div>
          <div className={`${styles.subHeading1}`}>
            <p className={`${styles.subHeading1Paragraph}`}>
              We promote the learning of INTERNATIONAL LANGUAGES AND INDIGENOUS
              LANGUAGES
            </p>
          </div>

          <div className={`${styles.languages}`}>
            <div className={`${styles.intLangBox}`}>
              <h1 className={`${styles.intLang}`}>INTERNATIONAL LANGUAGES:</h1>
              <p className={`${styles.subIntLang1}`}>
                FRENCH, GERMAN, SPANISH, and CHINESE
              </p>
              <p className={`${styles.subIntLang2}`}>
                For business, education, or leisure purposes.
              </p>
            </div>
            <div className={`${styles.indLangBox}`}>
              <h1 className={`${styles.indLang}`}>INDIGENOUS LANGUAGES:</h1>
              <p className={`${styles.subIndLang1}`}>YORUBA, IGBO, and HAUSA</p>
              <p className={`${styles.subIndLang2}`}>
                Learning indigenous languages helps the learner to connect to
                their roots.
              </p>
            </div>
          </div>

          <div className={`${styles.virtualBox}`}>
            <h1 className={`${styles.heading2}`}>OUR VIRTUAL CLASS</h1>
            <p className={`${styles.subHeading2}`}>
              STUDENTS LEARN FROM THE COMFORT OF THEIR HOMES
            </p>
            <p className={`${styles.virtualText1}`}>
              Our online education platform is a fully functional learning
              place. It is simple, unique, and interactive.
            </p>
            <p className={`${styles.virtualText2}`}>
              Our teachers are extremely highly rated.
            </p>
          </div>
          <div>
            {/** <button/> */}
            <button className={`${styles.section8Button}`}>Learn More</button>
          </div>
        </section>
        <section className={`${styles.section9}`}>
          <div className={`${styles.section9Content}`}>
            <p className={`${styles.section9Text}`}>
              Ready to start a journey with us?
            </p>
          </div>
          <div className={`${styles.section9ButtonBox}`}>
            <button className={`${styles.section9Button}`}>
              {" "}
              <span className={`${styles.section9Button}`}>Apply Online</span>
              <Image className={`${styles.arrow}`} src={arrow} alt="arrow" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
