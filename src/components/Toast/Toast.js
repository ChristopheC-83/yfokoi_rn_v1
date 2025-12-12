import { s } from "./Toast.style";
import { View, Text, Animated, StyleSheet, Pressable } from "react-native";
import { useEffect, useRef } from "react";
import { useToastStore } from "../../store/toastStore";

export default function GlobalToast() {
    const { toasts } = useToastStore();
    

  return (
    <View pointerEvents="box-none" style={StyleSheet.absoluteFill}>
      {toasts.map((toast, index) => (
        <ToastItem key={toast.id} toast={toast} index={index} />
      ))}
    </View>
  );
}

function ToastItem({ toast, index }) {
  const translateY = useRef(new Animated.Value(-60)).current;

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: 20 + index * 60, // Empilement
      useNativeDriver: true,
    }).start();
  }, []);

  const hide = useToastStore((state) => state.hideToast);

  return (
    <Animated.View
      style={[
        s.toast,
        {
          backgroundColor: toastColor(toast.type),
          transform: [{ translateY }],
        },
      ]}
    >
      <Pressable onPress={() => hide(toast.id)}>
        <Text style={s.text}>{toast.text}</Text>
      </Pressable>
    </Animated.View>
  );
}

const toastColor = (type) => {
  switch (type) {
    case "success":
      return "#4CAF50";
    case "warning":
      return "#FF9800";
    case "danger":
      return "#F44336";
    case "info":
      return "#2196F3";
    default:
      return "#b2b2b2";
  }
};


