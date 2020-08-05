const upgrades = () => {
  let points = getPoints();
  console.log(points, getUpgrades());
  return null;
};

const getUpgrades = () => {
  return ["mouseAddi", "mouseMulti"];
};

const getPoints = () => {
  return JSON.parse(localStorage.getItem("points")!);
};

export { upgrades, getUpgrades };
