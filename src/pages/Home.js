import React from "react";
import Header from "../components/header/header";
import Slider from "../components/swiper/swiper";
import Section from "../components/section/section";

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Section title={"ՈՒՍԱՆՈՂՆԵՐԻ ՀԱՄԱՐ"} subTitle={"Այս պահին հասանելի վեբինար չկա"} />
      <Section title={"ԴԱՍԸՆԹԱՑՆԵՐ"} />
    </>
  );
}

export default Home;
