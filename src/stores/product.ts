import { create } from 'zustand';

import { StoreProduct, ProductListResponse, Product } from '../types';

const useProductStore = create<StoreProduct>((set) => ({
  limit: 0,
  skip: 0,
  total: 0,
  products: null,
  productDetail: null,
  isLoading: false,
  isLoadingDetail: false,
  error: null,
  errorDetail: null,
  fetchProducts: async (search?: string) => {
    set({ isLoading: true, error: null });
    try {
      const params = new URLSearchParams();
      let searchString = '';
      if (search) {
        searchString = `/search?`;
        params.append('q', search);
      }
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_API}/products${searchString}${params}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data: ProductListResponse = await response.json();
      set({
        products: data?.products,
        limit: data?.limit,
        skip: data?.skip,
        total: data?.total,
        isLoading: false,
        error: null,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
  fetchProductById: async (id: number) => {
    set({ isLoadingDetail: true, errorDetail: null });
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_API}/products/${id}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data: Product = await response.json();
      set({
        productDetail: data,
        isLoadingDetail: false,
        errorDetail: null,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      set({ errorDetail: error.message, isLoadingDetail: false });
    }
  },
}));

export default useProductStore;
