import { useState } from "react";
import profileImage from "../../assets/images/image-jeremy.png";
import Layout from "../../components/Layout/Layout";
import TileContainer from "../../components/TileContainer/TileContainer";
import data from "../../data/mockData.json";
import { getLastTimeframeName } from "../../utils/ticketUtils";

const Home = () => {
  const [timeframe, setTimeframe] = useState("weekly");
  const exampleProfile = {
    timeframe,
    image: profileImage,
    name: "Jeremy Robson",
    setTimeframe,
  };

  const tiles = data.map(({ title, timeframes }) => {
    return {
      category: title,
      timeframes: timeframes[timeframe],
      lastTimeframeName: getLastTimeframeName(timeframe),
    };
  });

  return (
    <Layout>
      <TileContainer profile={exampleProfile} trackerItems={tiles} />
    </Layout>
  );
};

export default Home;
