import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  toIncrementClassComponent: 0,
  toIncrementFunctionalComponent: 0,
};
export default function number(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.NUMBER.INCREMENT_CLASS_COMPONENT:
      return { ...state, toIncrementClassComponent: action.payload + 1 };
    case types.NUMBER.INCREMENT_FUNCTIONAL_COMPONENT:
      return { ...state, toIncrementFunctionalComponent: action.payload + 1 };
    default:
      return state;
  }
}
