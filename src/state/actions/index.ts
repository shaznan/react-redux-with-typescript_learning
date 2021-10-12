import { ActionType } from "../action-types/index";

// Defining TS types for our action types
interface depositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}

interface withdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}

interface bankruptAction {
  type: ActionType.BANKRUPT;
  payload: number;
}

export type Action = depositAction | withdrawAction | bankruptAction;
