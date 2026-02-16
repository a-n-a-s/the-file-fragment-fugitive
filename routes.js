const express = require('express');
const router = express.Router();

// GET /api/users - List all users
router.get('/users', (req, res) => {
  res.json({
    users: [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com' }
    ],
    total: 3,
    page: 1
  });
});

// GET /api/users/:id - Get user by ID
router.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  res.json({
    id: userId,
    name: `User ${userId}`,
    email: `user${userId}@example.com`
  });
});

// POST /api/users - Create new user
router.post('/users', (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({
    id: Date.now(),
    name,
    email,
    created: true
  });
});

module.exports = router;
