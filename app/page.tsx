"use client";
import Image from "next/image";
import routes from "@/routes";
import { useEffect } from "react";
import hero from "@/img/homepage-section11.png";
import arrow from "@/img/section9/arrow.png";
import Section7img1 from "@/img/section7/Section7img1.png";
import Section7img2 from "@/img/section7/Section7img2.png";
import Section7img3 from "@/img/section7/Section7img3.png";
import Section7img4 from "@/img/section7/Section7img4.png";
import Section7img5 from "@/img/section7/Section7img5.png";
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
<section className={`${styles.section7}`}>
<div className={`${styles.innercontainer1}`}>
<div>
  <Image className={`${styles.Section7img1}`} src={Section7img1} alt="sec7tn1" />

  <div className={`${styles.imgNote}`}>
    I can come take care of your pitch
  </div>
</div>
<p className={`${styles.Section7Headertxt}`}>Doubting? Hear from others</p>
<div>
<Image className={`${styles.Section7img2}`} src={Section7img2} alt="sec7tn2" />
  <div className={`${styles.imgNote}`}>
    I can help marketing strategy
  </div>
</div>
</div>
<div className={`${styles.innercontainer2}`}>
  <p className={`${styles.pcontainer2}`}>do you require some help fro your project: Conception workshop, prototyping, 
    marketing strategy, landing page, Ux/UI?
  </p>
  </div>
<div className={`${styles.innercontainer3}`}>
  <button className={`${styles.centeredBtnContainer3}`}>Register Now</button>
</div>
<div className={`${styles.innercontainer4}`}>
<div>
<Image className={`${styles.Section7img3}`} src={Section7img3} alt="sec7tn3" />
</div>
<div className={`${styles.imgNote}`}>
  I can design your website
</div>
<div>
<Image className={`${styles.Section7img4}`} src={Section7img4} alt="sec7tn4" />
</div>
<div className={`${styles.imgNote}`}>I will define the profile of your users</div>
<div>
<Image className={`${styles.Section7img5}`} src={Section7img5} alt="sec7tn5" />
</div>
<div className={`${styles.imgNote}`}>I can prototype your app</div>

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
              <div className={`${styles.section9ButtonInButton}`}> 
                <span className={`${styles.section9ButtonText}`}>Apply Online</span>
              <Image className={`${styles.arrow}`} src={arrow} alt="arrow" />
              </div>
             
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
