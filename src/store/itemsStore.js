import { create } from "zustand";
import { useListStore } from "./listsStore";

export const useItemStore = create((set, get) => ({
  items: [],
  currentItems: () => {
    const id = useListStore.getState().currentListId;
    return get().items.filter((i) => i.listId === id);
  },
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  deleteItem: (id) =>
    set((state) => ({ items: get().items.filter((i) => i.id !== id) })),
}));
