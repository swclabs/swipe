import { PurchaseService } from "@/service/purchase";
import { Carts } from "@/types/purchase";
import { create } from "zustand";

interface Cart {
    carts: Carts | undefined
    setCart: (carts: Carts) => void
    fetchCart: () => Promise<void>
    addToCart: (inventory_id: number, quantity: number) => Promise<void>
}

export const useCart = create<Cart>()((set): Cart => ({
    carts: undefined,
    setCart: (carts: Carts) => set({ carts }),
    fetchCart: async () => {
        try {
            const resp = await PurchaseService.getCart()
            return set((state) => {
                return {
                    carts: resp ? resp.data : undefined
                }
            })
        }
        catch (e) {
            return
        }
    },
    addToCart: async (inventory_id: number, quantity: number) => {
        try {
            const _ = await PurchaseService.addCart(inventory_id, quantity)
            const resp = await PurchaseService.getCart()
            return set((state) => {
                return {
                    carts: resp ? resp.data : undefined
                }
            })
        }
        catch (e) {
            return
        }
    }
}))