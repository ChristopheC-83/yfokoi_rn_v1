import { create } from "zustand";
import { v4 as uuid } from "uuid";

export const useListStore = create((set) => ({
  lists: [],
  currentListId: null,

  setCurrentList: (id) => set({ currentListId: id }),
  addList: (name) =>
    set((state) => ({
      lists: [
        ...state.lists,
        {
          id: uuid(),
          name
        },
      ],
    })),
  deleteList: (id) =>
    set((state) => ({ lists: state.lists.filter((l) => l.id !== id) })),
}));
