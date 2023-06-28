import { isContain } from './utils';

const START_CHARS = ['(', '{', '['];
const END_CHARS = [')', '}', ']'];

/**
 * 始まりの括弧か
 * @param char
 * @return {boolean}
 */
const isStartChar = (char: string) => {
  return isContain(START_CHARS, char);
};

/**
 * 終わりの括弧か
 * @param char
 * @return {boolean}
 */
const isEndChar = (char: string) => {
  return isContain(END_CHARS, char);
};

/**
 * 括弧のペアかどうかを返す
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
const isPair = (start: string, end: string) => {
  switch (start) {
    case '(':
      return end === ')';
    case '{':
      return end === '}';
    case '[':
      return end === ']';
    default:
      return false;
  }
};

export const isValid = (text: string) => {
  const stack = [];
  for (let i = 0; i < text.length; i++) {
    if (isStartChar(text[i])) {
      stack.push(text[i]);
      continue;
    }
    if (isEndChar(text[i])) {
      if (stack.length === 0) {
        continue;
      }
      if (isPair(stack[stack.length - 1], text[i])) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return true;
};
