import * as types from "./mutations-type";
export const setErrorWords = function({ commit }, word) {
  commit(types.SET_ERRORWORDS, word);
};
export const setWholeWords = function({ commit }, flag) {
  commit(types.SET_WHOLEWORDS, flag);
};
