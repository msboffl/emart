import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });
const USER_HOST = process.env.HOST;
const USER_PORT = process.env.PORT;

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'working users service api !' });
});

app.listen(USER_PORT, () => {
  console.log(
    `Users service is running on http://${USER_HOST}:${USER_PORT} 🚀`
  );
});
