import TrackerTile from "../TrackerTile/TrackerTile";

const TileContainer = ({ tiles }) => {
  return (
    <div className="tile-container">
      {tiles.map(({ category, timeframes, lastTimeframeName }) => {
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
