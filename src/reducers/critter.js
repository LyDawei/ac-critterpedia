
import critters from '../constants/Critters';

import { ACTIONTYPES } from '../actions/actionTypes';

const initialState = {
  hemisphere: 'north',
  bugs: critters.filter(x => x.type === 'Bug'),
  fish: critters.filter(x => x.type === 'Fish')
};

function calculateHemisphereSwap(critter) {
  critter.smonth += 6;
  critter.emonth += 6;
  if (critter.smonth > 12) critter.smonth -= 12;
  if (critter.emonth > 12) critter.emonth -= 12;


  if (!critter.smonth2) return critter;

  critter.smonth2 += 6;
  critter.emonth2 += 6;
  if (critter.smonth2 > 12) critter.smonth2 -= 12;
  if (critter.emonth2 > 12) critter.emonth2 -= 12;
  return critter;
}


export default (state = initialState, payload) => {
  switch (payload.type) {
    case ACTIONTYPES.SET_HEMISPHERE: {
      return {
        ...state,
        hemisphere: payload.hemisphere,
        bugs: state.bugs.map(bug => calculateHemisphereSwap(bug)),
        fish: state.fish.map(fish => calculateHemisphereSwap(fish))
      };
    }
    case ACTIONTYPES.TOGGLE_CAUGHT: {
      const { type, critterId } = payload.critter;
      if (type === 'Bug') {
        const updatedBugs = state.bugs.map(bug);
        const bug = updatedBugs.find(x => x.no === critterId);
        bug.chk = !bug.chk;

        return {
          ...state,
          bugs: updatedBugs
        };
      } else {
        const updatedFish = state.fish.map(fish);
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
