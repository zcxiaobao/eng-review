export const engToChn = state => state.engToChn;
export const wordDict = state => state.wordDict;
export const unit = state => state.unit;
export const errorWords = state => state.errorWords;
export const isWholeWords = state => state.isWholeWords;
export const isChinese = state => state.isChinese;
export const sentences = state => state.sentences;
export const unitNums = state => state.wordDict.length; // 单元数
export const wordNums = state => state.totalWords.length; // 单词数
export const words = state => {
  if (state.isWholeWords) {
    return state.totalWords;
  } else {
    return state.wordDict[state.unit - 1];
  }
};
