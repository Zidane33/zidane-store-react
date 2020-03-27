import { createSelector } from 'reselect';

const selectShop = state => state.shop;
export const getCollections = createSelector([selectShop], shop => shop.collection);
export const getCollectionsPending = createSelector([selectShop], shop => shop.pending);
export const getCollectionsError = createSelector([selectShop], shop => shop.error);

export const selectShopCollections = createSelector([selectShop], shop => shop.collections);

export const selectShopCollectionsForPreview = createSelector([selectShopCollections], collections => Object.keys(collections).map(key => collections[key]));

export const selectCollection = collectionUrlParam => createSelector([selectShopCollections], collections => collections[collectionUrlParam]);
