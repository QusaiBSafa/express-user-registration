import express from 'express';
import bodyParser from 'body-parser';
import { registerRouter } from './routes/api';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/register', registerRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});