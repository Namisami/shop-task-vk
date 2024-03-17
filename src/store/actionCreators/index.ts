import axios from "axios";
import { Dispatch } from "redux";
import { ShopActionType, ShopAction } from "../actionTypes";
import IItem from "../../types/Item";

export const getAllItems = () => {
  return async (dispatch: Dispatch<ShopAction>) => {
    let data: IItem[] = [];
    await axios
      .get('https://fakestoreapi.com/products?limit=5')
      .then((res) => data = res.data)
      .catch((err) => console.log(err))

    data = data.map((item) => {
      item.count = 1
      return item
    })

    if (data) {
      dispatch({
        type: ShopActionType.GET_ALL_ITEMS,
        payload: data
      })
    }
  }
}

export const incrementItemCountById = (id: number) => {
  return (dispatch: Dispatch<ShopAction>) => {
    dispatch({
      type: ShopActionType.INCREMENT_ITEM_COUNT_BY_ID,
      payload: id
    })
  }
}

export const decrementItemCountById = (id: number) => {
  return (dispatch: Dispatch<ShopAction>) => {
    dispatch({
      type: ShopActionType.DECREMENT_ITEM_COUNT_BY_ID,
      payload: id
    })
  }
}

export const deleteItemById = (id: number) => {
  return (dispatch: Dispatch<ShopAction>) => {
    dispatch({
      type: ShopActionType.DELETE_ITEM_BY_ID,
      payload: id
    })
  }
}
