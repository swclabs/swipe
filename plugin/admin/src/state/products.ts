import { ProductService } from '@/services/products';
import { Categories, Category, Product, Products, Supplier, Suppliers } from '@/types/products'
import { create } from 'zustand'

interface UseSuppliers {
    supplier: Supplier[];
    fetchSupplier: () => Promise<void>;
}


export const useSuppliers = create<UseSuppliers>()((set): UseSuppliers => ({
    supplier: [],
    fetchSupplier: async () => {
        const suppliers = await ProductService.GetSuppliers(10)
        return set((state) => {
            return {
                supplier: suppliers ? suppliers.data.data : []
            }
        })
    }
}))


interface UseCategory {
    category: Category[];
    fetchCategory: () => Promise<void>;
}


export const useCategories = create<UseCategory>()((set): UseCategory => ({
    category: [],
    fetchCategory: async () => {
        const category = await ProductService.GetCategory(10)
        return set((state) => {
            return {
                category: category ? category.data.data : []
            }
        })
    }
}))


interface UseProduct {
    product: Products | null;
    fetchProduct: () => Promise<void>;
}

export const useProduct = create<UseProduct>()((set): UseProduct => ({
    product: null,
    fetchProduct: async () => {
        const productRes = await ProductService.GetProduct(10)
        return set((state) => {
            return {
                product: productRes ? productRes.data : null
            }
        })
    }
}))