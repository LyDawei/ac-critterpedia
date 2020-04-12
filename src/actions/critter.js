import { ACTIONTYPES } from './actionTypes';

export const toggleCaught = (critterId) => {
  return {
    type: ACTIONTYPES.TOGGLE_CAUGHT,
    critterId
  };
}

export const setType = (setting) => {
  return {
    type: ACTIONTYPES.SET_TYPE,
    setting
  };
}

export const setHemisphere = (hemisphere) => {
  return {
    type: ACTIONTYPES.SET_HEMISPHERE,
    hemisphere
  }
}
