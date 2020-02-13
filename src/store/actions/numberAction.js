import * as types from './actionTypes';

export function incrementNumberClassComponent(data) {
  return {
    type: types.NUMBER.INCREMENT_CLASS_COMPONENT,
    payload: data,
  };
}

export function incrementNumberFunctionalComponent(data) {
  return {
    type: types.NUMBER.INCREMENT_FUNCTIONAL_COMPONENT,
    payload: data,
  };
}
