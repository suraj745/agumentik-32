import React from "react";
import Heading from "../ContainerHead/Heading";
import styles from "./Faq.module.scss";
import FaqDropdown from "./FaqDropdown";
import CourceCard from "../Cources/CourceCard";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
const Faq = () => {
  const faqData = [
    {
      head: "Choose between rates or instant payment",
      para: "Motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci consectetur vel posuere posuere, rutrum eu ipsum. Cost is important.",
    },

    {
      head: "Choose two see a live preview",
      para: "Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success.",
    },
    {
      head: "Choose the correct service",
      para: `The leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.
      `,
    },
  ];

  const cardData = [
    {
      image: <BsFillEmojiSunglassesFill />,
      heading: "Assistance",
      para: "Lorem Ipsum is simply dummy text of the printing and setting as Planning.",
    },
    {
      image: <GiPayMoney />,
      heading: "Financing",
      para: "Lorem Ipsum is simply dummy text of the printing and setting as Planning.",
    },
  ];
  return (
    <section className="container" id={styles.faq_container}>
      <section className="row content_pad">
        <section className="col" id={styles.left_content}>
          <section className="row flex-column">
            <section className="col">
              <Heading thick={"faq"} thin={"some"} color={"black"} />
            </section>

            <section className="col pt-5" id={styles.faq_cards}>
              {faqData.map((value, index) => {
                return (
                  <FaqDropdown
                    head={value.head}
                    para={value.para}
                    id={value.head}
                    key={index}
                  />
                );
              })}
            </section>
          </section>
        </section>
        <section className="col" id={styles.right_content}>
          <section className="row  flex-column">
            <section className="col">
              <Heading thick={"solution"} thin={"our"} color={"black"} />
            </section>
            <section className="col pt-5" id={styles.cards}>
              {cardData.map((value, index) => {
                return (
                  <CourceCard
                    key={index}
                    image={value.image}
                    heading={value.heading}
                    para={value.para}
                  />
                );
              })}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Faq;
