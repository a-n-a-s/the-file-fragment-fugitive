const AuthService = require('./auth');

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];
  const authService = new AuthService();
  
  // Token validation logic here
  req.user = { id: 'user-123', token };
  next();
}

module.exports = authMiddleware;
