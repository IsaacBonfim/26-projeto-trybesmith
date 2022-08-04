import { Pool, ResultSetHeader } from 'mysql2/promise';
import Users from '../interfaces/users.interface';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: Users): Promise<Users> {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await this.connection.query<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );

    return { id: insertId, ...user };
  }
}

export default UserModel;