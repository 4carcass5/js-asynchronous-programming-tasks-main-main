import fs from "fs/promises";
// BEGIN
export const compareFileSizes = async (filepath1, filepath2, cb) => {
    try {
        const [file1Stats, file2Stats] = await Promise.all([fs.stat(filepath1), fs.stat(filepath2)]);
        cb(undefined, Math.sign(file1Stats.size - file2Stats.size));
    } catch (err) {
        cb(err);
    }
};

export default compareFileSizes;
// END
