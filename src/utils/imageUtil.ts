import sharp from 'sharp';

const resizeImage = async (
    filename: string,
    width: number,
    height: number,
    thumbnail: string
): Promise<void> => {
    try {
        await sharp(filename).resize(width, height).toFile(thumbnail);
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    resizeImage,
};
