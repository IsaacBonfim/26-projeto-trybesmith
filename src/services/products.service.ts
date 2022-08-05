import Model from '../models/products.model';
import Products from '../interfaces/products.interface';
import connection from '../models/connection';
import RequiredError from '../errors/requiredError';

class ProductService {
  public model: Model;

  constructor() {
    this.model = new Model(connection);
  }

  public create(products: Products): Promise<Products> {
    if (!products.name) {
      throw new RequiredError('"name" is required');
    }

    return this.model.create(products);
  }

  public getAll() {
    return this.model.getAll();
  }
}

export default ProductService;
