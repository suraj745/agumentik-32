import React from "react";
import { FaSearch, FaPaperPlane } from "react-icons/fa";
import OurTeam from "../OurTeam/OurTeam";
import styles from "./BlogPage2.module.scss";
import { MdMail } from "react-icons/md";
const BlogPage2 = () => {
  const tags = [
    {
      name: "First tag",
      link: "#",
    },
    {
      name: "second tag",
      link: "#",
    },
    {
      name: "third tag",
      link: "#",
    },
    {
      name: "fourth tag",
      link: "#",
    },
    {
      name: "fifth tag",
      link: "#",
    },
  ];

  const cardData = [
    {
      img: `/images/blog/recent-blog/pic1.jpg`,
      date: `12 Jan`,
      comment: "20",
      para: `Don’t get framed by the competition, trust our solid reputation.`,
    },
    {
      img: `/images/blog/recent-blog/pic1.jpg`,
      date: `10 Jan`,
      comment: "05",
      para: `building your dream house shouldn’t be a nightmare!`,
    },
    {
      img: `/images/blog/recent-blog/pic1.jpg`,
      date: `12 Jan`,
      comment: "09",
      para: `Helping you and your house become better acquainted.
      `,
    },
  ];
  return (
    <section className="container" id={styles.blogpage2_container}>
      <section className="row gx-lg-5 content_pad">
        <section className="col-md-8" id={styles.left}>
          <ul className={styles.content1}>
            <li className={styles.image}>
              <img src="/images/blog/default/thum1.jpg" alt="" />
            </li>
            <li className={styles.status}>
              <h5>
                <span>20</span>
                <span>April</span>
                <span>2021</span>
              </h5>
              <h5>
                <span>By </span>
                <span>Admin</span>
                <span>Traditional</span>
              </h5>
            </li>
            <li className={styles.heading}>
              <h1>
                From complete turn key to project manager. Leave the building to
                the professionals.
              </h1>
            </li>
            <li className={styles.para}>
              <p>
                Duis vestibulum quis quam vel accumsan. Nunc a vulputate lectus.
                Vestibulum eleifend nisl sed massa sagittis vestibulum.
                Vestibulum pretium blandit tellus, sodales volutpat sapien
                varius vel. Phasellus tristique cursus erat, a placerat tellus
                laoreet eget. Fusce vitae dui sit amet lacus rutrum convallis.
                Vivamus sit amet lectus venenatis est rhoncus interdum a vitae
                velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae ipsa quae ab illo inventore
                dicta sunt explicabo.
              </p>
            </li>
          </ul>

          <ul className={styles.content2}>
            <li className={styles.heading}>
              <h1>
                "When it comes to your house, don’t mess with the rest, trust
                the best."
              </h1>
            </li>
            <li className={styles.para}>
              <p>
                Proin tincidunt tellus ac porta volutpat. Cras mattis congue
                lacus id bibendum. Mauris ut sodales libero. Maecenas feugiat
                sit amet enim in accumsan. Here, then, is what I wanted to tell
                you of my architecture. I created it with courage and idealism,
                but also with an awareness of the fact that what is important is
                life, friends, and attempting to make this unjust world a better
                place in which to live.
              </p>
            </li>

            <li className={styles.card_container}>
              <ul className={styles.card}>
                <li className={styles.heading}>
                  <h1>
                    We let our quality work and commitment to customer
                    satisfaction be our slogan. quality you deserve and
                    dependability you can count on.
                  </h1>
                </li>
                <li className={styles.name}>
                  <h2>Jessica Mcdade</h2>
                </li>

                <li className={styles.post}>
                  <h5>CONTRACTOR</h5>
                </li>
              </ul>
            </li>

            <li>
              <p>
                Duis vestibulum quis quam vel accumsan. Nunc a vulputate lectus.
                Vestibulum eleifend nisl sed massa sagittis vestibulum.
                Vestibulum pretium blandit tellus, sodales volutpat sapien
                varius vel. Phasellus tristique cursus erat, a placerat tellus
                laoreet eget. Fusce vitae dui sit amet lacus rutrum convallis.
                Vivamus sit amet lectus venenatis est rhoncus interdum a vitae
                velit.
              </p>
            </li>
          </ul>

          <ul className={styles.content3}>
            <li className={styles.images}>
              <img src="/images/blog/large-blog.jpg" alt="" />
              <img src="/images/blog/large-blog.jpg" alt="" />
              <img src="/images/blog/large-blog.jpg" alt="" />
            </li>
            <li>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. remaining
                essentially unchanged. It was popularised in the with the .
                Proin tincidunt tellus ac porta volutpat. Cras mattis congue
                lacus id bibendum. Mauris ut sodales libero. Maecenas feugiat
                sit amet enim in accumsan. Here, then, is what I wanted to tell
                you of my architecture. I created it with courage and idealism,
                but also with an awareness of the fact that what is important is
                life, friends, and attempting to make this unjust world a better
                place in which to live.
              </p>
            </li>
          </ul>

          <hr />

          <ul>
            <li>
              <h1>Tags</h1>
            </li>
            <li>
              <ul className={styles.tags}>
                {tags.map((value, index) => {
                  return <li key={index}>{value.name}</li>;
                })}
              </ul>
            </li>
          </ul>
        </section>
        <section className="col-md-4" id={styles.right}>
          <ul className={styles.search_container}>
            <li>
              <h1>Search</h1>
            </li>
            <li>
              <input type="text" placeholder="Search" />
              <button>
                <FaSearch />
              </button>
            </li>
          </ul>

          <ul>
            <li className={styles.heading}>
              <h1>About Author</h1>
            </li>
            <li>
              <img src="/images/blog/blog-grid/pic1.jpg" alt="" />
            </li>
            <li>
              <p>
                Creating a sustainable future through building preservation,
                green architecture, and smart design. creating quality urban
                lifestyles, building stronger communities.
              </p>
            </li>
          </ul>

          <ul>
            <li>
              <h1>Recent Post</h1>
            </li>
            <li>
              {cardData.map((value, index) => {
                return (
                  <ul className={styles.post_card_container} key={index}>
                    <li>
                      <img src={value.img} alt="" />
                    </li>
                    <li>
                      <ul>
                        <li className={styles.status}>
                          <section className={styles.date}>
                            <span>{value.date}</span>
                          </section>
                          <section className={styles.comment}>
                            <span>{value.comment}</span>
                            <span>Comment</span>
                          </section>
                        </li>
                        <li>
                          <p>{value.para}</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                );
              })}
            </li>
          </ul>

          <ul className={styles.mail_container}>
            <li>
              <h1>News Letter</h1>
            </li>
            <li className={styles.mail_card}>
              <ul>
                <li className={styles.mail_logo}>
                  <MdMail />
                </li>
                <li className={styles.para}>
                  <p>
                    Subscribe to our mailing list to get the update to your
                    email.
                  </p>
                </li>
                <li className={styles.input}>
                  <input type="email" placeholder="Enter Email" id="" />
                  <button>
                    <FaPaperPlane />
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default BlogPage2;
