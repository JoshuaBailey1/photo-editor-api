const Jimp = require('jimp');

export function getBuffer(image: typeof Jimp): Buffer {
  let buffer: Buffer;

  image.getBuffer(Jimp.MIME_PNG, (err, buff) => {
    buffer = buff;
  });

  return buffer;
}

export function getBase64(image: typeof Jimp): string {
  let base64: string;

  image.getBase64(Jimp.AUTO, (err, base) => {
    base64 = base;
  });

  return base64.split(',')[1];
}
