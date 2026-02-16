const crypto = require('crypto');

class AuthService {
  constructor(secretKey) {
    this.secretKey = secretKey || 'default-secret';
  }

  hashPassword(password) {
    return crypto
      .createHash('sha256')
      .update(password + this.secretKey)
      .digest('hex');
  }

  verifyPassword(password, hash) {
    return this.hashPassword(password) === hash;
  }

  generateToken(userId) {
    return crypto
      .createHmac('sha256', this.secretKey)
      .update(userId + Date.now())
      .digest('hex');
  }
}

module.exports = AuthService;
