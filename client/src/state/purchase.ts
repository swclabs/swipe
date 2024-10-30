import { PurchaseService } from "@/service/purchase";
import { Carts } from "@/types/purchase";
import { create } from "zustand";

interface Coupon {
  code: string;
  discount: number;
}

interface Cart {
  carts: Carts | undefined;
  coupon: Coupon;
  setCoupon: (coupon: Coupon) => void;
  setCart: (carts: Carts) => void;
  fetchCart: () => Promise<void>;
  addToCart: (inventory_id: number, quantity: number) => Promise<void>;
}

export const useCart = create<Cart>()(
  (set): Cart => ({
    carts: undefined,
    coupon: { code: "", discount: 0 },
    setCoupon: (coupon: Coupon) => set({ coupon }),
    setCart: (carts: Carts) => set({ carts }),
    fetchCart: async () => {
      try {
        const resp = await PurchaseService.getCart();
        return set((state) => {
          return {
            carts: resp ? resp.data : undefined,
            coupon: state.coupon,
          };
        });
      } catch (e) {
        return;
      }
    },
    addToCart: async (inventory_id: number, quantity: number) => {
      try {
        const _ = await PurchaseService.addCart(inventory_id, quantity);
        const resp = await PurchaseService.getCart();
        return set((state) => {
          return {
            carts: resp ? resp.data : undefined,
            coupon: state.coupon,
          };
        });
      } catch (e) {
        return;
      }
    },
  })
);
