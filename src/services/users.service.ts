import Model from '../models/users.model';
import Users from '../interfaces/users.interface';
import connection from '../models/connection';
import validation from '../middleware/validations.middleware';

class UserService {
  public model: Model;

  constructor() {
    this.model = new Model(connection);
  }

  public create(user: Users): Promise<Users> {
    const { username, classe, level, password } = user;

    validation.userValidation(username);
    validation.classeValidation(classe);
    validation.levelValidation(level);
    validation.passwordValidation(password);

    return this.model.create(user);
  }
}

export default UserService;
