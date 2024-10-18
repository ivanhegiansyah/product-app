import { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import { useProductStore } from '../../stores';
import { useParams } from 'react-router-dom';
import ProductImages from '../../components/ProductImages/ProductImages';
import ProductInformations from '../../components/ProductInformations/ProductInformations';

const DetailProduct = () => {
  const { fetchProductById, productDetail, isLoadingDetail } =
    useProductStore();
  const { productId } = useParams();

  useEffect(() => {
    fetchProductById(Number(productId));
  }, []);

  return (
    <Layout>
      <div className="py-10">
        <div className='"w-full h-full'>
          <div className="flex flex-col md:flex-row h-full w-full md:space-x-20">
            <div className="h-fit md:sticky md:top-[140px] md:flex-none w-full md:w-[432px]">
              <ProductImages
                productDetail={productDetail}
                isLoadingDetail={isLoadingDetail}
              />
            </div>
            <ProductInformations
              productDetail={productDetail}
              isLoadingDetail={isLoadingDetail}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailProduct;
