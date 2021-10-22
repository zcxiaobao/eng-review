import * as types from "./mutations-type";
const mutations = {
  [types.SET_ERRORWORDS](state, word) {
    state.errorWords.push(word);
  },
  [types.SET_WHOLEWORDS](state, flag) {
    state.isWholeWords = flag;
  }
};
export default mutations;
