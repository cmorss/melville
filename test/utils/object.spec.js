import * as Util from '../../app/utils/Object'

describe('isBlank', () => {
  it('should return false for a string', () => {
    expect(Util.isBlank("hello")).toEqual(false)
  });

  it('should return true for null', () => {
    expect(Util.isBlank(null)).toEqual(true)
  });

  it('should return true for undefined', () => {
    expect(Util.isBlank(undefined)).toEqual(true)
  });

});

