import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Section2.css";
import "swiper/css";
import Swiper1 from "./assets/swiper1 1.png";
import Swiper2 from "./assets/swiper2 1.png";
import Swiper3 from "./assets/swiper3 1.png";
import Swiper4 from "./assets/swiper4 1.png";
import Swiper5 from "./assets/swiper5 1.png";
import Swiper6 from "./assets/swiper6 1.png";
import ArrowNext from "./assets/Group 8.png";
import ArrowPrev from "./assets/Group 9.png";

gsap.registerPlugin(ScrollTrigger);

function Section2() {
  useEffect(() => {
    gsap.fromTo(
      ".section2-text",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".section2",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          once: true,
        },
      }
    );
    gsap.fromTo(
      ".section2-swiper",
      { opacity: 0, x: 500 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".section2",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          once: true,
        },
      }
    );
  }, []);
  return (
    <>
      <div className="section2">
        <div className="section2-text">
          <h1>Kenali iPhone lebih dalam.</h1>
        </div>
        <div
          className="section2-swiper"
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={60}
            slidesPerView={5.4}
            navigation = {{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="image-container">
                <img src={Swiper1} alt="" />
                <div className="image-text">
                  <p>Kamera Canggih</p>
                  <h4>
                    Ambil foto dan video <br /> seindah bayangan Anda.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-container">
                <img src={Swiper2} alt="" />
                <div className="image-text">
                  <p>Chip dan Kekuatan Baterai</p>
                  <h4>
                    Kecepatan <br /> yang bertahan lama.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-container">
                <img src={Swiper3} alt="" />
                <div className="image-text1">
                  <p>Inovasi</p>
                  <h4>
                    Didesain indah <br />
                    dan tangguh.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-container">
                <img src={Swiper4} alt="" />
                <div className="image-text">
                  <p>Apple Intelligence</p>
                  <h4>
                    Kemungkinan yang <br /> menakjubkan.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-container">
                <img src={Swiper5} alt="" />
                <div className="image-text1">
                  <p>Lingkungan</p>
                  <h4>
                    Daur Ulang. <br /> Gunakan kembali. Ulangi.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-container">
                <img src={Swiper6} alt="" />
                <div className="image-text">
                  <p>Privasi</p>
                  <h4>
                    Data Anda. <br /> Di tempat yang <br /> Anda inginkan.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-button-container">
            <div className="swiper-button-prev"><img src={ArrowPrev} alt="" /></div>
            <div className="swiper-button-next"><img src={ArrowNext} alt="" /></div>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Section2;
