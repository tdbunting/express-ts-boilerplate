require('dotenv').config({ path: '.env' })
import https from 'https';
import fs from 'fs';
import app from './app';
import serverless from 'serverless-http';

const PORT = process.env.PORT || 8888
const isLocalDev = process.env.SERVER_ENV === 'local'

if (isLocalDev) {
  const privateKey = fs.readFileSync('./certificates/localhost.key', 'utf8');
  const certificate = fs.readFileSync('./certificates/localhost.crt', 'utf8');
  const credentials = { key: privateKey, cert: certificate };
  const httpServer = https.createServer(credentials, app);
  httpServer.listen(PORT, () => {
    console.log(`Server running at: https://localhost:${PORT}`);
  });
}

export default app;
export const handler = !isLocalDev ? serverless(app) : undefined;