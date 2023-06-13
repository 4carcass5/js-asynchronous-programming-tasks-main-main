import fsp from 'fs/promises';

export async function exchange(filepathOne, filepathTwo) {
  try {
    const [contentOne, contentTwo] = await Promise.all([
      fsp.readFile(filepathOne, 'utf-8'),
      fsp.readFile(filepathTwo, 'utf-8'),
    ]);

    await Promise.all([
      fsp.writeFile(filepathOne, contentTwo),
      fsp.writeFile(filepathTwo, contentOne),
    ]);
  } catch (err) {
    console.log(err);
  }
}

export default exchange;