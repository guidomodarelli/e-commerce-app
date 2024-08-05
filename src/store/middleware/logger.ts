import chalk from "chalk";
import { MiddlewareAPI, UnknownAction } from "redux";

export const customLogger =
  (store: MiddlewareAPI) => (next: (action: UnknownAction) => void) => (action: UnknownAction) => {
    if (!action.type) {
      next(action);
    }

    const groupLabel = `${chalk.gray("action")} ${action.type} ${chalk.gray(`@ [${new Date().toLocaleTimeString()}]`)}`;

    console.group(groupLabel);
    console.log(`${chalk.bold.blueBright("payload")}:`, action.payload);
    console.log(`${chalk.bold.gray("currentState")}:`, store.getState());
    console.groupEnd();

    next(action);

    console.group(groupLabel);
    console.log(`${chalk.bold.green("nextState")}:`, store.getState());
    console.groupEnd();
  };
