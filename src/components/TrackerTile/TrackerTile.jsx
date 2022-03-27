import { ReactComponent as EllipsisIcon } from "../../assets/images/icon-ellipsis.svg";
import { getCategoryImage } from "../../utils/ticketUtils";
import "./TrackerTile.scss";

const TrackerTile = ({ category }) => {
  const backgroundImage = getCategoryImage(category);

  return (
    <div className={`tracker-tile tracker-tile--${category}`}>
      <div className="tracker-tile__background-image-wrapper">
        <img
          className="tracker-tile__background-image"
          src={backgroundImage}
          alt=""
        />
      </div>
      <div className="tracker-tile__content">
        <div className="tracker-tile__content-row">
          <h2 className="tracker-tile__heading">Work</h2>
          <button className="tracker-tile__button">
            <EllipsisIcon className="tracker-tile__button-icon" />
          </button>
        </div>
        <div className="tracker-tile__content-row">
          <p className="tracker-tile__this-week-time">32hrs</p>
          <p className="tracker-tile__last-week-time">Last Week - 36hrs</p>
        </div>
      </div>
    </div>
  );
};

export default TrackerTile;
