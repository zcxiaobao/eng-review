import errorDict from "../notedata/errorWord";

export const shuffle = function(arr) {
  let _arr = [...arr];
  for (let i = _arr.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    let tmp = _arr[i - 1];
    _arr[i - 1] = _arr[j];
    _arr[j] = tmp;
  }
  return _arr;
};

export const writeErrorWords = function(word) {
  if (errorDict[word]) {
    errorDict[word]++;
  } else {
    errorDict[word] = 1;
  }
};
