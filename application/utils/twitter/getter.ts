import config from "config";
import Twitter from "twitter";

const getterGenerator = () => {
  let client: Twitter | null = null;
  return (): Twitter => {
    if (client) return client;
    client = new Twitter(config);
    return client;
  };
};

export default getterGenerator();
