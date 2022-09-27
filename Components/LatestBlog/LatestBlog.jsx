import React from "react";
import Heading from "../ContainerHead/Heading";
import styles from "./LatestBlog.module.scss";
import LatestBlogCard from "./LatestBlogCard";
const LatestBlog = () => {
  const blogCardData = [
    {
      heading: `We’ll nail your next project, because nobody wants!`,
      paragraph: `Same as saying through shrinking from toil and pain these cases perfectly simple.`,
      user: `By John`,
      date: `17`,
      month: `feb`,
    },

    {
      heading: `Helping you and your house become better acquainted.`,
      paragraph: `Same as saying through shrinking from toil and pain these cases perfectly simple.`,
      user: `By John`,
      date: `16`,
      month: `jan`,
    },

    {
      heading: `Creating quality urban lifestyles, building stronger communities.`,
      paragraph: `Same as saying through shrinking from toil and pain these cases perfectly simple.`,
      user: `By John`,
      date: `14`,
      month: `feb`,
    },
  ];
  return (
    <section className="container-fluid" id={styles.latestblog_container}>
      <section className="container">
        <section className="row content_pad flex-column">
          <section className="col">
            <Heading thick={"blog"} thin={"lastest"} color={"black"} />
          </section>
          <section className="col" id={styles.right}>
            {blogCardData.map((value, index) => {
              return (
                <LatestBlogCard
                  key={index}
                  heading={value.heading}
                  paragraph={value.paragraph}
                  user={value.user}
                  date={value.date}
                  month={value.month}
                />
              );
            })}
          </section>
        </section>
      </section>
    </section>
  );
};

export default LatestBlog;
