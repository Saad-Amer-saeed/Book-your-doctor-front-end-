import { StyleSheet, View, Text, Alert } from "react-native";
import AppButtonIcon from "../components/uiComponenet/Buttons/App-Button-Icon";
import AnimatedImage from "../components/uiComponenet/AnimatedImage";
import Colors from "../Functions/colors.android.ios";
import React, { useState, useContext } from "react";

import { AuthContext } from "@/app/context/AuthContext";

function MainPage({ navigation }) {
  const { userToken, logout } = useContext(AuthContext);
  /***********************************************************/

  const handelLogOutt = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Logout Cancelled"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => logout(),
        },
      ],
      { cancelable: false }
    );
  };
  /***********************************************************/

  const handleFindDoctor = () => {
    navigation.navigate("FindClinic");
  };
  const SearchAdoctor = () => {
    navigation.navigate("SearchDotor");
  };
  const Login = () => {
    navigation.navigate("LoginPage");
  };
  const Recerve = () => {
    navigation.navigate("Recerve");
  };
  /***********************************************************/

  return (
    <View style={styles.container}>
      <View style={styles.AnimatedImage}>
        <AnimatedImage></AnimatedImage>
      </View>
      <View style={styles.AppButton}>
        <AppButtonIcon
          title="المجمعات الطبية"
          fontSize={17}
          paddingVertical={16}
          paddingHorizontal={39}
          fontWeight={"bold"}
          color={Colors.primary900}
          borderRadius={55}
          textColor={Colors.primary_white}
          iconName="office-building-outline"
          onPress={handleFindDoctor}
        ></AppButtonIcon>
        <AppButtonIcon
          title="بحث عن طبيب"
          fontSize={17}
          paddingVertical={16}
          paddingHorizontal={39}
          fontWeight={"bold"}
          color={Colors.primary900}
          borderRadius={55}
          textColor={Colors.primary_white}
          iconName="clipboard-text-search-outline"
          onPress={SearchAdoctor}
        ></AppButtonIcon>
        {userToken == null ? (
          <AppButtonIcon
            title="تسجيل الدخول"
            fontSize={17}
            paddingVertical={16}
            paddingHorizontal={39}
            fontWeight={"bold"}
            color={Colors.primary900}
            borderRadius={55}
            textColor={Colors.primary_white}
            iconName="account"
            onPress={Login}
          ></AppButtonIcon>
        ) : (
          <>
            <AppButtonIcon
              title=" جميع لحجوزات"
              fontSize={17}
              paddingVertical={16}
              paddingHorizontal={39}
              fontWeight={"bold"}
              color={Colors.primary900}
              borderRadius={55}
              textColor={Colors.primary_white}
              iconName="calendar-account"
              onPress={Recerve}
            ></AppButtonIcon>
            <AppButtonIcon
              title="   تسجيل الخروج"
              fontSize={17}
              paddingVertical={16}
              paddingHorizontal={39}
              fontWeight={"bold"}
              color={Colors.primary900}
              borderRadius={55}
              textColor={Colors.primary_white}
              iconName="logout"
              onPress={handelLogOutt}
            ></AppButtonIcon>
          </>
        )}
      </View>

      <Text>مساحة اعلانية</Text>
    </View>
  );
}

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 130,
    backgroundColor: "white",
  },

  AppButton: {
    alignSelf: "stretch",
  },

  AnimatedImage: {
    paddingBottom: 99,
    width: 400,
    height: 100,
  },
  TextCom: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
