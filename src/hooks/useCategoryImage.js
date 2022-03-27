import { useEffect, useState } from "react";
import { getCategoryImage } from "../utils/ticketUtils";

//dynamically gets a category's image and returns it
const useCategoryImage = (category) => {
  const [image, setImage] = useState();

  useEffect(async () => {
    setImage(await getCategoryImage(category));
  }, [category]);

  return [image];
};

export default useCategoryImage;
