
import critters from '../constants/Critters';

import { ACTIONTYPES } from '../actions/actionTypes';

const initialState = {
  hemisphere: 'north',
  bugs: critters.filter(x => x.type === 'Bug'),
  fish: critters.filter(x => x.type === 'Fish')
};


export default (state = initialState, payload) => {
  switch (payload.type) {
    case ACTIONTYPES.SET_HEMISPHERE:
      return { ...state, hemisphere: payload.hemisphere };
    case ACTIONTYPES.TOGGLE_CAUGHT: {
      const { type, critterId } = payload.critter;
      if (type === 'Bug') {
        const updatedBugs = state.bugs.map(bug => bug);
        const bug = updatedBugs.find(x => x.no === critterId);
        bug.chk = !bug.chk;

        return {
          ...state,
          bugs: updatedBugs
        };
      } else {
        const updatedFish = state.fish.map(fish => fish);
        const fish = updatedFish.find(x => x.no === critterId);
        fish.chk = !fish.chk;

        return {
          ...state,
          fish: updatedFish
        };
      }
    }
    default:
      return state;
  }
};
