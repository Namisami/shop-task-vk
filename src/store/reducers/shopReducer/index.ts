import IItem from "../../../types/Item"
import { ShopAction } from "../../actionTypes"

const initialState = {
  itemList: []
}

export interface IShopReducerState {
  itemList: IItem[]
}

function shopReducer(state: IShopReducerState = initialState, action: ShopAction) {
  if (typeof state === 'undefined') {
    return 0
  }

  switch (action.type) {
    case 'GET_ALL_ITEMS':
      return {
        itemList: action.payload
      }
    case 'INCREMENT_ITEM_COUNT_BY_ID':
      let incrementedItemList = [...state.itemList];
      const incrementedItem = incrementedItemList.find((item) => item.id === action.payload);
      if (incrementedItem && incrementedItem.count < 10) {
        incrementedItem.count += 1
      }  
      return {
        itemList: incrementedItemList
      }
    case 'DECREMENT_ITEM_COUNT_BY_ID':
      let decrementedItemList = [...state.itemList];
      const decrementedItem = decrementedItemList.find((item) => item.id === action.payload);
      if (decrementedItem && decrementedItem.count > 1) {
        decrementedItem.count -= 1
      }  
      return {
        itemList: decrementedItemList
      }
    case 'DELETE_ITEM_BY_ID':
      let deletedItemList = state.itemList.filter((item) => item.id !== action.payload);
      return {
        itemList: deletedItemList
      }
    default:
      return state
  }
}

export default shopReducer;
