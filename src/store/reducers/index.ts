import { combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  items: shopReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
