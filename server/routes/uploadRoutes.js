const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadController = require('../controller/uploadController');

// Set up Multer storage and file naming
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Files will be temporarily stored in the 'uploads' folder
    cb(null, 'uploads/temp');
  },
  filename: (req, file, cb) => {
    const userId = req.params.user_id;
    const fileName = `${userId}_${Date.now()}_${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

// Endpoint for file upload
router.post('/:user_id', upload.fields([{ name: 'image' }, { name: 'pdf' }]), uploadController.uploadFiles);

module.exports = router;
