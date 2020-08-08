import { upgrades } from "./Upgrades";

const Multiplier = () => {
  return upgrades().length === 0 ? 1 : Manager(upgrades());
};

const Manager = (strArr: string[]) => {
  let clickValue = 1;
  let multiply = 1;

  strArr.forEach((upgrade) => {
    switch (upgrade.split("-")[1]) {
      case "+":
        clickValue +=
          JSON.parse(localStorage.getItem(upgrade)!) *
          JSON.parse(upgrade.split("-")[2]);
        break;
      case "*":
        multiply += JSON.parse(localStorage.getItem(upgrade)!);
        break;
      default:
        console.log("Did not recognice the upgrade");
        break;
    }
  });
  console.log(clickValue * multiply !== 0 ? multiply : 1);
  console.log("clickValue: ", clickValue);
  console.log("Multiply value: ", multiply);
  console.log("Return value MUST be: ", clickValue * multiply);
  return clickValue * multiply;
};

export default Multiplier;
