import React, { useEffect } from 'react';
import { useCommerce } from '@chec/react-commercejs-hooks';

function ProductList() {
    const { commerce } = useCommerce();
    const [products, setProducts] = useState();

  useEffect(() => {
    if (!commerce) {
      return;
    }

    commerce.products.list().then(products => {
        console.log('products', products)
      setProducts(products);
    })
  }, [commerce]);
    return (
        <div>
            xxx
        </div>
    )
}

export default ProductList
