class ValidationError extends Error {
  code: number;

  constructor(message: string) {
    super(message);

    this.name = 'ValidationError';
    this.code = 422;
  }
}

export default ValidationError;
