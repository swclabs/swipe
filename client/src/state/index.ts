import { laptop } from '@/faker/mac-detail';
import { Connection, ProductDetail, Specs } from './../types/products';
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

export const useProductWithSpecs = create<ProductStoreWith<Specs>>((set) => ({
    version: -1,
    color: -1,
    details: [],
    specs: {} as Specs,
    setColor: (color: number) => set({ color }),
    setVersion: (version: number) => set({ version }),
    setDetails: (details: ProductDetail<Specs>[]) => set({ details: details }),
    setSpecs: (specs: Specs) => set({ specs }),
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
