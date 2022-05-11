import classNames from "classnames";
import "./ProfileTile.scss";

const ProfileTile = ({
  activeTimeframe,
  profileImage,
  profileName,
  setTimeframe,
}) => {
  const getButtonClassNames = (timeframe) => {
    return classNames("profile-tile__button", {
      "profile-tile__button--active": timeframe === activeTimeframe,
    });
  };

  return (
    <div className="profile-tile">
      <div className="profile-tile__header">
        <img className="profile-tile__image" src={profileImage} alt="profile" />
        <p className="profile-tile__report-text">Report for</p>
        <h1 className="profile-tile__name">{profileName}</h1>
      </div>

      <div className="profile-tile__button-group">
        <button
          className={getButtonClassNames("daily")}
          onClick={() => setTimeframe("daily")}
        >
          Daily
        </button>
        <button
          className={getButtonClassNames("weekly")}
          onClick={() => setTimeframe("weekly")}
        >
          Weekly
        </button>
        <button
          className={getButtonClassNames("monthly")}
          onClick={() => setTimeframe("monthly")}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default ProfileTile;
