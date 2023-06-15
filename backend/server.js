import express from 'express';

import {HOST, PORT} from './config.js';
import indexRouter from './routes/index.routes.js';
import tasksRouter from './routes/tasks.routes.js';

const app = express();

app.use(express.json());

app.use(indexRouter);
app.use(tasksRouter);

app.listen(PORT, () => console.log(`Server running on http://${HOST}:${PORT}`));