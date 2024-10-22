import { ProductDetail, ProductType, Specification } from '../types/products';
import { create } from 'zustand'
import { ProductService } from '@/service/products';


interface Products {
    color: number;
    details: ProductDetail | undefined;
    specs: Specification;
    fetchProduct: (id: number) => Promise<void>;
    setColor: (color: number) => void;
    setDetails: (details: ProductDetail) => void;
    setSpecs: (specs: Specification) => void;
}

export const useProducts = create<Products>()((set): Products => ({
    color: -1,
    details: undefined,
    specs: {} as Specification,
    setColor: (color: number) => set({ color }),
    setDetails: (details: ProductDetail) => set({ details: details }),
    setSpecs: (specs: Specification) => set({ specs }),
    fetchProduct: async (id: number) => {
        try {
            const resp = await ProductService.getProductDetails(id);
            return set((state) => {
                return {
                    details: resp ? resp.data : undefined
                }
            })
        }
        catch (e) {
            return
        }
    }
}))

interface ProductsInStore {
    product: ProductType[];
    fetchProduct: (name: string) => Promise<void>;
    setProduct: (body: ProductType[]) => void;
}

export const useProductsInStore = create<ProductsInStore>()((set): ProductsInStore => ({
    product: [],
    setProduct: (body: ProductType[]) => set({ product: body }),
    fetchProduct: async (name: string) => {
        try {
            const resp = await ProductService.getProductByType(name);
            return set((state) => {
                return {
                    product: resp ? resp.data : []
                }
            })
        }
        catch (e) {
            return
        }
    }
}))