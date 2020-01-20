/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect';
import Text from '../index';

describe('[JS] Text', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('should setValue() successfully', ()=>{
    const value = 'hello';

    const text = new Text();
    expect(text.render()).toHaveValue('');
    text.setValue(value);
    expect(text.render()).toHaveValue(value);
  });
});