import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, View } from "react-native";
import Colors from "@/app/Functions/colors.android.ios";
const ClinicInfo = ({ centerName, typefoclinic, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require("./../../image/8.jpg")}
          style={styles.sideImage}
        />
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <View style={styles.textWrapper}>
              <Text style={styles.text}>{centerName}</Text>
            </View>
            <Image
              source={require("./../../image/6.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.imageWrapper}>
            <View style={styles.textWrapper}>
              <Text style={styles.text}>{typefoclinic}</Text>
            </View>
            <Image
              source={require("./../../image/7.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.imageWrapper}>
            <View style={styles.textWrapper}>
              <Text style={styles.text}>{location}</Text>
            </View>
            <Image
              source={require("./../../image/5.png")}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary_white,
    paddingLeft: 17,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  imageWrapper: {
    flexDirection: "row",
    alignItems: "center",
    margin: 6,
    paddingLeft: 10,
  },
  textWrapper: {
    width: 200,
    marginRight: 4,
  },
  image: {
    width: 60,
    height: 35,
    resizeMode: "contain",
  },
  sideImage: {
    flex: 1,
    width: 380,
    height: 130,
    resizeMode: "contain",
    paddingRight: 30,
  },
  text: {
    fontSize: 16,
    color: Colors.primary_black,
    textAlign: "right",
  },
});

export default ClinicInfo;
