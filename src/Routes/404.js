import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('404');
});

export default router
