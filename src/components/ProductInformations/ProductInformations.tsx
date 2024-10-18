import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { Product } from '../../types';
import Loader from '../Loader/Loader';

type Props = {
  productDetail: Product | null;
  isLoadingDetail: boolean;
};

const ProductInformations: React.FC<Props> = ({
  productDetail,
  isLoadingDetail,
}) => {
  const [seeMore, setSeeMore] = useState<boolean>(false);

  const minTextLimit = 200;

  const TextMore = ({ isMore }: { isMore: boolean }) => (
    <div
      onClick={() => setSeeMore((state: boolean) => !state)}
      className="block font-medium cursor-pointer text-secondary-70 pt-2"
    >
      {isMore ? 'See less' : 'See more'}
    </div>
  );

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 px-4 md:p-4 lg:p-0 divide-y-2 xl:divide-y divide-[#DEE3ED] h-fit w-full">
        <div className="pb-4 px-0 xl:pb-6 pt-4 md:pt-0">
          {isLoadingDetail ? (
            <div className="space-y-1 min-w-[416px]">
              <div className="w-[100px]">
                <Loader className="h-4" />
              </div>
              <div className="w-[120px]">
                <Loader className="h-4" />
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-[150px]">
                  <Loader className="h-4" />
                </div>
                <div className="w-[60px]">
                  <Loader className="h-4" />
                </div>
              </div>
              <div className="w-[120px]">
                <Loader className="h-4" />
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-sm md:text-base font-medium mb-1">
                {productDetail?.title ?? ''}
              </h1>
              <div className="flex gap-x-2 items-center">
                <label className="font-bold text-base md:text-2xl">
                  {productDetail?.price ?? 0}
                </label>
                {productDetail?.discountPercentage && (
                  <div
                    className={`bg-red-200 text-[10px] px-1 w-fit rounded-[4px] h-[16px]`}
                  >
                    <span className="font-medium text-red-500">
                      {productDetail?.discountPercentage}%
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-1 mt-2">
                <div className="text-sm flex-nowrap">
                  Stock {productDetail?.stock}
                </div>
                <div className="text-gray-400">|</div>
                <div className="flex items-center justify-center bg-white rounded-md">
                  <div className="flex-nowrap">
                    <ul className="flex items-center gap-x-1 text-center">
                      <li>
                        <FaStar className="text-orange-300" />
                      </li>
                    </ul>
                  </div>
                  <div className="text-xs flex-nowrap font-medium pl-1">
                    {productDetail?.rating}
                  </div>

                  <div className="text-xs flex-nowrap pl-1 text-gray-500 font-light">
                    ({productDetail?.reviews && productDetail?.reviews?.length}{' '}
                    reviews)
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="space-y-10 pt-4 pb-4 mx-0">
          <div className="space-y-3 px-0">
            {isLoadingDetail ? (
              <>
                <div className="w-[120px]">
                  <Loader className="h-4" />
                </div>
              </>
            ) : (
              <h2 className="font-medium mb-2">Product Information</h2>
            )}
            {isLoadingDetail ? (
              <>
                <Loader className="w-full h-5" />
                <Loader className="w-full h-5" />
                <Loader className="w-full h-5" />
                <Loader className="w-full h-5" />
                <Loader className="w-full h-5" />
              </>
            ) : (
              <table className="border-none text-sm w-full">
                <tbody>
                  <tr>
                    <td className="hidden xl:block w-[35%] py-1.5 align-top pr-4">
                      <div className="text-gray-400 whitespace-nowrap">
                        Category
                      </div>
                    </td>
                    <td className="w-full py-1.5 align-top">
                      <div className="flex space-x-3 font-medium">
                        {productDetail?.category}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="hidden xl:block w-[35%] py-1.5 align-top pr-4">
                      <div className="text-gray-400 whitespace-nowrap">
                        Brand
                      </div>
                    </td>
                    <td className="w-full py-1.5 align-top">
                      <div className="flex space-x-3 font-medium">
                        {productDetail?.brand ?? '-'}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="hidden xl:block w-[35%] py-1.5 align-top pr-4">
                      <div className="text-gray-400 whitespace-nowrap">SKU</div>
                    </td>
                    <td className="w-full py-1.5 align-top">
                      <div className="flex space-x-3 font-medium">
                        {productDetail?.sku ?? '-'}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div className="space-y-10 pt-4 pb-4 mx-0">
          <div className="space-y-3 px-0">
            {isLoadingDetail ? (
              <>
                <div className="w-[120px]">
                  <Loader className="h-4" />
                </div>
              </>
            ) : (
              <h2 className="font-medium mb-2">Description</h2>
            )}
            {isLoadingDetail ? (
              <>
                <div className="w-52">
                  <Loader className="h-5" />
                </div>
                <Loader className="h-5" />
                <Loader className="h-5" />
                <Loader className="h-5" />
              </>
            ) : (
              <div className="w-full">
                {productDetail?.description &&
                productDetail.description.length > minTextLimit ? (
                  seeMore ? (
                    <>
                      <p className="break-words whitespace-pre-line w-full">
                        {productDetail.description}
                      </p>
                      <TextMore isMore={seeMore} />
                    </>
                  ) : (
                    <>
                      <p className="break-words whitespace-pre-line w-full">
                        {productDetail?.description
                          .substring(0, minTextLimit)
                          .concat('...')}
                      </p>
                      <TextMore isMore={seeMore} />
                    </>
                  )
                ) : (
                  <p className="break-words whitespace-pre-line w-full">
                    {productDetail?.description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformations;
