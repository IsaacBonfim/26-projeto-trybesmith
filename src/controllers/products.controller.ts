import { Request, Response } from 'express';
import Service from '../services/products.service';

class ProductController {
  constructor(private pService = new Service()) { }

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const newProduct = await this.pService.create(product);

    res.status(201).json(newProduct);
  };
}

export default ProductController;
