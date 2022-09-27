import React from "react";
import Heading from "../ContainerHead/Heading";
import FaqDropdown from "../Faq/FaqDropdown";

const Faq2 = () => {
  const faqData = [
    {
      head: `How do we work ?`,
      para: `Progressively generate synergistic total linkage through cross-media intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client-centric outsourcing with excellent communities. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
      head: ` What services do we offer ?`,
      para: `Graphic design lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.`,
    },
    {
      head: `Why do we have a design fee and purchasing fee on the product ?`,
      para: `Developement lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.`,
    },
    {
      head: `How long will it take to desing and build my project ?`,
      para: `Web design lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.`,
    },
    {
      head: `What should I have at our first meeting for my project ?`,
      para: `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.web design lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
  ];
  return (
    <section className="container">
      <section className="row  flex-column content_pad justify-content-center">
        <section className="col">
          <Heading thick={"faq"} color={"black"} />
        </section>
        <section className="col">
          <section className="row justify-content-center">
            <section className="col-lg-7">
              {faqData.map((value, index) => {
                return (
                  <FaqDropdown
                    head={value.head}
                    para={value.para}
                    id={value.head}
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

export default Faq2;
