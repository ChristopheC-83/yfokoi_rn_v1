import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

export const useUserStore = create((set) => ({
  user: null, // { id, name, icon }

  // 🔹 Charge depuis AsyncStorage
  loadUser: async () => {
    const id = await AsyncStorage.getItem("user_id");
    const name = await AsyncStorage.getItem("user_name");
    const icon = await AsyncStorage.getItem("user_icon");

    if (id && name) {
      set({ user: { id, name, icon } });
    }
  },

  // 🔹 Création du user lors de la première ouverture
  createUser: async (name, icon) => {
    const id = uuid(); // id unique local pour ton user

    await AsyncStorage.setItem("user_id", id);
    await AsyncStorage.setItem("user_name", name);
    await AsyncStorage.setItem("user_icon", icon);

    set({ user: { id, name, icon } });
  },

  // 🔹 Mise à jour (changement nom ou icone)
  updateUser: async (updates) => {
    set((state) => {
      const newUser = { ...state.user, ...updates };

      // persistance
      if (updates.name) AsyncStorage.setItem("user_name", updates.name);
      if (updates.icon) AsyncStorage.setItem("user_icon", updates.icon);

      return { user: newUser };
    });
  },

  // 🔹 Reset (dev/debug)
  clearUser: async () => {
    await AsyncStorage.multiRemove(["user_id", "user_name", "user_icon"]);
    set({ user: null });
  },
}));
