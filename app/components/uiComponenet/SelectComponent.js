import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const SelectComponent = ({ data, name, onValueChange, value, placeholder }) => {
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      // search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      searchPlaceholder="Search..."
      value={value}
      onChange={(item) => {
        onValueChange(item.value);
      }}
      renderLeftIcon={() => (
        <MaterialCommunityIcons
          style={styles.icon}
          color="black"
          name={name}
          size={27}
        />
      )}
    />
  );
};

export default SelectComponent;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 60,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    borderWidth: 0.8,
    borderRadius: 60,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: -25,
  },
  placeholderStyle: {
    fontSize: 16,
    textAlign: "center",
  },
  selectedTextStyle: {
    fontSize: 16,
    textAlign: "center",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
