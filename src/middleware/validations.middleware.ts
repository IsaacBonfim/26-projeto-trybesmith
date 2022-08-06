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

export default {
  nameValidation,
  amountValidation,
};
