import fsp from 'fs/promises';

export async function getTypes(paths) {
  const types = [];

  for (const path of paths) {
    try {
      const stats = await fsp.stat(path);
      const type = stats.isDirectory() ? 'directory' : 'file';
      types.push(type);
    } catch {
      types.push(null);
    }
  }

  return types;
}

export default getTypes;