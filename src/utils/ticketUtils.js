import exercise from "../assets/images/icon-exercise.svg";
import play from "../assets/images/icon-play.svg";
import selfCare from "../assets/images/icon-self-care.svg";
import social from "../assets/images/icon-social.svg";
import study from "../assets/images/icon-study.svg";
import work from "../assets/images/icon-work.svg";

export const getCategoryImage = (category) => {
  switch (category) {
    case "exercise":
      return exercise;
    case "play":
      return play;
    case "self-care":
      return selfCare;
    case "social":
      return social;
    case "study":
      return study;
    case "work":
      return work;
    default:
      console.error("no category image found");
  }
};
