import path from 'path';
import fs from 'fs';
import async from 'async';
// BEGIN
export const getDirectorySize = (dirPath, callback) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      callback(err);
      return;
    }
    async.map(files, (file, next) => {
      const filePath = path.join(dirPath, file);
      fs.stat(filePath, (statErr, stats) => {
        if (statErr) {
          next(statErr);
          return;
        }
        if (stats.isFile()) {
          next(null, stats.size);
        } else {
          next(null, 0);
        }
      });
    }, (mapErr, sizes) => {
      if (mapErr) {
        callback(mapErr);
        return;
      }
      const totalSize = sizes.reduce((acc, size) => acc + size, 0);
      callback(null, totalSize);
    });
  });
};
// END