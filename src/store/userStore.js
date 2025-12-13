import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { supabase } from "../lib/supabase";

export const useUserStore = create((set, get) => ({
  user: null, // { id, name, icon }

  // 🔹 Création du user lors de la première ouverture
  createUser: async (name, icon) => {
    try {
      const id = uuid();
      const newUser = { id, name, icon };

      // 1️⃣ Stockage local
      await AsyncStorage.setItem("user", JSON.stringify(newUser));
      set({ user: newUser });

      // 2️⃣ Stockage Supabase
      const { error } = await supabase.from("users").insert([newUser]);
      if (error) throw error;

      return { ok: true };
    } catch (err) {
      console.error("createUser failed:", err);
      return { ok: false, error: err };
    }
  },

  // 🔹 Mise à jour
  updateUser: async (id, updates) => {
    if (!id) return { ok: false };
    try {
      // 1️⃣ Supabase
      const { error } = await supabase
        .from("users")
        .update(updates)
        .eq("id", id);
      if (error) throw error;

      // 2️⃣ Mise à jour locale
      const newUser = { ...get().user, ...updates };
      await AsyncStorage.setItem("user", JSON.stringify(newUser));

      // 3️⃣ Mise à jour du store
      set({ user: newUser });

      return { ok: true };
    } catch (err) {
      console.error("updateUser failed:", err);
      return { ok: false, error: err };
    }
  },

  // 🔹 Suppression
  clearUser: async (id) => {
    if (!id) return { ok: false };
    try {
      // 1️⃣ Suppression locale
      await AsyncStorage.removeItem("user");
      set({ user: null });

      // 2️⃣ Suppression Supabase
      const { error } = await supabase.from("users").delete().eq("id", id);
      if (error) throw error;

      return { ok: true };
    } catch (err) {
      console.error("clearUser failed:", err);
      return { ok: false, error: err };
    }
  },

  // 🔹 Chargement initial
  loadUser: async () => {
    try {
      const data = await AsyncStorage.getItem("user");
      if (data) set({ user: JSON.parse(data) });
    } catch (err) {
      console.error("loadUser failed:", err);
    }
  },
}));
