import { useState } from "react";
import Layout from "../../components/Layout/Layout";
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
      <button
        style={{ backgroundColor: "dodgerblue" }}
        onClick={() => setTimeframe("daily")}
      >
        Daily
      </button>
      <button
        style={{ backgroundColor: "dodgerblue" }}
        onClick={() => setTimeframe("weekly")}
      >
        Weekly
      </button>
      <button
        style={{ backgroundColor: "dodgerblue" }}
        onClick={() => setTimeframe("monthly")}
      >
        Monthly
      </button>
      <TileContainer tiles={tiles} />
    </Layout>
  );
};

export default Home;
