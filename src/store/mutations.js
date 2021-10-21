import * as types from "./mutations-type";
const mutations = {
  [types.SET_ERRORWORDS](state, word) {
    state.errorWords.push(word);
  }
};
export default mutations;
