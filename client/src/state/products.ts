import { laptop } from '@/faker/mac-detail';
import { ProductDetail, ProductType, Specification } from '../types/products';
import { create } from 'zustand'
import { ProductService } from '@/service/products';


interface Products {
    color: number;
    version: number;
    details: ProductDetail[];
    specs: Specification;
    fetch(name: string): () => Promise<void>;
    setColor: (color: number) => void;
    setVersion: (version: number) => void;
    setDetails: (details: ProductDetail[]) => void;
    setSpecs: (specs: Specification) => void;
}

export const useProducts = create<Products>((set) => ({
    version: -1,
    color: -1,
    details: [],
    specs: {} as Specification,
    setColor: (color: number) => set({ color }),
    setVersion: (version: number) => set({ version }),
    setDetails: (details: ProductDetail[]) => set({ details: details }),
    setSpecs: (specs: Specification) => set({ specs }),
    fetch: (name: string) => async () => {
        const resp = await ProductService.searchProductDetails(name);
        if (resp.data != undefined) {
            set({ details: resp.data });
        }
    }
}))

interface ProductsInStore {
    body: ProductType[];
    fetch(name: string): () => Promise<void>;
    setBody: (body: ProductType[]) => void;
}

export const useProductsInStore = create<ProductsInStore>((set) => ({
    body: [],
    setBody: (body: ProductType[]) => set({ body }),
    fetch: (name: string) => async () => {
        const resp = await ProductService.getProductByType(name);
        if (resp.data != undefined) {
            set({ body: resp.data });
        }
    }
}))