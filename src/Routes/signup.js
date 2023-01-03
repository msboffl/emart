import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('signup');
});

export default router;
