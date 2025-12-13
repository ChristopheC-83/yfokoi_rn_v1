import { create } from "zustand";
import { v4 as uuid } from "uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useListStore = create((set) => ({
  lists: [],
  currentListId: null,
  editingListId: null,

  // 🔹 Chargement depuis AsyncStorage au démarrage
  loadLists: async () => {
    try {
      const saved = await AsyncStorage.getItem("lists");
      if (saved) set({ lists: JSON.parse(saved) });
    } catch (err) {
      console.error("Error loading lists from storage:", err);
    }
  },

  setCurrentList: (id) => set({ currentListId: id }),
  setEditingListId: (id) => set({ editingListId: id }),

  addList: async (name) => {
    const newList = { id: uuid(), name };
    set((state) => {
      const updated = [...state.lists, newList];
      AsyncStorage.setItem("lists", JSON.stringify(updated));
      return { lists: updated };
    });
  },

  updateList: async (id, name) => {
    set((state) => {
      const updated = state.lists.map((l) =>
        l.id === id ? { ...l, name } : l
      );
      AsyncStorage.setItem("lists", JSON.stringify(updated));
      return { lists: updated };
    });
  },

  deleteList: async (id) => {
    set((state) => {
      const updatedLists = state.lists.filter((l) => l.id !== id);
      const newEditingListId =
        state.editingListId === id ? null : state.editingListId;

      // Persistance
      AsyncStorage.setItem("lists", JSON.stringify(updatedLists));

      return { lists: updatedLists, editingListId: newEditingListId };
    });
  },
}));
