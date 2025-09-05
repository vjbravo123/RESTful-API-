// Logs method, URL, and response status code for each request.

export function requestLogger(req, res, next) {
  res.on('finish', () => {
    console.log(` ${req.method} ${req.originalUrl} -> ${res.statusCode} `);
  });
  next();
}
