import Layout from "../../components/Layout/Layout";
import TrackerTile from "../../components/TrackerTile/TrackerTile";

const Home = () => {
  return (
    <Layout>
      <TrackerTile category="work" />
      {/* <TrackerTile category="play" />
      <TrackerTile category="study" />
      <TrackerTile category="exercise" />
      <TrackerTile category="social" />
      <TrackerTile category="self-care" /> */}
    </Layout>
  );
};

export default Home;
