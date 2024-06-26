import React from "react";
import { Text, View, StyleSheet, ActivityIndicator, Image } from "react-native";

const LoderComponent = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../image/4.jpg")}
          style={styles.image}
        />
      </View>

      <View style={styles.TextAndIndicator}>
        <Text style={styles.text}>جاري قراءة البيانات</Text>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffff",
  },
  TextAndIndicator: {
    marginBottom: 200,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    marginBottom: 50,
  },
  image: {
    width: 300,
    height: 250,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default LoderComponent;
