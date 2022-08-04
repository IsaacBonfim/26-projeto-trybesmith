import { Request, Response } from 'express';
import Service from '../services/orders.service';

class OrderController {
  constructor(private oService = new Service()) { }

  public getOrder = async (_req: Request, res: Response) => {
    const orders = await this.oService.getOrder();

    res.status(200).json(orders);
  };
}

export default OrderController;
