"use client";
import Image from "next/image";
import routes from "@/routes";
import { useEffect } from "react";
import hero from "@/img/homepage-section11.png";
import styles from "@/app/page.module.scss";
import Footer from "@/components/Footer/index";
import Header from "@/components/Header/index";
import "swiper/scss";
import "swiper/scss/pagination";
import SwiperContainer from "@/components/SwiperContainer";
import MyButton from "@/components/button";

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

        <section className="section8">
          <div className="">
            <h1>What do we sell?</h1>
            <p>
              We promote the learning of INTERNATIONAL LANGUAGES AND INDIGENOUS
              LANGUAGES
            </p>
            <div className="">
    <div>
      <h1 className="header">INTERNATIONAL LANGUAGES</h1>
      <p className="languages">FRENCH, GERMAN, SPANISH, and CHINESE</p>
      <p className="purpose">For business, education, or leisure purposes.</p>
    </div>
    <div>
      <h1 className="">INDIGENOUS LANGUAGES</h1>
      <p className="languages">YORUBA, IGBO, and HAUSA</p>
      <p className="purpose">Learning indigenous languages helps the learner to connect to their roots.</p>
    </div>
  </div>
            <h1 className="">OUR VIRTUAL CLASS</h1>
            <p className="paragraph">
              STUDENTS LEARN FROM THE COMFORT OF THEIR HOMES
            </p>
            <p className="paragraph">
              Our online education platform is a{" "}
              <span className="highlight">fully functional learning place</span>. It
              is simple, unique, and interactive.
            </p>
            <p className="paragraph">
              Our teachers are extremely{" "}
              <span className="highlight">highly rated</span>.
            </p>
          </div>
          <div>
            <button/>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
