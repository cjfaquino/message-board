import express from 'express';
import { messages } from '.';

const router = express.Router();

router.post('/', (req, res) => {
  messages.push({
    user: req.body.user,
    text: req.body.message,
    added: new Date(),
  });

  res.redirect('./');
});

export default router;
