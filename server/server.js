const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors middleware
const port = 5000;
const uploadRoutes = require('./routes/uploadRoutes');
var corsOptions = {
    origin: '*',
  };
  
  app.use(cors(corsOptions));
app.use('/uploads', express.static('uploads')); // Serve uploaded files statically

app.use(express.json());
app.use('/upload', uploadRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
