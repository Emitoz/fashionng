import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCategories = createSelector(
    [selectShop],
    shop => shop.categories
);

export const selectProducts = createSelector(
    [selectShop],
    shop => shop.products
);