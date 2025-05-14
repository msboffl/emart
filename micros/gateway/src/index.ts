import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });
const GATEWAY_HOST = process.env.HOST;
const GATEWAY_PORT = process.env.GATEWAY_PORT;

const app: Express = express();

app.get('/health', (req: Request, res: Response) => {
  res.send({ message: 'API Gateway is working...!!!' });
});

const startGatewayServer = () => {
  try {
    app.listen(GATEWAY_PORT, () => {
      console.log(
        `API Gateway is running on http://${GATEWAY_HOST}:${GATEWAY_PORT} 🚀`
      );
    });
  } catch (error) {
    console.log('Failed to start gatewasy server', error);
    process.exit(1);
  }
};

startGatewayServer();
