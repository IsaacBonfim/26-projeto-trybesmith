class RequiredError extends Error {
  code: number;
  
  constructor(message: string) {
    super(message);

    this.name = 'RequiredError';
    this.code = 400;
  }
}

export default RequiredError;
