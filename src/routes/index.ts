import express from 'express';

const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Armando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

router.get('/', (req, res) => {
  res.render('index', { messages });
});

export default router;
