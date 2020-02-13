import { combineReducers } from 'redux';

// Reducers
import jokes from './jokesReducer';
import number from './numberReducer';

export default combineReducers({
  jokes,
  number,
});
