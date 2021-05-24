import { createStore } from "redux";
import { patternHandler } from "patterns";
import rootReducer from "./reducer";

const store = createStore(rootReducer);

store.subscribe(patternHandler);

export default store;
