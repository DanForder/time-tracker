import classnames from "classnames";
import { ReactComponent as EllipsisIcon } from "../../assets/images/icon-ellipsis.svg";
import useCategoryImage from "../../hooks/useCategoryImage";
import { formatCategoryString } from "../../utils/ticketUtils";
import "./TrackerTile.scss";

const TrackerTile = ({ category, timeframes, lastTimeframeName }) => {
  const [backgroundImage] = useCategoryImage(category);
  const rootClassNames = classnames(
    "tracker-tile",
    `tracker-tile--${formatCategoryString(category)}`
  );

  return (
    <div className={rootClassNames}>
      <div className="tracker-tile__background-image-wrapper">
        <img
          className="tracker-tile__background-image"
          src={backgroundImage}
          alt=""
        />
      </div>
      <div className="tracker-tile__content">
        <div className="tracker-tile__content-row">
          <h2 className="tracker-tile__heading">{category}</h2>
          <button className="tracker-tile__button">
            <EllipsisIcon className="tracker-tile__button-icon" />
          </button>
        </div>
        <div className="tracker-tile__content-row">
          <p className="tracker-tile__this-week-time">
            {timeframes.current}hrs
          </p>
          <p className="tracker-tile__last-week-time">
            {lastTimeframeName} - {timeframes.previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackerTile;
