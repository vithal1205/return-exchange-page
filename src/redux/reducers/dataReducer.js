// src/redux/reducers/dataReducer.js
const initialState = {
  items: [], // Replace with dummy data later
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
