import {
  TIMEKEEP_REQUESTING,
  TIMEKEEP_SUCCESS,
  TIMEKEEP_ERROR,
} from "../actionTypes/timekeep.actiontypes";

const initialState = {
  requesting: false,
  successful: false,
  errors: [],
  data: [],
};

const reducer = function timekeepReducer(state = initialState, action) {
  switch (action.type) {
    case TIMEKEEP_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
        errors: [],
      };

    case TIMEKEEP_SUCCESS:
      return {
        ...state,
        errors: [],
        requesting: false,
        successful: true,
        data: action.data,
      };

    case TIMEKEEP_ERROR:
      return {
        ...state,
        errors: action.error,
        requesting: false,
        successful: false,
      };

    default:
      return state;
  }
};

export default reducer;
