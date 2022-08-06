import Model from '../models/products.model';
import Products from '../interfaces/products.interface';
import connection from '../models/connection';
import validation from '../middleware/validations.middleware';

class ProductService {
  public model: Model;

  constructor() {
    this.model = new Model(connection);
  }

  public create(products: Products): Promise<Products> {
    validation.nameValidation(products.name);
    validation.amountValidation(products.amount);

    return this.model.create(products);
  }

  public getAll() {
    return this.model.getAll();
  }
}

export default ProductService;
