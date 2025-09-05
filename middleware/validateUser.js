// Validates that a user payload contains required fields for POST and PUT.
// Required fields: firstName, lastName, hobby

export function validateUser(req, res, next) {
  const { firstName, lastName, hobby } = req.body || {};
  const missing = [];
  if (!firstName) missing.push('firstName');
  if (!lastName) missing.push('lastName');
  if (!hobby) missing.push('hobby');

  if (missing.length) {
    const err = new Error('Missing required fields: ' + missing.join(', '));
    err.status = 400;
    return next(err);
  }
  next();
}
