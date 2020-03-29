import { createSelector } from 'reselect';

const selectShop = state => state.shop;
export const getCollections = createSelector([selectShop], shop => shop.collection);
export const areCollectionLoaded = createSelector([getCollections], collection => !!collection)
