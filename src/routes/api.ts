import { Router } from 'express';
import { body, validationResult } from 'express-validator';

const router = Router();

router.post('/', [
  body('username').isString().notEmpty(),
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Here you would normally save the user to the database
  res.status(201).json({ message: 'User registered successfully' });
});

export { router as registerRouter };