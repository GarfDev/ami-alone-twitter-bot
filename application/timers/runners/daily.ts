// import moment from "moment";
import renderer from "templates/renderer";
import timerManager from "timers/manager";
import twitter from "utils/twitter";
import AmiForeverAlone from "templates/AmiForeverAlone";
import { getCount } from "models/meta";

const onDaily = async () => {
  // const current = moment();
  // const currentHour = current.hour();
  const client = twitter.getClient();
  if (true) {
    const count = await getCount();
    const buffer = await renderer(AmiForeverAlone, { count });

    client.post("media/upload", { media: buffer }, function (error, media) {
      if (!error) {
        client.post("statuses/update", {
          status: "@forever_alone",
          media_ids: media.media_id_string,
        });
      }
    });
  }

  timerManager.setter("daily", onDaily, 4 * 60 * 60 * 1000);
};

export default onDaily;
