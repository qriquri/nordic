import { hello } from '../hello';

describe('hello', () => {
  it('"typescript"と入力したら"Hello, typescript"と返す', () => {
    const text = 'typescript';

    expect(hello(text)).toBe('Hello, typescript');
  });
});
