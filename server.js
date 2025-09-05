import express from 'express';
import usersRouter from './routes/users.js';
import { requestLogger } from './middleware/logger.js';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

// request logger middleware
app.use(requestLogger);

// routes
app.use('/', usersRouter);

// Not‑found handler for unmatched routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Centralized error handler
// Any 'next(err)' sent from routes lands here
app.use((err, req, res, next) => {
  console.error('[ERROR]', err);
  const status = err.status || 500;
  res.status(status).json({
    error: err.message || 'Internal Server Error'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
