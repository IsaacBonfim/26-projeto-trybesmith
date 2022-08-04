import { Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import Service from '../services/users.service';

class UserController {
  constructor(private uService = new Service()) { }

  public create = async (req: Request, res: Response) => {
    const { username } = await this.uService.create(req.body);
    
    const secret = 'TheGreatMrOliv3ira';
    
    const token = JWT.sign({ data: username }, secret);

    res.status(201).json({ token });
  };
}

export default UserController;
