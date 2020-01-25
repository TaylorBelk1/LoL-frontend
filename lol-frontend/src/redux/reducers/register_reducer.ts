import { RegisterState, RegisterInfo } from "../models/register_model";

import {
  RegisterActionTypes,
  SET_REGISTER_DATA
} from "../actions/types/register-types";

const initialState: RegisterInfo = {
  user: {
    fullName: "",
    email: "",
    password: ""
  }
};

export function playerReducer(
  state = initialState,
  action: RegisterActionTypes
): RegisterInfo {
  switch (action.type) {
    case SET_REGISTER_DATA:
      console.log(state);
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}