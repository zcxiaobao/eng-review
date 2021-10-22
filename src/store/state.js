import dict from "../common/data/words";
import sentences from "../common/data/sentences";

const state = {
  name: 1,
  engToChn: dict.dictEngToChn, // 英译汉
  words: dict.words, // 单词数
  unit: 1, // 单元数
  errorWords: [], // 未掌握单词
  isWholeWords: false, // 是否为全部单词
  isChinese: false, // 是否为中文模式
  sentences: sentences
};
export default state;
