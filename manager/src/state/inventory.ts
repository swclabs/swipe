// import { ProductService } from '@/services/products';
// import { Categories, Category, Product, Products, Supplier, Suppliers } from '@/types/products'
import { InventoryStockSchema, StockItem } from '@/types/inventory';
import { create } from 'zustand'
import { InventoryService } from '@/services/inventory';

interface UseInventory {
    inventory: InventoryStockSchema | null;
    fetchInventory: () => Promise<void>;
}

export const useInventory = create<UseInventory>()((set): UseInventory => ({
    inventory: null,
    fetchInventory: async () => {
        const inventoryRes = await InventoryService.GetInventoryStock(1, 10)
        return set((state) => {
            return {
                inventory: inventoryRes ? inventoryRes.data : null
            }
        })
    }
}))