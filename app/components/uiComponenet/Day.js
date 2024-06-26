import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, View } from "react-native";
import Colors from "@/app/Functions/colors.android.ios";
const Day = ({ weekSchedule }) => {
  return (
    <View style={styles.outcontainer}>
      <View style={styles.inercontainer}>
        {weekSchedule.map((daySchedule, index) => (
          <View style={styles.UnColorDayStyle} key={index}>
            <Text style={styles.text}>{daySchedule.times.open}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inercontainer}>
        {weekSchedule.map((daySchedule, index) => (
          <View style={styles.UnColorDayStyle} key={index}>
            <Text style={styles.text}>{daySchedule.times.close}</Text>
          </View>
        ))}
      </View>

      <View style={styles.inercontainer}>
        {weekSchedule.map((daySchedule, index) => (
          <View style={styles.ColorDayStyle} key={index}>
            <Text style={[styles.text2]}>{daySchedule.day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outcontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.primary_white,
    paddingLeft: 35,
  },
  day: {
    marginHorizontal: 0,
  },
  ColorDayStyle: {
    paddingHorizontal: 50,
    borderRadius: 20,
    backgroundColor: Colors.primary900,
    marginHorizontal: 10,
    marginVertical: 5,
  },

  text2: {
    color: "white",
    textAlign: "center",
    paddingVertical: 4,
    marginVertical: 9,
    fontSize: 15,
  },

  text: {
    color: "black",
    paddingVertical: 4,
    marginVertical: 9,
    fontSize: 15,
  },

  UnColorDayStyle: {
    marginVertical: 5,
  },
});

export default Day;
