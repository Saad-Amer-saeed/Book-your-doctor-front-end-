import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

function AppButton({
  title,
  onPress,
  color,
  fontSize,
  paddingVertical,
  paddingHorizontal,
  fontWeight,
  borderRadius,
  textColor,
}) {
  const buttonInnerContainerStyle = {
    backgroundColor: color,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
    borderRadius: borderRadius,
  };

  const buttonTextStyle = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: textColor,
  };

  return (
    <View
      style={[
        styles.buttonOuterContainer,
        { paddingHorizontal: paddingHorizontal },
      ]}
    >
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [buttonInnerContainerStyle, styles.pressed]
            : buttonInnerContainerStyle
        }
        onPress={onPress}
      >
        <Text style={[styles.buttonText, buttonTextStyle]}>{title}</Text>
      </Pressable>
    </View>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    alignSelf: "stretch",
    margin: 4,
    overflow: "hidden",
  },
  buttonText: {
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
