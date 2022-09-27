import React from "react";
import styles from "./Gallery.module.scss";
import { useState } from "react";
const Gallery = () => {
  const [data, setData] = useState([
    {
      image: "/commercial.jpg",
      heading: "Bathrooom",
      subHeading: "North House",
      link: "",
      category: "all",
      subcategory: "commerical",
    },

    {
      image: "/commercial.jpg",
      heading: "Chair Furniture",
      subHeading: "Muscate,Sultanate of Oman",
      link: "",
      category: "all",
      subcategory: "hospital",
    },
    {
      image: "/commercial.jpg",
      heading: "Furniture",
      subHeading: "North House",
      link: "",
      category: "all",
      subcategory: "hospital",
    },

    {
      image: "/commercial.jpg",
      heading: "Decobe",
      subHeading: "Aqaba,Jordan",
      link: "",
      category: "all",
      subcategory: "resedential",
    },
    {
      image: "/commercial.jpg",
      heading: "Modern Decoration",
      subHeading: "Muscate,Sultanate of Oman",
      link: "",
      category: "all",
      subcategory: "resedential",
    },

    {
      image: "/commercial.jpg",
      heading: "Building House",
      subHeading: "Ultanate of Oman",
      link: "",
      category: "all",
      subcategory: "office",
    },

    {
      image: "/commercial.jpg",
      heading: "Spa residence",
      subHeading: "Perth,Australia",
      link: "",
      category: "all",
      subcategory: "education",
    },

    {
      image: "/commercial.jpg",
      heading: "Living room",
      subHeading: "Aqaba of Jordan",
      link: "",
      category: "all",
      subcategory: "ai",
    },
    {
      image: "/commercial.jpg",
      heading: "Dream WorkSpace",
      subHeading: "Perth Australia",
      link: "",
      category: "all",
      subcategory: "ai",
    },
    {
      image: "/commercial.jpg",
      heading: "Lamp Decoration",
      subHeading: "Aqaba Jordan",
      link: "",
      category: "all",
      subcategory: "ai",
    },
  ]);

  return (
    <section className={styles.gallery_container}>
      <section className="container">
        <section className="row content_pad justify-content-center">
          <section className={styles.control_grid}>
            <section className={styles.image_grid}>
              <ul className={styles.controls}>
                <li
                  onClick={() =>
                    setData([
                      {
                        image: "/commercial.jpg",
                        heading: "Bathrooom",
                        subHeading: "North House",
                        link: "",
                        category: "all",
                        subcategory: "commerical",
                      },

                      {
                        image: "/commercial.jpg",
                        heading: "Chair Furniture",
                        subHeading: "Muscate,Sultanate of Oman",
                        link: "",
                        category: "all",
                        subcategory: "hospital",
                      },
                      {
                        image: "/commercial.jpg",
                        heading: "Furniture",
                        subHeading: "North House",
                        link: "",
                        category: "all",
                        subcategory: "hospital",
                      },

                      {
                        image: "/commercial.jpg",
                        heading: "Decobe",
                        subHeading: "Aqaba,Jordan",
                        link: "",
                        category: "all",
                        subcategory: "resedential",
                      },
                      {
                        image: "/commercial.jpg",
                        heading: "Modern Decoration",
                        subHeading: "Muscate,Sultanate of Oman",
                        link: "",
                        category: "all",
                        subcategory: "resedential",
                      },

                      {
                        image: "/commercial.jpg",
                        heading: "Building House",
                        subHeading: "Ultanate of Oman",
                        link: "",
                        category: "all",
                        subcategory: "office",
                      },

                      {
                        image: "/commercial.jpg",
                        heading: "Living room",
                        subHeading: "Aqaba of Jordan",
                        link: "",
                        category: "all",
                        subcategory: "ai",
                      },
                      {
                        image: "/commercial.jpg",
                        heading: "Dream WorkSpace",
                        subHeading: "Perth Australia",
                        link: "",
                        category: "all",
                        subcategory: "ai",
                      },
                      {
                        image: "/commercial.jpg",
                        heading: "Lamp Decoration",
                        subHeading: "Aqaba Jordan",
                        link: "",
                        category: "all",
                        subcategory: "ai",
                      },
                    ])
                  }
                >
                  <a>All</a>
                </li>
                <li
                  onClick={() =>
                    setData([
                      {
                        image: "/commercial.jpg",
                        heading: "Bathrooom",
                        subHeading: "North House",
                        link: "",
                        category: "all",
                        subcategory: "commerical",
                      },
                    ])
                  }
                >
                  <a>Commercial</a>
                </li>
                <li
                  onClick={() =>
                    setData([
                      {
                        image: "/commercial.jpg",
                        heading: "Spa residence",
                        subHeading: "Perth,Australia",
                        link: "",
                        category: "all",
                        subcategory: "education",
                      },
                    ])
                  }
                >
                  <a>Education</a>
                </li>
                <li
                  onClick={() =>
                    setData([
                      {
                        image: "/commercial.jpg",
                        heading: "Chair Furniture",
                        subHeading: "Muscate,Sultanate of Oman",
                        link: "",
                        category: "all",
                        subcategory: "hospital",
                      },
                      {
                        image: "/commercial.jpg",
                        heading: "Furniture",
                        subHeading: "North House",
                        link: "",
                        category: "all",
                        subcategory: "hospital",
                      },
                    ])
                  }
                >
                  <a>Hospital</a>
                </li>
                <li
                  onClick={() =>
                    setData([
                      {
                        image: "/commercial.jpg",
                        heading: "Decobe",
                        subHeading: "Aqaba,Jordan",
                        link: "",
                        category: "all",
                        subcategory: "resedential",
                      },
                      {
                        image: "/commercial.jpg",
                        heading: "Modern Decoration",
                        subHeading: "Muscate,Sultanate of Oman",
                        link: "",
                        category: "all",
                        subcategory: "resedential",
                      },
                    ])
                  }
                >
                  <a>Resendential</a>
                </li>
                <li
                  onClick={() =>
                    setData([
                      {
                        image: "/commercial.jpg",
                        heading: "Building House",
                        subHeading: "Ultanate of Oman",
                        link: "",
                        category: "all",
                        subcategory: "office",
                      },
                    ])
                  }
                >
                  <a>Office</a>
                </li>
                <li
                  onClick={() =>
                    setData([
                      {
                        image: "/commercial.jpg",
                        heading: "Living room",
                        subHeading: "Aqaba of Jordan",
                        link: "",
                        category: "all",
                        subcategory: "ai",
                      },
                      {
                        image: "/commercial.jpg",
                        heading: "Dream WorkSpace",
                        subHeading: "Perth Australia",
                        link: "",
                        category: "all",
                        subcategory: "ai",
                      },
                      {
                        image: "/commercial.jpg",
                        heading: "Lamp Decoration",
                        subHeading: "Aqaba Jordan",
                        link: "",
                        category: "all",
                        subcategory: "ai",
                      },
                    ])
                  }
                >
                  <a>Ai</a>
                </li>
              </ul>
              {data.map((value, index) => {
                return (
                  <section
                    className={styles.gallery_card_container}
                    key={index}
                  >
                    <img src={value.image} alt="" />
                    <section className={styles.card_content}>
                      <h1>{value.heading}</h1>
                      <p>{value.subHeading}</p>
                    </section>
                  </section>
                );
              })}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Gallery;
