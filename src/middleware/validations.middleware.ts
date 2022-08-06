import RequiredError from '../errors/requiredError';
import ValidationError from '../errors/validationError';

const nameValidation = (name: string) => {
  if (!name) {
    throw new RequiredError('"name" is required');
  } else if (typeof name !== 'string') {
    throw new ValidationError('"name" must be a string');
  } else if (name.length < 3) {
    throw new ValidationError('"name" length must be at least 3 characters long');
  }
};

const amountValidation = (amount: string) => {
  if (!amount) {
    throw new RequiredError('"amount" is required');
  } else if (typeof amount !== 'string') {
    throw new ValidationError('"amount" must be a string');
  } else if (amount.length < 3) {
    throw new ValidationError('"amount" length must be at least 3 characters long');
  }
};

const userValidation = (user: string) => {
  if (!user) {
    throw new RequiredError('"username" is required');
  } else if (typeof user !== 'string') {
    throw new ValidationError('"username" must be a string');
  } else if (user.length < 3) {
    throw new ValidationError('"username" length must be at least 3 characters long');
  }
};

const classeValidation = (classe: string | undefined) => {
  if (!classe) {
    throw new RequiredError('"classe" is required');
  } else if (typeof classe !== 'string') {
    throw new ValidationError('"classe" must be a string');
  } else if (classe.length < 3) {
    throw new ValidationError('"classe" length must be at least 3 characters long');
  }
};

const levelValidation = (level: number | undefined) => {
  if (!level && level !== 0) {
    throw new RequiredError('"level" is required');
  } else if (typeof level !== 'number') {
    throw new ValidationError('"level" must be a number');
  } else if (level <= 0) {
    throw new ValidationError('"level" must be greater than or equal to 1');
  }
};

const passwordValidation = (password: string | undefined) => {
  if (!password) {
    throw new RequiredError('"password" is required');
  } else if (typeof password !== 'string') {
    throw new ValidationError('"password" must be a string');
  } else if (password.length < 8) {
    throw new ValidationError('"password" length must be at least 8 characters long');
  }
};

export default {
  nameValidation,
  amountValidation,
  userValidation,
  classeValidation,
  levelValidation,
  passwordValidation,
};
