const express = require('express');
const { index, downloads, store } = require('../controllers/FilesController');
const FileUpload = require('../middlewares/FileUpload');
const router = express.Router();

router.get('/files/:uuid', index);
router.get('/downloads/:uuid', downloads);
router.post('/files', FileUpload, store);

module.exports = router;