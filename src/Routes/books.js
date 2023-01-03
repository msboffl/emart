import express from 'express';
import { db } from '../Database/dbConnect.js';
const router = express.Router();

router.get('/', (req, res) => {
  let q = 'Select * from books';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

export default router;
