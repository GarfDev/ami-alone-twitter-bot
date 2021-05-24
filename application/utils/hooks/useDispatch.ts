import store from "store";
import { AnyAction } from "redux";

const useDispatch = () => (action: AnyAction) => store.dispatch(action as any);

export default useDispatch;
