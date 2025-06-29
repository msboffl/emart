import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });
const AUTH_HOST = process.env.HOST || 'localhost';
const AUTH_PORT = process.env.PORT || 4001;

const app: Express = express();
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.send({ message: 'Auth service is working...!!!' });
});

app.get('/api/v1/auth', (req: Request, res: Response) => {
  res.send({ message: 'AUTH API..' });
});

app.get('/api/v1/auth/login', (req: Request, res: Response) => {
  res.send({ message: 'Login API..' });
});

const startAuthServer = () => {
  try {
    app.listen(AUTH_PORT, () => {
      console.log(
        `Auth service is running on http://${AUTH_HOST}:${AUTH_PORT} 🚀`
      );
    });
  } catch (error) {
    console.log('❌ Failed to start auth server', error);
    process.exit(1);
  }
};


startAuthServer();
