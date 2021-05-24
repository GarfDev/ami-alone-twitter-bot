import { rootSelector } from "store/selector";
import { ApplicationState } from "store/types";
import { useSelector } from "utils/hooks";

let previousState: ApplicationState | null = null;

const handler = async () => {
  const nextState = useSelector(rootSelector);
  // Patterns
  console.log(previousState); // Nothing to do with this yet
  // After runned all patterns
  previousState = nextState;
};

export default handler;
