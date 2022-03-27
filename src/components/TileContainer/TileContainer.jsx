import ProfileTile from "../ProfileTile/ProfileTile";
import TrackerTile from "../TrackerTile/TrackerTile";
import "./TileContainer.scss";

const TileContainer = ({ profile, trackerItems }) => {
  const { timeframe, image, name, setTimeframe } = profile;

  return (
    <div className="tile-container">
      <ProfileTile
        activeTimeframe={timeframe}
        profileImage={image}
        profileName={name}
        setTimeframe={setTimeframe}
      />
      {trackerItems.map(({ category, timeframes, lastTimeframeName }) => {
        return (
          <TrackerTile
            key={category}
            category={category}
            timeframes={timeframes}
            lastTimeframeName={lastTimeframeName}
          />
        );
      })}
    </div>
  );
};

export default TileContainer;
