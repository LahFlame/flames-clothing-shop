import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectSectionItems = createSelector([selectDirectory],directory => directory.sectionItems);