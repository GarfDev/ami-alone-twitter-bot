import { combineReducers } from "redux";
// Child reducers
import coinmarketcapReducer from "./coinmarketcap";
import synthExchangesReducer from "./synthExchanges";
import exchangeUSDTallyReducer from "./exchangeUSDTally";

const rootReducer = combineReducers({
  coinmarketcap: coinmarketcapReducer,
  synthExchanges: synthExchangesReducer,
  exchangeUSDTally: exchangeUSDTallyReducer,
});

export default rootReducer;
