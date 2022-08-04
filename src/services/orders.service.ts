import Model from '../models/orders.model';
import connection from '../models/connection';

class OrdersService {
  public model: Model;

  constructor() {
    this.model = new Model(connection);
  }

  public getOrder() {
    return this.model.getOrder();
  }
}

export default OrdersService;
