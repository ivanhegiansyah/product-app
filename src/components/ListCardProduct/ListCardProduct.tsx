import { Product } from '../../types';
import CardProduct from '../CardProduct/CardProduct';

type Props = {
  data: Product[] | null;
};

const ListCardProduct: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-[16px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {data &&
        data?.length > 0 &&
        data?.map((item, idx) => (
          <CardProduct
            key={idx}
            id={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            availabilityStatus={item.availabilityStatus}
            price={item.price}
            discountPercentage={item.discountPercentage}
            rating={item.rating}
            category={item.category}
            stock={item.stock}
          />
        ))}
    </div>
  );
};

export default ListCardProduct;
