import { addnewProduct, getProducts, getProductWithID, updateProduct, deleteProduct } from '../controllers/controllers';

const routes = app => {
  app.route('/products')
    .post(addnewProduct)
    .get(getProducts);

  app.route('/products/:ProductID')
    .get(getProductWithID)
    .put(updateProduct)
    .delete(deleteProduct);
}

export default routes;
