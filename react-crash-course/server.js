import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import error from './middleware/error.js';

//get dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;

const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Logger middleware
app.use(logger);

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//routers
app.use('/api/posts', posts);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

//Error handler --> below routes to prevent errors
app.use(error);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
