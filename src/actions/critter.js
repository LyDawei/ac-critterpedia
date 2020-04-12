import { ACTIONTYPES } from './actionTypes';

export const toggleCaught = (critter) => {
  return {
    type: ACTIONTYPES.TOGGLE_CAUGHT,
    critter
  };
}

export const setHemisphere = (hemisphere) => {
  return {
    type: ACTIONTYPES.SET_HEMISPHERE,
    hemisphere
  }
}
