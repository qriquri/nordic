import { isValid } from '../valid';

describe('isValid', () => {
  it('"("で始まり")"で終わるならTrue', () => {
    const input = '()';
    expect(isValid(input)).toBe(true);
  });

  it('"{"で始まり"}"で終わるならTrue', () => {
    const input = '{}';
    expect(isValid(input)).toBe(true);
  });

  it('"["で始まり"]"で終わるならTrue', () => {
    const input = '[]';
    expect(isValid(input)).toBe(true);
  });

  describe('開いた括弧の順に括弧を閉じる', () => {
    it('"({"で始まり")}"で終わるならFalse', () => {
      const input = '({)}';
      expect(isValid(input)).toBe(false);
    });
    it('"([]){}"はTrue', () => {
      const input = '([]){}';
      expect(isValid(input)).toBe(true);
    });

    it('"({)}"はFalse', () => {
      const input = '({)}';
      expect(isValid(input)).toBe(false);
    });
  });
});
