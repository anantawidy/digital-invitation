import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import wishesApi from './api/wishes';

async function createServer() {
  const app = express();

  // Middleware to parse JSON bodies
  app.use(express.json());

  // Your API routes
  app.use('/api/wishes', wishesApi);

  // Vite dev middleware
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);

  // Serve SPA fallback
  app.use('*', (req, res, next) => {
    if (req.originalUrl.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.resolve(__dirname, 'index.html'));
  });

  const port = process.env.PORT || 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

createServer();
