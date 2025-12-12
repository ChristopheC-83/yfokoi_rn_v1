import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { supabase } from "../lib/supabase"; // ✅ important

export const useUserStore = create((set) => ({
  user: null, // { id, name, icon }

  loadUser: async () => {
    const raw = await AsyncStorage.getItem("user");
    if (raw) set({ user: JSON.parse(raw) });
  },

  createUser: async (name, icon) => {
    const id = uuid();
    const newUser = { id, name, icon };

    // 1️⃣ Stockage local
    await AsyncStorage.setItem("user", JSON.stringify(newUser));
    set({ user: newUser });

    // 2️⃣ Stockage Supabase
    const { error } = await supabase.from("users").insert([newUser]);
    if (error) console.error("Supabase insert error:", error);
    },
  
  updateUser: async (id, updates) => {
    if (!id) return;

    // 1️⃣ Stockage Supabase
    const { error } = await supabase.from("users").update(updates).eq("id", id);
    if (error) {
      console.error("Supabase update error:", error.message);
      return;
    }

    // 2️⃣ Stockage local et mise à jour du store
    set((state) => {
      const newUser = { ...state.user, ...updates };
      if (updates.name) AsyncStorage.setItem("user_name", updates.name);
      if (updates.icon) AsyncStorage.setItem("user_icon", updates.icon);
      return { user: newUser };
    });
  },

  clearUser: async (id) => {
    await AsyncStorage.removeItem("user");
    set({ user: null });
    //    suppression de supabase
    const { error } = await supabase.from("users").delete().eq("id", id);
    if (error) console.error("Supabase delete error:", error);
  },
}));
