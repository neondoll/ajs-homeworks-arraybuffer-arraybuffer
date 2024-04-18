export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    const symbols = [];

    for (let index = 0; index < bufferView.length; index += 1) {
      symbols.push(String.fromCharCode(bufferView[index]));
    }

    return symbols.join('');
  }
}
