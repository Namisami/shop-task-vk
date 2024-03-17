import IItem from "../../types/Item"

export enum ShopActionType {
  GET_ALL_ITEMS = 'GET_ALL_ITEMS',
  INCREMENT_ITEM_COUNT_BY_ID = 'INCREMENT_ITEM_COUNT_BY_ID',
  DECREMENT_ITEM_COUNT_BY_ID = 'DECREMENT_ITEM_COUNT_BY_ID',
  DELETE_ITEM_BY_ID = 'DELETE_ITEM_BY_ID',
}

interface actionGetAll {
  type: ShopActionType.GET_ALL_ITEMS
  payload: IItem[]
}

interface incrementItemCountById {
  type: ShopActionType.INCREMENT_ITEM_COUNT_BY_ID,
  payload: number
}

interface decrementItemCountById {
  type: ShopActionType.DECREMENT_ITEM_COUNT_BY_ID,
  payload: number
}

interface deleteItemById {
  type: ShopActionType.DELETE_ITEM_BY_ID,
  payload: number
}

export type ShopAction = actionGetAll | incrementItemCountById | decrementItemCountById | deleteItemById
