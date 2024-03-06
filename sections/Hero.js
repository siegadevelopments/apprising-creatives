import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Start your DIGITAL journey now</h1>

          <div className="sub-heading">
            <TitleSm title="WEBSITES" /> <span>.</span>
            <TitleSm title="MOBILE APP" /> <span>.</span>
            <TitleSm title="SYSTEM DASHBOARDS" />
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="Making your visions into reality" />
            <p>
              We believe in your vision and dreams, nevertheless, we want you to
              achieve them and together let's make it happen. With our
              innovative and strategic approach in solving your problem, your
              dream is one simple call away.
            </p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className="text-center">
        <Title title="Latest news & articles" />
      </div>
      <BlogCard />
    </>
  );
};

export default Hero;
