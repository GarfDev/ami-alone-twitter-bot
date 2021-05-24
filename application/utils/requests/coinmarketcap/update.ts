import got from "got";

const update = async () => {
  const { body }: { body: ResponseData } = await got.get(URL, {
    responseType: "json",
  });
  return body;
};

export default update;

/**
 * Constants
 */

const URL = "https://coinmarketcap-api.synthetix.io/public/prices?symbols=SNX";

/**
 * Types
 */

export interface Status {
  timestamp: Date;
  error_code: number;
  error_message?: any;
  elapsed: number;
  credit_count: number;
  notice?: any;
}

export interface Platform {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  token_address: string;
}

export interface QuoteInfo {
  price: number;
  volume_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_60d: number;
  percent_change_90d: number;
  market_cap: number;
  last_updated: Date;
}

export interface Quote {
  [id: string]: QuoteInfo;
}

export interface SymbolData {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  num_market_pairs: number;
  date_added: Date;
  tags: string[];
  max_supply: number;
  circulating_supply: number;
  total_supply: number;
  platform: Platform;
  is_active: number;
  cmc_rank: number;
  is_fiat: number;
  last_updated: Date;
  quote: Quote;
}

export interface Data {
  [sympol: string]: SymbolData;
}

export interface ResponseData {
  status: Status;
  data: Data;
}
