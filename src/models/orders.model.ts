import { Pool } from 'mysql2/promise';
import Orders from '../interfaces/order.interface';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getOrder(): Promise<Orders[]> {
    const [rows] = await this.connection.query(
      `SELECT 
        o.id,
        o.userId,
        JSON_ARRAYAGG(p.id) AS productsIds
      FROM 
        Trybesmith.Products AS p
            INNER JOIN
        Trybesmith.Orders AS o ON o.id = p.orderId
      GROUP BY o.id
      ORDER BY o.userId`,
    );

    return rows as Orders[];
  }
}

export default OrderModel;
