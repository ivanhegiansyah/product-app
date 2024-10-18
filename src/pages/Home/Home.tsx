import { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import { useProductStore } from '../../stores';
import ListCardProduct from '../../components/ListCardProduct/ListCardProduct';

const Home = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <div className="py-10">
        <ListCardProduct data={products} />
      </div>
    </Layout>
  );
};

export default Home;
