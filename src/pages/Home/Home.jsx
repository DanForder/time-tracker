import { useState } from "react";
import profileImage from "../../assets/images/image-jeremy.png";
import Layout from "../../components/Layout/Layout";
import ProfileTile from "../../components/ProfileTile/ProfileTile";
import TileContainer from "../../components/TileContainer/TileContainer";
import data from "../../data/mockData.json";
import { getLastTimeframeName } from "../../utils/ticketUtils";

const Home = () => {
  const [timeframe, setTimeframe] = useState("weekly");

  const tiles = data.map(({ title, timeframes }) => {
    return {
      category: title,
      timeframes: timeframes[timeframe],
      lastTimeframeName: getLastTimeframeName(timeframe),
    };
  });

  return (
    <Layout>
      <ProfileTile
        activeTimeframe={timeframe}
        profileImage={profileImage}
        profileName="Jeremy Robson"
        setTimeframe={setTimeframe}
      />
      <TileContainer tiles={tiles} />
    </Layout>
  );
};

export default Home;
