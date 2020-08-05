import { getUpgrades } from "./Upgrades";

const Reset = () => {
  getUpgrades().forEach((upgrade) =>
    localStorage.setItem(upgrade, JSON.stringify(0))
  );
};

export default Reset;
