import twitter from "utils/twitter";
import { getLogger } from "utils/logger";
import { Meta } from "models/meta";
// Runners
import timerManager from "timers/manager";
import daily from "timers/runners/daily";

const application = () => {
  const logger = getLogger();
  logger.info("Initializing application..");
  logger.info("Created Twitter Client..");

  Meta.sync();

  daily();
  timerManager.setter("daily", daily, 4 * 60 * 60 * 1000);

  logger.info("Registed Runners..");
  twitter.getClient();
};

export default application;
