import { ActionType } from "../action-types";

//importing the dispatch type
import { Dispatch } from "redux";

import { Action } from "../actions/index";

// we pass in <Action> the actions that we defined so TS can catch errors if the wrong payload is passed in
export const depositMoney =
  (amount: number) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };

export const withdrawMoney =
  (amount: number) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount,
    });
  };

export const bankrupt = (amount: number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.BANKRUPT,
    payload: amount,
  });
};
