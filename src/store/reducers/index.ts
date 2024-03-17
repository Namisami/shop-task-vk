import { combineReducers } from "redux";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  shop: shopReducer
})

// function rootReducer(state = initialState, action) {
//   if (typeof state === 'undefined') {
//     return 0
//   }

//   switch (action.type) {
//     // case 'INCREMENT':
//     //   return state + 1
//     // case 'DECREMENT':
//     //   return state - 1
//     default:
//       return state
//   }
// }

export default rootReducer;
