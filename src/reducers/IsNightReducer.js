export const TOGGLE_DAY_NIGHT = 'TOGGLE_DAY_NIGHT'

export const INITIAL_STATE = { isNight: false }

export default ({ isNight }, action) => {
  switch (action.type) {
    case TOGGLE_DAY_NIGHT:
      return { isNight: !isNight }
    default:
      throw new Error();
  }
}
