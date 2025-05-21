import express, { Express, Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });
const GATEWAY_HOST = process.env.HOST || 'localhost';
const GATEWAY_PORT = process.env.GATEWAY_PORT || 4000;

const app: Express = express();

app.use(helmet());
app.use(cors());

// API GATEWAY PROXY
app.use(
  '/api/v1/auth',
  createProxyMiddleware({
    target: 'http://localhost:4001',
    changeOrigin: true,
    pathRewrite: { '^/': '/api/v1/auth/' },
  })
);

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
    console.log('❌ Failed to start gatewasy server', error);
    process.exit(1);
  }
};

startGatewayServer();
