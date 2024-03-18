import { Exception } from './Exception';

class ValidationException extends Exception {
  code = 'VALIDATION_EXCEPTION';
}

class InternalException extends Exception {
  code = 'INTERNAL_EXCEPTION';
  constructor(error: Error) {
    super('Erro interno', error);
  }
}

class NotFoundException extends Exception {
  code = 'NOT_FOUND_EXCEPTION';
}

class UnauthorizedException extends Exception {
  code = 'UNAUTHORIZED_EXCEPTION';
}

export {
  ValidationException,
  InternalException,
  NotFoundException,
  UnauthorizedException,
};
