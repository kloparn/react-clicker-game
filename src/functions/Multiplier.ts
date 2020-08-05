import { upgrades } from "./Upgrades";

const Multiplier = () => {
  return upgrades().length === 0 ? 1 : Manager(upgrades());
};

const Manager = (strArr: string[]) => {
  let clickValue = 1;

  strArr.forEach((upgrade) => {
    console.log(upgrade);
    clickValue += JSON.parse(localStorage.getItem(upgrade)!);
  });
  return clickValue;
};

export default Multiplier;
