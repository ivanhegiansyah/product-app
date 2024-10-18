import { useSearchParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { useEffect } from 'react';
import { useProductStore } from '../../stores';
import ListCardProduct from '../../components/ListCardProduct/ListCardProduct';

const Search = () => {
  const [searchParams] = useSearchParams();
  const { fetchProducts, products } = useProductStore();

  const q = searchParams.get('q');

  useEffect(() => {
    if (q) {
      fetchProducts(q);
      console.log(products);
    }
  }, [q]);
  return (
    <>
      <Layout>
        <div className="py-10">
          {products && products.length > 0 ? (
            <ListCardProduct data={products} />
          ) : (
            <h4 className="mx-auto text-center text-xl">No Products Found</h4>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Search;
