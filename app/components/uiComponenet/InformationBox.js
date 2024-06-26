import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "@/app/Functions/colors.android.ios";
function InformationBox({
  centerName,
  specialty,
  location,
  doctorsCount,
  iconFamily,
  iconName1,
  iconName2,
  iconName3,
  iconName4,
}) {
  const Icon = iconFamily;

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>{centerName}</Text>
        <Icon name={iconName1} size={19} color="white" />
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>{specialty}</Text>
        <Icon name={iconName2} size={19} color="white" />
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>{location}</Text>
        <Icon name={iconName3} size={19} color="white" />
      </View>
      <View style={styles.item}>
        <Text style={styles.text}> {doctorsCount}</Text>
        <Icon name={iconName4} size={19} color="white" />
      </View>
    </View>
  );
}

export default InformationBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary900,
    marginHorizontal: 15,
    borderRadius: 10,
    padding: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 7,
  },
  text: {
    flex: 1,
    color: "white",
    fontSize: 17,
    marginRight: 12,
    textAlign: "right",
  },
});
