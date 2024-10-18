import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type Props = {
  id: number;
  title: string;
  thumbnail: string;
  availabilityStatus: string;
  price: number;
  discountPercentage: number;
  rating: number;
  category: string;
  stock: number;
};

const CardProduct: React.FC<Props> = ({
  id,
  title,
  thumbnail,
  availabilityStatus,
  price,
  discountPercentage,
  rating,
  category,
  stock,
}) => {
  return (
    <div
      title={title}
      className="flex flex-col justify-start h-full w-[175px] rounded-lg overflow-hidden bg-white font-ubuntu border border-[#DEE3ED] shadow-[1px_1px_5px_0_rgba(0,0,0,0.1)]"
    >
      <Link to={`/product/${id}`} key={id}>
        <div className="flex flex-col items-center justify-between w-full h-full cursor-pointer">
          <div
            className={`flex-none w-[175px] h-[150px] mb-2 relative aspect-w-1 aspect-h-1 overflow-hidden xl:aspect-w-7 xl:aspect-h-8 text-sm select-none`}
          >
            <div
              className="h-[150px] flex items-center justify-center relative"
              style={{
                width: '175px',
              }}
            >
              <img
                className="w-full h-full object-cover"
                src={thumbnail}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                loading="lazy"
                alt={title}
              />
            </div>
            {/* availaiblelity */}
            <div className="absolute bottom-0 left-0">
              {category && (
                <span className="text-center p-1 text-[10px] font-medium bg-emerald-600 text-white">
                  {category}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center justify-between w-full h-full select-none">
            <div className="w-full px-2 pb-2 space-y-1">
              <div className="flex flex-col gap-y-1">
                <div
                  className={`${
                    title?.length > 25 ? 'truncate' : ''
                  } font-normal leading-[21px] line-clamp-2 text-[14px] text-wrap`}
                  title={title}
                >
                  {title}
                </div>
                <div className="flex space-x-2">
                  <div className="text-sm font-bold text-wrap">${price}</div>

                  {discountPercentage && (
                    <div
                      className={`bg-red-200 text-[10px] px-1 w-fit rounded-[4px] h-[16px]`}
                    >
                      <span className="font-medium text-red-500">
                        {discountPercentage}%
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {rating > 0 && (
                <div className="flex gap-1 items-center">
                  <FaStar className="text-orange-300" size={14} />
                  <span className="text-xs">{rating}</span>
                </div>
              )}
              <div className="flex justify-start space-x-1">
                {stock > 0 && (
                  <div className="text-xs text-black">
                    <span>Stock: </span>
                    <span>{stock}</span>
                  </div>
                )}
                {availabilityStatus === 'Low Stock' && (
                  <span className="text-center text-[10px] font-medium text-red-600">
                    {availabilityStatus}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProduct;
