import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

import { db } from './Database/dbConnect.js';
import connectedToDB from './Errors/dbError.js';
import homePage from './Routes/home.js';
import loginPage from './Routes/login.js';
import signUpPage from './Routes/signup.js';
import notFoundPage from './Routes/404.js';
import getBooks from './Routes/books.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT;

const viewPath = path.join(__dirname, 'views');
app.set('views', viewPath);
app.set('view engine', 'pug');

// Page Routes
app.use('/', homePage);
app.use('/login', loginPage);
app.use('/signup', signUpPage);
app.use('*', notFoundPage);

// API Routes
app.use('/api/v1/books', getBooks);

app.listen(PORT, () => {
  try {
    db.connect(connectedToDB);
  } catch (error) {
    console.log(error);
  }
  console.log(`Server running at PORT: ${PORT}`);
});
