import * as type from '../actions/actionTypes';

export const initialState = {
  orgs: [],
};
export const data = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_RESULT:
      return { ...state, orgs: action.result.items };
    default:
      return state;
  }
};
