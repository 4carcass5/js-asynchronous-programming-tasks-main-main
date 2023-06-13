import fs from "fs/promises";

const print = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        console.log(data);
    } catch (error) {
        console.log(`Ошибка: ${error}`);
    }
};

export default print;
