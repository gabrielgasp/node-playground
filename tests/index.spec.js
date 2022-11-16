const main = require('../index');
const isInteger = require('../modulo1');

jest.mock('../modulo1', () => jest.fn());
describe('test', () => {
  it('should return true', () => {
    isInteger.mockReturnValue('batata');
    expect(main(18)).toBe('batata');
    expect(isInteger).toHaveBeenCalledWith(18);
  });
})
