import express from 'express';
import * as path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../../dist')));

app.get('/api/hello', (req: any, res: any) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});