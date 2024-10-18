/* eslint-disable @typescript-eslint/no-explicit-any */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import { Product } from '../../types';
import Loader from '../Loader/Loader';

type Props = {
  productDetail: Product | null;
  isLoadingDetail: boolean;
};

const ProductImages: React.FC<Props> = ({ productDetail, isLoadingDetail }) => {
  const [indexImage, setIndexImage] = useState<number>(0);
  const [refSlick, setRefSlick] = useState<any>(null);
  const [currentSlickIndex, setCurrentSlickIndex] = useState<number>(0);
  const [currentSlideToShow, setCurrentSlideToShow] = useState<number>(0);

  const onClickAssets = (key: number) => {
    setIndexImage(key);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow:
      productDetail && productDetail?.images?.length > 4
        ? 4
        : productDetail?.images?.length,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    beforeChange: (next: number) => {
      setCurrentSlickIndex(next);
    },
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const next = () => {
    refSlick.slickNext();
  };

  const previous = () => {
    refSlick.slickPrev();
  };
  if (isLoadingDetail) {
    return (
      <div className="flex flex-col items-center lg:ml-4 xl:ml-0 lg:w-[432px] xl:w-[432px] w-full relative">
        <div className="flex flex-col items-center justify-center w-[100%] h-[320px] sm:h-[432px] sm:w-[432px]">
          <span className="text-paletteText-placeholder">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center md:top-auto w-full">
      <div className="h-full w-full relative overflow-hidden bg-white">
        <img
          src={productDetail?.images[indexImage]}
          style={{
            objectFit: 'contain',
            width: '432px',
            height: '432px',
          }}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col w-full relative pt-[16px] pb-4 md:pb-6">
        <Slider
          className={`product-detail-slick-item relative px-4 lg:px-0 ${
            productDetail && productDetail?.images?.length > 4
              ? 'left-item'
              : ''
          }`}
          ref={(c: any) => setRefSlick(c)}
          onReInit={() => {
            if (
              currentSlideToShow !== refSlick?.innerSlider?.props?.slidesToShow
            ) {
              setCurrentSlideToShow(refSlick?.innerSlider?.props?.slidesToShow);
            }
          }}
          afterChange={(index: number) => {
            setCurrentSlickIndex(index);
          }}
          initialSlide={0}
          {...settings}
        >
          {productDetail && productDetail?.images?.length === 0
            ? [1, 2, 3, 4]?.map((_: any, index: number) => (
                <div key={`loading-${index}`}>
                  <Loader className={'h-14 w-14 relative rounded-md'} />
                </div>
              ))
            : productDetail?.images?.map((val: any, key: number) => (
                <div
                  key={`image-${key}`}
                  className={`flex items-center justify-center overflow-hidden cursor-pointer rounded-md border-2 hover:opacity-80 ${
                    indexImage === key ? ' border-slate-400' : ' border-white'
                  }`}
                  onClick={() => onClickAssets(key)}
                >
                  <div className="flex items-center justify-center relative w-24 h-24 overflow-hidden text-sm bg-white">
                    {val && (
                      <div
                        className="h-full flex items-center justify-center relative"
                        style={{
                          width: '175px',
                        }}
                      >
                        <img
                          className="w-full h-full"
                          src={val}
                          style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                          }}
                          loading="lazy"
                          alt={productDetail?.title}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
        </Slider>
        {!isLoadingDetail && currentSlickIndex > 0 && (
          <span
            className="absolute top-[50px] left-1 cursor-pointer z-[2]"
            onClick={previous}
          >
            <div className="flex justify-center items-center bg-white p-1 rounded-full shadow-md border border-gray-200 hover:border-gray-300">
              <FaChevronLeft className="text-paletteText-inactive" />
            </div>
          </span>
        )}
        {!isLoadingDetail &&
          productDetail &&
          productDetail?.images?.length - currentSlideToShow !==
            currentSlickIndex && (
            <span
              className="absolute top-[50px] right-1 cursor-pointer z-[2]"
              onClick={next}
            >
              <div className="flex justify-center items-center bg-white p-1 rounded-full shadow-md border border-gray-200 hover:border-gray-300">
                <FaChevronRight className="text-paletteText-inactive" />
              </div>
            </span>
          )}
      </div>
    </div>
  );
};

export default ProductImages;
