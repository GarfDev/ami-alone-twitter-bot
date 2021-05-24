import { gql } from "graphql-request";

const exchangeUSDTally = gql`
  {
    totals(where: { id: "mainnet" }, first: 1, skip: 0) {
      trades
      exchangers
      exchangeUSDTally
      totalFeesGeneratedInUSD
    }
  }
`;

export default exchangeUSDTally;

export interface USDTDaily {
  exchangeUSDTally: number;
  exchangers: number;
  totalFeesGeneratedInUSD: number;
  trades: number;
}

export interface ExchangeUSDTallyResponse {
  totals: [USDTDaily];
}
