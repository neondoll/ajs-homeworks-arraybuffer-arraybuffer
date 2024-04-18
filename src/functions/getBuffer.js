export default function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);

    for (let index = 0; index < input.length; index += 1) {
      bufferView[index] = input.charCodeAt(index);
    }

    return buffer;
  })(data);
}
