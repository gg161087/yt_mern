import express from 'express';

import {HOST, PORT} from './config.js';

const app = express();

app.listen(PORT, () => console.log(`Server running on http://${HOST}:${PORT}`));