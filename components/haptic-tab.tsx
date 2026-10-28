import React from "react";
import { Platform, Pressable, StyleProp, ViewStyle } from "react-native";

type HapticTabProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  onLongPress?: () => void;
};

export function HapticTab({
  children,
  style,
  onPress,
  onLongPress,
}: HapticTabProps) {
  return (
    <Pressable
      style={style}
      onPress={onPress}
      onLongPress={onLongPress}
      android_ripple={
        Platform.OS === "android" ? { color: "rgba(0,0,0,0.08)" } : undefined
      }
    >
      {children}
    </Pressable>
  );
}
