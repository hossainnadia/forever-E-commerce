import React from "react";
import Hiro from "../components/Hiro";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/bestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hiro />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetter />
    </div>
  );
};

export default Home;
