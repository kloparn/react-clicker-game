import { upgrades } from "./Upgrades";

const Multiplier = () => {
  return upgrades().length === 0 ? 1 : Manager(upgrades());
};

const Manager = (strArr: string[]) => {
  let clickValue = 1;

  strArr.forEach((upgrade) => {
    upgrade === "mouseAddi"
      ? (clickValue += JSON.parse(localStorage.getItem(upgrade)!))
      : console.log("Shall do something else here"); // the strings here has a value at the end that says the value it shall add per item;
  });
  return clickValue;
};

export default Multiplier;
