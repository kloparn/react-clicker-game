const upgrades = () => {
  let upg: string[] = [];
  getUpgrades().forEach((upgrade) => {
    JSON.parse(localStorage.getItem(upgrade)!) > 0
      ? upg.push(upgrade)
      : console.log(upgrade, ": No upgrade");
  });
  return upg;
};

const getUpgrades = () => {
  return ["mouseAddi", "mouseMulti"];
};

const getPoints = () => {
  return JSON.parse(localStorage.getItem("points")!);
};

export { upgrades, getUpgrades };
