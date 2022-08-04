import { Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import Service from '../services/login.service';

class Login {
  constructor(private lService = new Service()) { }

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    
    const login = await this.lService.validateLogin(username, password);

    const secret = 'TheGreatMrOliv3ira';

    const token = JWT.sign({ data: login }, secret);

    res.status(200).json({ token });
  };
}

export default Login;
