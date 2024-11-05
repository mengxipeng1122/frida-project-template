import express from 'express';
import path from 'path';
import { build } from 'esbuild';
import chokidar from 'chokidar';
import { apiRouter } from './api';

const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));
app.use('/dist', express.static('dist')); // Serve compiled JS files

// API routes
app.use('/api', apiRouter);

// Setup esbuild for TypeScript compilation
const setupEsbuild = async () => {
  // Watch for TypeScript file changes
  chokidar.watch('src/**/*.ts').on('change', async () => {
    try {
      await Promise.all([
        buildServer(),
        buildClient()
      ]);
      console.log('TypeScript files recompiled');
    } catch (error) {
      console.error('Build error:', error);
    }
  });

  // Initial build
  await Promise.all([
    buildServer(),
    buildClient()
  ]);
};

const buildServer = () => {
  return build({
    entryPoints: ['src/server.ts'],
    bundle: true,
    platform: 'node',
    outdir: 'dist',
    sourcemap: true,
    format: 'cjs',
  });
};

const buildClient = () => {
  return build({
    entryPoints: ['src/client.ts', 'src/about.ts'],
    bundle: true,
    platform: 'browser',
    outdir: 'dist',
    sourcemap: true,
    format: 'esm',
  });
};

// Start the server
setupEsbuild().then(() => {
  app.listen(port, () => {
    console.log(`Dev server running at http://localhost:${port}`);
  });
}); 