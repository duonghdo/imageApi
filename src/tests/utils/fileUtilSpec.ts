const {
    getImageFilename,
    imageExists,
    getThumbnailFilename,
    thumbnailExists,
    createThumbnailDir
} = require('../../utils/fileUtil');

describe('Test fileUtil', () => {
    it('imageExists should fail', () => {
        expect(imageExists('north')).toBe(false);
    });

    it('imageExists should succeed', () => {
        expect(imageExists('fjord')).toBe(true);
    });

    it('thumbnailExists should fail', () => {
        expect(thumbnailExists('north', 100, 100)).toBe(false);
    });
});