import { create } from "zustand";
import { Product } from "../types";
import { persist } from "zustand/middleware";

export interface CartItem extends Product {
  //sama seperti dibawah ini karena extends dari Product
  //_id: string;
  //name: string;
  //...
  qty: number;
}

export interface CustomerInfo {
  customerName: string;
  customerContact: string | number | null;
  customerAddress: string;
}

interface CartStore {
  customerInfo: CustomerInfo | null;
  items: CartItem[];
  setCustomerInfo: (info: CustomerInfo) => void;
  addItem: (product: Product, qty?: number) => void;
  removeItem: (productId: string) => void;
  reset: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      customerInfo: null,
      items: [],
      setCustomerInfo: (info) => {
        set({ customerInfo: info });
      },
      addItem: (product, qty = 1) => {
        const items = get().items;
        const existingItem = items.find((item) => item._id === product._id);

        if (existingItem) {
          set({
            items: items.map((item) =>
              item._id === product._id
                ? { ...item, qty: item.qty + qty }
                : item,
            ),
          });
        } else {
          set({ items: [...items, { ...product, qty }] });
        }
      },
      removeItem: (productId) => {
        // items = [a,b,c,d,e]
        // productiId = c
        // items = [a,b,d,e]
        set({ items: get().items.filter((item) => item._id !== productId) });
      },
      reset: () => {
        set({ items: [], customerInfo: null });
      },
    }),
    {
      // opsional: kasih nama key storage biar jelas
      name: "cart-storage",
    },
  ),
);
