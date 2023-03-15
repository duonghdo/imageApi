import fs from 'fs';
import path from 'path';

const imagesPath = path.join(__dirname, '../../assets/images');
const thumbnailsPath = path.join(__dirname, '../../assets/thumbnails');
const fileExtension = '.jpg';

const imageExists = (filename: string): boolean => {
    const filePath = `${imagesPath}/${filename}${fileExtension}`;
    return fs.existsSync(filePath);
};

const getImageFilename = (filename: string): string => {
    return `${imagesPath}/${filename}${fileExtension}`;
};

const thumbnailExists = (
    filename: string,
    width: number,
    height: number
): boolean => {
    const thumbnail = getThumbnailFilename(filename, width, height);
    return fs.existsSync(thumbnail);
};

const getThumbnailFilename = (
    filename: string,
    width: number,
    height: number
): string => {
    return `${thumbnailsPath}/${filename}_${width}x${height}${fileExtension}`;
};

const createThumbnailDir = (): void => {
    if (!fs.existsSync(thumbnailsPath)) {
        fs.mkdirSync(thumbnailsPath);
    }
};

module.exports = {
    imageExists,
    getImageFilename,
    thumbnailExists,
    getThumbnailFilename,
    createThumbnailDir,
};
