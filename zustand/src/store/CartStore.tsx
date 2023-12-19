import { create } from "zustand";

type Item = {
  id: number;
  name: string;
  price: number;
};

type CartStore = {
  availableItems: Item[];
  cart: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: number) => void;
};

const initialItems: Item[] = [
  { id: 1, name: "Apple", price: 1.2 },
  { id: 2, name: "Orange", price: 2.3 },
  { id: 3, name: "Banana", price: 3.4 },
];

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    availableItems: initialItems,
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (id) =>
      set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  };
});
