import fsp from 'fs/promises';

export function touch(filepath) {
  return fsp.access(filepath)
    .catch(() => fsp.writeFile(filepath, ''))
    .then(() => console.log('created!'));
}

export default touch;