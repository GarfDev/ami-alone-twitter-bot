import fs from "fs";
import moment from "moment";
import { getStaticPath } from "utils";
import getter from "./getter";

const writeLogToFile = () => {
  const logger = getter();
  const logStaticPath = getStaticPath(
    `logs/${moment().format("DD-MM-YYYY")}.txt`
  );

  logger.records.forEach((log) => {
    fs.writeFileSync(logStaticPath, log.message + "\n", { flag: "a+" });
  });
};

export default writeLogToFile;
