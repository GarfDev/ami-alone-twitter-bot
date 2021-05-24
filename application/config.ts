import dotenv from "dotenv";

const FALLBACK_STRING = "";

dotenv.config();

export default {
  consumer_key: process.env.CONSUMER_KEY || FALLBACK_STRING,
  consumer_secret: process.env.CONSUMER_SECRET || FALLBACK_STRING,
  access_token_key: process.env.ACCESS_TOKEN_KEY || FALLBACK_STRING,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET || FALLBACK_STRING,
};
