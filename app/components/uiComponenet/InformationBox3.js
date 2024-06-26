import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import Colors from "@/app/Functions/colors.android.ios";
function InformationBox3({
  centerName,
  specialty,
  location,
  doctorsCount,
  ChosenDate,
  ChosenHoure,
  iconFamily,
  iconName1,
  iconName2,
  iconName3,
  iconName4,
  iconName5,
  iconName6,
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
        <Text style={styles.text}>{ChosenDate}</Text>
        <Icon name={iconName5} size={19} color="white" />
      </View>
    </View>
  );
}

export default InformationBox3;

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
