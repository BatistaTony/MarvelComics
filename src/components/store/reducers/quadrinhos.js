import {
  FETCH_MARVEL_FAILURE,
  FETCH_MARVEL_REQUEST,
  FETCH_MARVEL_SUCESS
} from "../actions.js/quadrinhos";

const initialState = {
  data: [],
  status: ""
};

export default function quadrinhos(state = initialState, action) {
  switch (action.type) {
    case FETCH_MARVEL_REQUEST: {
      state = Object.assign({}, state, { status: "waiting" });
      break;
    }

    case FETCH_MARVEL_SUCESS: {
      state = Object.assign({}, state, {
        data: action.payload,
        status: "received"
      });
      break;
    }

    case FETCH_MARVEL_FAILURE: {
      state = Object.assign({}, state, {
        status: "failure",
        error: action.payload
      });
      break;
    }

    default: {
      return state;
    }
  }

  return state;
}
