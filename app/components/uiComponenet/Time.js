import React from "react";
import { StyleSheet, View } from "react-native";
import TimerButton from "./Buttons/Timer-Button";
import Colors from "@/app/Functions/colors.android.ios";
const Time = ({ titles, handelpreesedTime }) => {
  const chunkedTitles = [];
  for (let i = 0; i < titles.length; i += 3) {
    chunkedTitles.push(titles.slice(i, i + 3));
  }

  return (
    <View style={styles.container}>
      {chunkedTitles.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.buttonRow}>
          {row.map((title, index) => (
            <TimerButton
              key={index}
              title={title}
              fontSize={21}
              paddingVertical={12}
              paddingHorizontal={140}
              // fontWeight={"bold"}
              color={Colors.primary_white}
              borderRadius={55}
              textColor={"black"}
              borderWidth={1}
              onPress={() => handelpreesedTime(title)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
});

export default Time;
