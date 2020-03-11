export default function quadrinho(state = 0, action) {
  switch (action.type) {
    case "SEE_Q": {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
