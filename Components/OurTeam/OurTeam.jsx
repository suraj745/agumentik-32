import React from "react";
import Heading from "../ContainerHead/Heading";
import OurTeamCard from "./OurTeamCard";
import styles from "./OurTeam.module.scss";
const OurTeam = () => {
  const cardData = [
    {
      image: `/images/our-team5/pic2.png`,
      name: `Avie Beaton
   `,
      post: `   Ceo & Architect`,
    },

    {
      image: `/images/our-team5/pic2.png`,
      name: `Ben Jonson`,
      post: `  Architect`,
    },

    {
      image: `/images/our-team5/pic2.png`,
      name: `Ashley Fletcher   `,
      post: `Finances `,
    },

    {
      image: `/images/our-team5/pic2.png`,
      name: `Gabriela Flores     `,
      post: `Mechanical Engineer`,
    },
  ];
  return (
    <section className="container" id={styles.ourteam_container}>
      <section className="row flex-column">
        <section className="col" id={styles.left}>
          <Heading thin={"Our"} thick={"team"} color={"black"} />
        </section>
        <section className="col" id={styles.right}>
          {cardData.map((value, index) => {
            return (
              <OurTeamCard
                key={index}
                name={value.name}
                image={value.image}
                post={value.post}
              />
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default OurTeam;
