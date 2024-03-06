import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";

const Expertise = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Why work with us?" />
            <p>
              Choosing the right partner for your website and app development
              needs is crucial for the success of your business. At [Company
              Name], we understand the importance of delivering exceptional
              results that not only meet but exceed our clients' expectations.
            </p>
          </div>
          <div className="hero-content grid-4">
            {expertise.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
