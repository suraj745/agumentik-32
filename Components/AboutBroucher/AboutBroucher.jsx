import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../Broucher/Broucher.module.scss";
import { Pagination } from "swiper";
const AboutBroucher = () => {
  const image = [
    "/images/gallery/portrait/pic1.jpg",
    "/images/gallery/portrait/pic1.jpg",
    "/images/gallery/portrait/pic1.jpg",
    "/images/gallery/portrait/pic1.jpg",
    "/images/gallery/portrait/pic1.jpg",
  ];
  return (
    <section className="container-fluid" id={styles.broucher_container}>
      <section className="container">
        <section className="row content_pad gx-5">
          <section className="col-lg-5">
            <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true,
              }}
              className={"broucher_slider"}
              id={styles.broucher_slider}
              loop={true}
            >
              {image.map((value, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    id={styles.broucher_slide}
                    className={"broucher_slide"}
                  >
                    <section className={styles.image_container}>
                      <img src={value} />
                    </section>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
          <section className="col-lg-7 d-flex align-items-center justify-content-center">
            <ul className={styles.right_content}>
              <li className={styles.experience}>
                <span className={styles.number}>About</span>
                <h2>Group</h2>
              </li>
              <li className={styles.heading}>
                <h1>
                  Improving quality of life with an integrated unified approach.
                </h1>
              </li>
              <li className={styles.paragraph}>
                <p>
                  Dummy text is also used to demonstrate the appearance of
                  different typefaces and layouts, and in general the content of
                  dummy text is nonsensical. Due to its widespread use texts. Ut
                  wisi enim ad minim veniam, quis nostrud exerci tation.
                </p>
              </li>
              {/* <li className={styles.sign}>
                <img src="/images/Signature+Black.png" alt="" />
                <section>
                  <h4>David Houkr</h4>
                  <p>Architect & Founder</p>
                </section>
                <section className={styles.default}>
                  <button>Download Broucher</button>
                </section>
              </li> */}
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default AboutBroucher;
