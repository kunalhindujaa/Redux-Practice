const initialName = {
  name: "ABC",
  input: ""
};
const reducer = (state = initialName, action) => {
  switch (action.type) {
    case "KUNAL":
      return {
        name: "Kunal Hinduja"
      };
    case "NEHA":
      return {
        name: "Neha Hinduja"
      };
    case "CHANGE":
      return {
        name: state.name,
        input: action.value
      };
    default:
      return state;
  }

  //return state;
};

export default reducer;
