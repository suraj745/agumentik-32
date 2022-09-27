import React from "react";
import styles from "./BlogPage.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import LatestBlogCard from "../LatestBlog/LatestBlogCard";

import { useState } from "react";
const BlogPage = () => {
  const cardData = [
    {
      heading: `We’ll nail your next project, because nobody wants!`,
      paragraph: `Same as saying through shrinking from toil and pain these cases perfectly simple.`,
      user: ` John`,
      date: `17`,
      month: `feb`,
    },

    {
      heading: `Helping you and your house become better acquainted.`,
      paragraph: `Same as saying through shrinking from toil and pain these cases perfectly simple.`,
      user: ` Jack`,
      date: `16`,
      month: `jan`,
    },

    {
      heading: `Creating quality urban lifestyles, building stronger communities.`,
      paragraph: `Same as saying through shrinking from toil and pain these cases perfectly simple.`,
      user: ` Robin`,
      date: `14`,
      month: `feb`,
    },

    {
      heading: `When it comes to your house, don’t mess with the rest, trust the best`,
      paragraph: `Same as saying through shrinking from toil and pain these cases perfectly simple.`,
      user: ` Andrew`,
      date: `25`,
      month: `mar`,
    },

    {
      heading: `Don’t get framed by the competition, trust our solid reputation.`,
      paragraph: `Same as saying through shrinking from toil and pain these cases perfectly simple.`,
      user: `Anna`,
      date: `18`,
      month: `may`,
    },
  ];
  return (
    <section className="container" id={styles.blog_page_container}>
      <section className="row flex-column">
        <section className="col" id={styles.top}>
          <input
            type="text"
            placeholder="Filter"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <AiOutlineSearch />
          </button>
        </section>
        <section className="col content_pad" id={styles.bottom}>
          {cardData.map((value, index) => {
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
  );
};

export default BlogPage;
