import { Fragment } from "react";
import HomeHero from "./hero";
import HomeAbout from "./about";
import HomeContact from "./contact";
import SpeechClient from "./speechClient";

const Home = () => {
  return (
    <Fragment>
      <HomeHero />
      <HomeAbout />
      <HomeContact />
      <SpeechClient />
    </Fragment>
  );
};

export default Home;
