import express from 'express';
const {
    getImageFilename,
    imageExists,
    getThumbnailFilename,
    thumbnailExists,
    createThumbnailDir
} = require('../../utils/fileUtil');
const {resizeImage} = require('../../utils/imageUtil');

const images = express.Router();

images.get('/', async (req: express.Request, res: express.Response) => {
    const filename = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;

    if (!filename || !width || !height) {
        res.status(400).send('Missing required parameters');
        return;
    } else if (!imageExists(filename)) {
        res.status(404).send('File not found');
        return;
    } else if (Number(width) < 0 || Number(height) < 0) {
        res.status(400).send('Invalid width or height');
        return;
    } 

    const thumbnailFilename = getThumbnailFilename(filename, width, height);
    const imageFilename = getImageFilename(filename.toString());
    if (thumbnailExists(filename, width, height)) {
        res.status(200).sendFile(thumbnailFilename);
    } else {
        createThumbnailDir();
        await resizeImage(imageFilename, Number(width), Number(height), thumbnailFilename);
        res.status(200).sendFile(thumbnailFilename);
    }
});

export default images;