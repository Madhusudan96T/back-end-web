const express = require('express');
const mongoose = require('mongoose');

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Advocate');

    const productSchema = new mongoose.Schema({});

    const Query = mongoose.model('queries', productSchema);
    const data = await Query.find();
    console.log(data);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

connectDB();

app.listen(2000, () => {
  console.log('Server is running on port 2000');
});
