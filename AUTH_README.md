# Authentication Module

This module handles user authentication and authorization.

## Features

- Password hashing with SHA-256
- Token generation and validation
- Session management

## Usage

```javascript
const AuthService = require('./auth');
const auth = new AuthService('my-secret-key');

const hash = auth.hashPassword('user-password');
const valid = auth.verifyPassword('user-password', hash);
```

## TODO

- [ ] Add JWT support
- [ ] Implement OAuth2
- [ ] Add rate limiting
