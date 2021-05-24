import _ from "lodash";

const formatUSD = (ammount: number) => _.round(ammount / Math.pow(10, 18), 4);

export default formatUSD;
