import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });
const USER_HOST = process.env.HOST;
const USER_PORT = process.env.PORT;

const app: Express = express();

app.get('/health', (req: Request, res: Response) => {
  res.send({ message: 'Auth service is working...!!!' });
});

const startAuthServer = () => {
  app.listen(USER_PORT, () => {
    try {
      console.log(
        `Auth service is running on http://${USER_HOST}:${USER_PORT} 🚀`
      );
    } catch (error) {
      console.log('Failed to start auth server', error);
      process.exit(1);
    }
  });
};

startAuthServer();
