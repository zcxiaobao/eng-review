import * as types from "./mutations-type";
const mutations = {
  [types.SET_ERRORWORDS](state, word) {
    state.errorWords.push(word);
  },
  [types.SET_WHOLEWORDS](state, flag) {
    state.isWholeWords = flag;
  },
  [types.SET_ISCHINESE](state, flag) {
    state.isChinese = flag;
  }
};
export default mutations;
