import { create } from "zustand";

export const useToastStore = create((set, get) => ({
  toasts: [],

  showToast: (text, type = "info", duration = 1500) => {
  const id = Date.now();
  set({
    toasts: [...get().toasts, { id, text, type, duration }],
  })


    // Auto-hide
    setTimeout(() => {
      get().hideToast(id);
    }, duration);
  },

  hideToast: (id) => {
    set({ toasts: get().toasts.filter((t) => t.id !== id) });
  },
}));
