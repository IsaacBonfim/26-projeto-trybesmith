import { Request, Response } from 'express';
import Service from '../services/products.service';

class ProductController {
  constructor(private pService = new Service()) { }

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const newProduct = await this.pService.create(product);

    res.status(201).json(newProduct);
  };

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.pService.getAll();

    res.status(200).json(products);
  };
}

export default ProductController;
