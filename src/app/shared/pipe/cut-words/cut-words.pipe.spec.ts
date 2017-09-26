import {CutWordsPipe} from './cut-words.pipe';

describe('CutWordsPipe', () => {
  let pipe: CutWordsPipe;

  beforeEach(() => {
    pipe = new CutWordsPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return passed value when it is within given limit', () => {
    expect(pipe.transform('abc', 3)).toBe('abc');
  });

  it('should return only dots as given word is not within given limit', () => {
    expect(pipe.transform('abcdef', 5)).toBe('...');
  });

  it('should return shortened version of given value but only till last space within limit', () => {
    expect(pipe.transform('ab cdef', 5)).toBe('ab...');
  });
});
