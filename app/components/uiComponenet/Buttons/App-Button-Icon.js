import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import EcoIcon from "../EcoIcon";
function AppButtonIcon({
  title,
  onPress,
  color,
  fontSize,
  paddingVertical,
  paddingHorizontal,
  fontWeight,
  borderRadius,
  textColor,
  iconName,
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
        <View style={styles.textContainer}>
          <EcoIcon name={iconName} size={24} color="white" />
          <Text style={[styles.buttonText, buttonTextStyle]}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default AppButtonIcon;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    alignSelf: "stretch",
    margin: 4,
    overflow: "hidden",
  },
  buttonText: {
    flex: 1,
    textAlign: "right",
  },
  pressed: {
    opacity: 0.5,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingRight: 60,
  },
});
