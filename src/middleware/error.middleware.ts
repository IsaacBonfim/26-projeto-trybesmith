import { Request, Response, NextFunction } from 'express';
import RequiredError from '../errors/requiredError';
import AuthorizationError from '../errors/authorizationError';
import ValidationError from '../errors/validationError';

export default async (
  err: RequiredError | AuthorizationError | ValidationError, 
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { code, message } = err;

  if (code) {
    return res.status(code).json({ message });
  }

  res.status(500).json({ message });
};
