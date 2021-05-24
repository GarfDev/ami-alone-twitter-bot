import { gql } from "graphql-request";

const fifteenMinuteSNXPrices = gql`
  {
    fifteenMinuteSNXPrices(
      orderBy: id
      orderDirection: desc
      first: 10
      skip: 0
    ) {
      id
      averagePrice
    }
  }
`;

export default fifteenMinuteSNXPrices;
