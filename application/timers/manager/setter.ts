import timerManageObject from "./storage";

const setter = (key: string, timer: () => Promise<void>, timeout: number) => {
  if (timerManageObject[key]) clearTimeout(timerManageObject[key]);
  timerManageObject[key] = setTimeout(timer, timeout);
};

export default setter;
