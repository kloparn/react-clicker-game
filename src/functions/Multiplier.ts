import { upgrades } from "./Upgrades";

const Multiplier = () => {
  return upgrades() === null
    ? 1
    : () => {
        return null;
      };
};

export default Multiplier;
