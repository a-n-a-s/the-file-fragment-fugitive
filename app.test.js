const AuthService = require('./auth');
const ApiController = require('./controller');

describe('Application Tests', () => {
  test('AuthService should hash passwords', () => {
    const auth = new AuthService('test-secret');
    const hash = auth.hashPassword('password123');
    expect(hash).toHaveLength(64);
  });

  test('AuthService should verify passwords', () => {
    const auth = new AuthService('test-secret');
    const hash = auth.hashPassword('password123');
    expect(auth.verifyPassword('password123', hash)).toBe(true);
    expect(auth.verifyPassword('wrong-password', hash)).toBe(false);
  });

  test('ApiController should return version', () => {
    const controller = new ApiController();
    expect(controller.getVersion()).toBe('1.0.0');
  });
});
