import { shopActionTypes } from "./shop.types";

export const getCategories = () => ({ type: shopActionTypes.GET_CATEGORIES });

export const getProducts = () => ({ type: shopActionTypes.GET_PRODUCTS });