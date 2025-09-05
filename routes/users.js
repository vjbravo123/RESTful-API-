// Routes:
// GET    /users         - Fetch all users
// GET    /users/:id     - Fetch a user by ID
// POST   /user          - Create a new user
// PUT    /user/:id      - Update an existing user (requires all fields)
// DELETE /user/:id      - Delete a user by ID

import express from 'express';
import { validateUser } from '../middleware/validateUser.js';

const router = express.Router();

// In‑memory data source
let users = [
  { id: '1', firstName: 'Anshika', lastName: 'Agarwal', hobby: 'Teaching' },
  { id: '2', firstName: 'Ravi', lastName: 'Kumar', hobby: 'Cricket' },
  { id: '3', firstName: 'Vivek', lastName: 'Joshi', hobby: 'Student' }
];

// ind user index by id
function findUserIndex(id) {
  return users.findIndex(u => u.id === id);
}

// GET /users - list all users
router.get('/users', (req, res) => {
  res.status(200).json({ data: users });
});

// GET /users/:id - get user by id
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(200).json({ data: user });
});

// POST /user - create user
router.post('/user', validateUser, (req, res) => {
  const { firstName, lastName, hobby } = req.body;

  // Simple id generator: max + 1 as string
  const nextId = (users.reduce((max, u) => Math.max(max, Number(u.id)), 0) + 1).toString();
  const newUser = { id: nextId, firstName, lastName, hobby };
  users.push(newUser);
  res.status(201).json({ message: 'User created', data: newUser });
});

// PUT /user/:id - update user 
router.put('/user/:id', validateUser, (req, res) => {
  const { id } = req.params;
  const idx = findUserIndex(id);
  if (idx === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const { firstName, lastName, hobby } = req.body;
  users[idx] = { id, firstName, lastName, hobby };
  res.status(200).json({ message: 'User updated', data: users[idx] });
});

// DELETE /user/:id - delete user
router.delete('/user/:id', (req, res) => {
  const { id } = req.params;
  const idx = findUserIndex(id);
  if (idx === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  const removed = users.splice(idx, 1)[0];
  res.status(200).json({ message: 'User deleted', data: removed });
});

export default router;
