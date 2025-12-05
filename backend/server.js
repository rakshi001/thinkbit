import express from 'express';
import router from './routes/notesRoutes.js';
const app = express();

app.use(express.json());

app.use('/api/v1/notes', router);

app.listen(3000, () => {
  console.log('server is running in port 3000');
});
