import { laptop } from '@/faker/mac-detail';
import { Connection, ProductDetail, Storage } from './../types/products';
import { create } from 'zustand'


interface ProductStoreWith<T> {
    color: number;
    version: number;
    details: ProductDetail<T>[];
    specs: T;
    setColor: (color: number) => void;
    setVersion: (version: number) => void;
    setDetails: (details: ProductDetail<T>[]) => void;
    setSpecs: (specs: T) => void;
}

export const useProductWithSpecs = create<ProductStoreWith<Storage>>((set) => ({
    version: -1,
    color: -1,
    details: [],
    specs: {} as Storage,
    setColor: (color: number) => set({ color }),
    setVersion: (version: number) => set({ version }),
    setDetails: (details: ProductDetail<Storage>[]) => set({ details: details }),
    setSpecs: (specs: Storage) => set({ specs }),
}))

export const useProducWithConnection = create<ProductStoreWith<Connection>>((set) => ({
    version: -1,
    color: -1,
    details: [],
    specs: {} as Connection,
    setColor: (color: number) => set({ color }),
    setVersion: (version: number) => set({ version }),
    setDetails: (details: ProductDetail<Connection>[]) => set({ details: details }),
    setSpecs: (specs: Connection) => set({ specs }),
}))
