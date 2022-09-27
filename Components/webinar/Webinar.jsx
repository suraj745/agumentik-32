import React from "react";
import BlogCard from "../Blog/BlogCard";
import LatestBlogCard from "../LatestBlog/LatestBlogCard";
import styles from "./Webinar.module.scss";
const Webinar = () => {
  const blogdetail = [
    {
      image: "/images/blog/latest-blog/pic1.jpg",
      date: "25",
      month: "March",
      year: "2021",
      heading:
        "When it comes to your house, don’t mess with the rest, trust the best",
      paragraph:
        "Same as saying through shrinking from toil and pain these cases perfectly simple.",
    },
    {
      image: "/images/blog/latest-blog/pic1.jpg",
      date: "18",
      month: "May",
      year: "2021",
      heading:
        "Don’t get framed by the competition, trust our solid reputation.",
      paragraph:
        "Same as saying through shrinking from toil and pain these cases perfectly simple.",
    },
    {
      image: "/images/blog/latest-blog/pic1.jpg",
      date: "14",
      month: "Feb",
      year: "2021",
      heading: "We’re the construction kings, building up great things",
      paragraph:
        "Same as saying through shrinking from toil and pain these cases perfectly simple.",
    },

    {
      image: "/images/blog/latest-blog/pic1.jpg",
      date: "25",
      month: "Mar",
      year: "2021",
      heading: "We’ll nail your next project, because nobody wants!",
      paragraph:
        "Same as saying through shrinking from toil and pain these cases perfectly simple.",
    },

    {
      image: "/images/blog/latest-blog/pic1.jpg",
      date: "16",
      month: "Jan",
      year: "2021",
      heading: "Helping you and your house become better acquainted.",
      paragraph:
        "Same as saying through shrinking from toil and pain these cases perfectly simple.",
    },

    {
      image: "/images/blog/latest-blog/pic1.jpg",
      date: "14",
      month: "Feb",
      year: "2021",
      heading:
        "Creating quality urban lifestyles, building stronger communities.",
      paragraph:
        "Same as saying through shrinking from toil and pain these cases perfectly simple.",
    },

    {
      image: "/images/blog/latest-blog/pic1.jpg",
      date: "18",
      month: "May",
      year: "2021",
      heading: "For your roofing and siding, quality we’ll be providing!",
      paragraph:
        "Same as saying through shrinking from toil and pain these cases perfectly simple.",
    },

    {
      image: "/images/blog/latest-blog/pic1.jpg",
      date: "22",
      month: "Feb",
      year: "2021",
      heading:
        "When it comes to your house, don’t mess with the rest, trust the best.",
      paragraph:
        "Same as saying through shrinking from toil and pain these cases perfectly simple.",
    },
    {
      image: "/images/blog/latest-blog/pic1.jpg",
      date: "30",
      month: "Aug",
      year: "2021",
      heading:
        "Creating quality urban lifestyles, building stronger communities.",
      paragraph:
        "Same as saying through shrinking from toil and pain these cases perfectly simple.",
    },
  ];
  return (
    <section className="container" id={styles.webinar_container}>
      <section className="row content_pad">
        <section className="col" id={styles.webinar_card}>
          {blogdetail.map((value, index) => {
            return (
              <LatestBlogCard
                image={value.image}
                date={value.date}
                heading={value.heading}
                month={value.month}
                year={value.year}
                paragraph={value.paragraph}
              />
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Webinar;
