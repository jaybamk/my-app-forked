import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import packages from "@/data/packages";
import { Autoplay, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "@/app/page.module.scss";
import Image from "next/image";


export default function SwiperContainer(){
    return(
        <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className={styles.mySwiper}>
            {
              packages.map((item, index) => <SwiperSlide key={index}>
                <div className="card px-2 py-3">
                  <div className="card-body">
                    <Image className="mb-3" src={item.thumbsnail} alt="img" width={50} height={50} />
                    <h5 className="card-title">{item.title}</h5>
                    <div className="card-text d-flex align-items-center gap-3 mb-4">
                      {item.subtle}
                    </div>
                    <div>
                      <Link href={item.link} className="text-decoration-none">
                        <span className="text-secondary" >Learn More </span>
                        <FontAwesomeIcon className="ms-2" icon={faArrowRight} /></Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>)
            }
          </Swiper>
    )
}