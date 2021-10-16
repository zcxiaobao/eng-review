import * as types from "./mutations-type";
const mutations = {
  [types.SET_WORDRECITE](state, flag) {
    state.wordRecite = flag;
  }
};
export default mutations;
