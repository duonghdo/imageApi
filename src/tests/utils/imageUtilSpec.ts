import fs from 'fs';
import path from 'path';
const {resizeImage} = require('../../utils/imageUtil');

const imagesPath = path.join(__dirname, '../../../assets/images');
const thumbnailsPath = path.join(__dirname, '../../../assets/thumbnails');
const fileExtension = '.jpg';

beforeAll(() => {
    if (!fs.existsSync(thumbnailsPath)) {
        fs.mkdirSync(thumbnailsPath);
    }
});

describe('Test imageUtil', () => {
    it('resizeImage should fail', async () => {
        const imageFilename = `${imagesPath}/north${fileExtension}`;
        const thumbnailFilename = `${thumbnailsPath}/north_100x100${fileExtension}`;
        await resizeImage(imageFilename, 100, 100, thumbnailFilename);
        expect(fs.existsSync(thumbnailFilename)).toBe(false);
    });

    it('resizeImage should succeed', async () => {
        const imageFilename = `${imagesPath}/fjord${fileExtension}`;
        const thumbnailFilename = `${thumbnailsPath}/fjord_100x100${fileExtension}`;
        await resizeImage(imageFilename, 100, 100, thumbnailFilename);
        expect(fs.existsSync(thumbnailFilename)).toBe(true);
    });
});

afterAll(() => {
    fs.rmSync(thumbnailsPath, {recursive: true});
});
