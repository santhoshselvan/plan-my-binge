import { createAction } from 'redux-actions';

export const storePopularShows = createAction('STORE_POPULAR_SHOWS');

export const storeShow = createAction('STORE_SHOW');
export const storeShows = createAction('STORE_SHOWS');

export const getShow = createAction('GET_SHOW');
export const getPopularShows = createAction('GET_POPULAR_SHOWS');

export const setShowHomePageError = createAction('SHOW_HOME_PAGE_ERROR');
export const setShowHomePageLoader = createAction('SHOW_HOME_PAGE_LOADER');

export const setShowDetailPageError = createAction('SHOW_DETAIL_PAGE_ERROR');
export const setShowDetailPageLoader = createAction('SHOW_DETAIL_PAGE_LOADER');

export const markShowAsVisited = createAction('MARK_SHOW_AS_VISITED');
export const setUserBingeTime = createAction('SET_USER_BINGE_TIME');

export const toggleBookmark = createAction('TOGGLE_BOOKMARK');

export const inputFocused = createAction('INPUT_FOCUSED');

export const setUserId = createAction('SET_USER_ID');
export const setSessionId = createAction('SET_SESSION_ID');

