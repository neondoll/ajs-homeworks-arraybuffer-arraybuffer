import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../../functions/getBuffer';

test('Testing buffer loading', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();

  converter.load(buffer);

  const result = converter.buffer;

  expect(result).toEqual(buffer);
});

test('Testing the translation of loaded content into a string', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();

  converter.load(buffer);

  const result = converter.toString();

  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
