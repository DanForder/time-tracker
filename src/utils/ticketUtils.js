export const getCategoryImage = async (category) => {
  const iconName = formatCategoryString(category);
  const image = await import(`../assets/images/icon-${iconName}.svg`);
  return image.default;
};

export const formatCategoryString = (string) => {
  return string.toLowerCase().split(" ").join("-");
};

export const getLastTimeframeName = (timeframe) => {
  return timeframe === "daily"
    ? "Yesterday"
    : `Last ${timeframe.substring(0, timeframe.length - 2)}`;
};
