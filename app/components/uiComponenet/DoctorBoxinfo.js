import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

const DoctorBoxinfo = ({ doctordata }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require("./../../image/9.jpg")}
          style={styles.sideImage}
        />
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <View style={styles.textWrapper}>
              <Text style={styles.text}>{doctordata.NameOfDoctor}</Text>
            </View>
            <FontAwesome6 name="user-doctor" size={24} color="#037EC1" />
          </View>
          <View style={styles.imageWrapper}>
            <View style={styles.textWrapper}>
              <Text style={styles.text}>{doctordata.Spcilized}</Text>
            </View>
            <FontAwesome6 name="book-medical" size={24} color="#037EC1" />
          </View>
          <View style={styles.imageWrapper}>
            <View style={styles.textWrapper}>
              <Text style={styles.text}>{doctordata.LocationOfclinic}</Text>
            </View>
            <FontAwesome6 name="building" size={24} color="#037EC1" />
          </View>
          <View style={styles.imageWrapper}>
            <View style={styles.textWrapper}>
              <Text style={styles.text}>{doctordata.certifcate}</Text>
            </View>
            <FontAwesome6 name="user-graduate" size={24} color="#037EC1" />
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
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
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
    marginRight: 16,
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
    color: "#037EC1",
    textAlign: "right",
  },
});

export default DoctorBoxinfo;
