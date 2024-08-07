import { laptop } from '@/faker/mac-detail';
import { ProductDetail } from './../types/products';
import { create } from 'zustand'

// const useStore = create((set) => ({
//     count: 1,
//     inc: () => set((state: { count: number }) => ({ count: state.count + 1 })),
// }))

interface ProductStore {
    color: number;
    version: number;
    details: ProductDetail[];
    specs: {
        ram: string;
        ssd: string;
    }
    setColor: (color: number) => void;
    setVersion: (version: number) => void;
    setDetails: (details: ProductDetail[]) => void;
    setSpecs: (specs: { ram: string; ssd: string }) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
    version: -1,
    color: -1,
    details: [],
    specs: {
        ram: "",
        ssd: "",
    },
    setColor: (color: number) => set({ color }),
    setVersion: (version: number) => set({ version }),
    setDetails: (details: ProductDetail[]) => set({ details: details }),
    setSpecs: (specs: { ram: string; ssd: string }) => set({ specs }),
}))

