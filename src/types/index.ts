export type CommonListResponse = {
  limit: number;
  skip: number;
  total: number;
};

export type Product = {
  id: number;
  name: string;
  thumbnail: string;
  images: string[];
  title: string;
  description: string;
  brand: string;
  sku: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  availabilityStatus: string;
  reviews: string[];
};

export type ProductListResponse = CommonListResponse & {
  products: Product[];
};

export type StoreProduct = CommonListResponse & {
  products: Product[] | null;
  productDetail: Product | null;
  isLoading: boolean;
  isLoadingDetail: boolean;
  error: string | null;
  errorDetail: string | null;
  fetchProducts: (search?: string) => Promise<void>;
  fetchProductById: (id: number) => Promise<void>;
};
