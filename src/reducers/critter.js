
import fishList from '../constants/Fish';
import bugList from '../constants/Insects';
import { ACTIONTYPES } from '../actions/actionTypes';

const initialState = {
  setting: 'bugs',
  hemisphere: 'north',
  bugs: bugList,
  fish: fishList
};


export default (state = initialState, payload) => {
  switch (payload.type) {
    case ACTIONTYPES.SET_TYPE:
      return { ...state, setting: payload.setting };
    case ACTIONTYPES.SET_HEMISPHERE:
      return { ...state, hemisphere: payload.hemisphere };
      break;
    case ACTIONTYPES.TOGGLE_CAUGHT:
      break;
    default:
      return state;
  }
};
