const fs = require('fs-extra');
const path = require('path');

const uploadFiles = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const userUploadsFolder = path.join(__dirname, `../uploads/${userId}`);

    // Create the user's folder if it doesn't exist
    await fs.ensureDir(userUploadsFolder);

    const image = req.files['image'][0];
    const pdf = req.files['pdf'][0];

    // Define the file paths
    const imagePath = path.join(userUploadsFolder, image.filename);
    const pdfPath = path.join(userUploadsFolder, pdf.filename);

    // Move the uploaded files to the user's folder using fs-extra's move method
    await fs.move(image.path, imagePath);
    await fs.move(pdf.path, pdfPath);

    res.status(200).json({ message: 'Files uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  uploadFiles,
};
