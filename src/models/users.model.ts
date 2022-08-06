import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
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

  public async login(user: Users): Promise<Users> {
    const { username, password } = user;
    
    const [[loginUser]] = await this.connection.query<RowDataPacket[]>(
      `SELECT id, username FROM Trybesmith.Users
       WHERE username = ? AND password = ?`,
      [username, password],
    );

    return loginUser as Users;
  }
}

export default UserModel;
