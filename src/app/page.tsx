import { Fragment } from "react";
import HomeHero from "./hero";
import HomeAbout from "./about";
import HomeContact from "./contact";

const Home = () => {
  return (
    <Fragment>
      <HomeHero />
      <HomeAbout />
      <HomeContact />
    </Fragment>
  );
};

export default Home;
