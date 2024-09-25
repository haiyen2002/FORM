import classnames from "classnames";

const cn = (...args: classnames.ArgumentArray): string => {
  return classnames(...args);
};

export default cn;
