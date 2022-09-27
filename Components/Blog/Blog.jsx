import React from "react";
import Heading from "../ContainerHead/Heading";
import styles from "./Blog.module.scss";
import BlogCard from "./BlogCard";
const Blog = () => {
  const blogdetail = [
    {
      image: "/images/blog/latest-blog/pic1.jpg",
      date: "14",
      month: "April",
      year: "2021",
      heading: "Commercial design for project",
      paragraph:
        "Which is the same as saying through shrinking from toil and pain.",
    },
    {
      image: "/images/blog/latest-blog/pic1.jpg",
      date: "16",
      month: "Feb",
      year: "2021",
      heading: "Our interior design prediction",
      paragraph:
        "Today we can tell you, thanks to your passion, hard work creativity, and expertise.",
    },
    {
      image: "/images/blog/latest-blog/pic1.jpg",
      date: "18",
      month: "Jan",
      year: "2021",
      heading: "Low cost interior designing ideas",
      paragraph:
        "Every pleasure is to be welcomed every pain avoided. in certain circumstances obligations.",
    },
  ];
  return (
    <section className={styles.blog_container}>
      <section className="container">
        <section className="row flex-column content_pad ">
          <section className="col">
            <Heading thick={"Latest"} thin={"BLog"} />
          </section>
          <section className="col">
            <section className="row justify-content-center px-5">
              <section className={styles.card_grid}>
                {blogdetail.map(
                  ({ image, date, month, year, heading, paragraph }, index) => {
                    return (
                      <BlogCard
                        key={index}
                        image={image}
                        heading={heading}
                        date={date}
                        month={month}
                        year={year}
                        paragraph={paragraph}
                      />
                    );
                  }
                )}
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Blog;
