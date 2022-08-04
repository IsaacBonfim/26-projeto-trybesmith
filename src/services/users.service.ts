import Model from '../models/users.model';
import Users from '../interfaces/users.interface';
import connection from '../models/connection';

class UserService {
  public model: Model;

  constructor() {
    this.model = new Model(connection);
  }

  public create(user: Users): Promise<Users> {
    return this.model.create(user);
  }
}

export default UserService;
