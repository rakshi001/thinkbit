import express from 'express';
import { connectDb } from './config/db.js';
import notesRouter from './routes/notesRoutes.js';
const app = express();

app.use(express.json());

connectDb();

app.use('/api/v1/notes', notesRouter);

app.listen(3000, () => {
  console.log('server is running in port 3000');
});
