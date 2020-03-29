import { createSelector } from 'reselect';

const selectShop = state => state.shop;
export const getCollections = createSelector([selectShop], shop => shop.collection);
export const getCollectionsPending = createSelector([selectShop], shop => shop.pending);
export const getCollectionsError = createSelector([selectShop], shop => shop.error);
