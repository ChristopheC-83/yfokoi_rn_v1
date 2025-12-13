import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuid } from "uuid";
import { useListStore } from "./listsStore";

export const useItemStore = create((set, get) => ({
  items: [],
  editingItemId: null,

  // 🔹 Récupère les items de la liste en cours
  currentItems: () => {
    const listId = useListStore.getState().currentListId;
    return get().items.filter((i) => i.listId === listId);
  },

  // 🔹 Ajoute un item
  addItem: async (name) => {
    const listId = useListStore.getState().currentListId;
    if (!listId) return;

    const newItem = { id: uuid(), listId, name };

    set((state) => {
      const updated = [...state.items, newItem];
      AsyncStorage.setItem("items", JSON.stringify(updated));
      return { items: updated };
    });
  },

  // 🔹 Supprime un item
  deleteItem: async (id) => {
    set((state) => {
      const updated = state.items.filter((i) => i.id !== id);
      AsyncStorage.setItem("items", JSON.stringify(updated));
      // si on supprime l'item en cours d'édition, reset editingItemId
      const editingReset =
        get().editingItemId === id ? null : get().editingItemId;
      return { items: updated, editingItemId: editingReset };
    });
  },

  // 🔹 Met à jour un item
  updateItem: async (id, name) => {
    set((state) => {
      const updated = state.items.map((i) =>
        i.id === id ? { ...i, name } : i
      );
      AsyncStorage.setItem("items", JSON.stringify(updated));
      return { items: updated };
    });
  },

  // 🔹 Gestion de l'édition
  setEditingItemId: (id) => set({ editingItemId: id }),

  // 🔹 Chargement depuis le storage
  loadItems: async () => {
    const stored = await AsyncStorage.getItem("items");
    if (stored) set({ items: JSON.parse(stored) });
  },
}));
