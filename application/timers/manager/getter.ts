import timerManageObject from "./storage";

const getter = (key: string) => timerManageObject[key];

export default getter;
