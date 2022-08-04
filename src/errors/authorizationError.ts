class AuthorizationError extends Error {
  code: number;

  constructor(message: string) {
    super(message);

    this.name = 'AuthorizationError';
    this.code = 401;
  }
}

export default AuthorizationError;
