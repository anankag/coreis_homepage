import React from "react";
import Header from "../components/header/header";
import Slider from "../components/swiper/swiper";
import Section from "../components/section/section";
import Partners from "../components/partners slider/partners";
import Footer from "../components/footer/footer";

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Section
        title={"ՈՒՍԱՆՈՂՆԵՐԻ ՀԱՄԱՐ"}
        subTitle={"Այս պահին հասանելի վեբինար չկա"}
      />
      <div style={{marginTop:"200px"}} className="divider"> </div>
      <Section title={"ԴԱՍԸՆԹԱՑՆԵՐ"} />
      <Partners/>
      <Footer />
    </>
  );
}

export default Home;
