import Model from '../models/users.model';
import connection from '../models/connection';
import RequiredError from '../errors/requiredError';
import AuthorizationError from '../errors/authorizationError';
import Users from '../interfaces/users.interface';

class Login {
  public model: Model;

  constructor() {
    this.model = new Model(connection);
  }
  
  public async validateLogin(user: string, password: string): Promise<Users> {
    if (!user) {
      throw new RequiredError('"username" is required');
    } else if (!password) {
      throw new RequiredError('"password" is required');
    }
    
    const login = await this.model.login({ username: user, password });
    console.log(login);
    
    if (!login) {
      throw new AuthorizationError('Username or password invalid');
    }

    return login;
  }
}

export default Login;
