import { access, mkdir } from 'node:fs/promises';
import { url } from 'node:inspector';

export const createDirIfNotExists = async (url) => {
  try {
    await access(url);
  } catch (err) {
    if (err.code === 'ENOENT') {
      await mkdir(url);
    }
  }
};
