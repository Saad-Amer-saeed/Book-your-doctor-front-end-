import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

function TimerButton({
  title,
  onPress,
  color,
  fontSize,
  paddingVertical,
  paddingHorizontal,
  fontWeight,
  borderRadius,
  textColor,
  borderColor,
  borderWidth,
}) {
  const buttonInnerContainerStyle = {
    backgroundColor: color,
    paddingVertical: paddingVertical,
    borderRadius: borderRadius,
    borderColor: borderColor,
    borderWidth: borderWidth,
  };

  const buttonTextStyle = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: textColor,
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [buttonInnerContainerStyle, styles.pressed]
            : buttonInnerContainerStyle
        }
        onPress={onPress}
      >
        <View style={styles.buttonContentContainer}>
          <Text style={[styles.buttonText, buttonTextStyle]}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default TimerButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    flex: 1,
    margin: 4,
    overflow: "hidden",
  },
  buttonContentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    flex: 1,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
