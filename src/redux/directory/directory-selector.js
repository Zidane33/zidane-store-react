import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;
export const selectDirectorySections = createSelector([selectDirectory], directory => directory.section);
export const areSectionsLoaded = createSelector([selectDirectorySections], sections => !!sections);
