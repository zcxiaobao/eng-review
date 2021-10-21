import * as types from "./mutations-type";
export const setErrorWords = function({ commit }, word) {
  commit(types.SET_ERRORWORDS, word);
};
