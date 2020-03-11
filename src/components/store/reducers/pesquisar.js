const word = "";

export default function pesquisar(state = word, action) {
  switch (action.type) {
    case "SEARCH": {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
