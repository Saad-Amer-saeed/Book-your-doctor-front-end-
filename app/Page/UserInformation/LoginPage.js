import AppButton from "../../components/uiComponenet/Buttons/App-Button";
import React, { useState, useContext } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "@/app/Functions/colors.android.ios";
import { AuthContext } from "@/app/context/AuthContext";

const LoginPage = ({ navigation }) => {
  /***********************************************************/

  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /***********************************************************/

  const { login } = useContext(AuthContext);

  /***********************************************************/
  const handleLogin = async () => {
    const errorMessage = await login(username, password);

    if (errorMessage === null) {
      navigation.navigate("MainPage");
    } else {
      Alert.alert("Error", errorMessage);
    }

    console.log(await login(username, password));
  };

  const NewRegister = () => {
    navigation.navigate("SignUp");
  };

  /***********************************************************/

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={"position"}
        keyboardVerticalOffset={30}
        style={styles.contentContainer}
      >
        <Image source={require("../../image/4.jpg")} style={styles.image} />

        <View style={styles.outputContainer}>
          <View style={styles.inputContainer}>
            <Icon
              name="user"
              size={29}
              color={Colors.primary_black}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your Email"
              placeholderTextColor={Colors.primary_text_dark}
              value={username}
              keyboardType="email-address"
              onChangeText={setEmail}
              // returnKeyType="next"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              name="lock"
              size={29}
              color={Colors.primary_black}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor={Colors.primary_text_dark}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>

          <AppButton
            title="Sign In"
            fontSize={17}
            paddingVertical={19}
            paddingHorizontal={12}
            fontWeight={"bold"}
            color={Colors.primary900}
            borderRadius={28}
            textColor={Colors.primary_white}
            onPress={() => handleLogin()}
          />
        </View>

        <AppButton
          title="Log In"
          fontSize={17}
          paddingVertical={19}
          paddingHorizontal={20}
          fontWeight={"bold"}
          color={Colors.primary900}
          borderRadius={28}
          textColor={Colors.primary_white}
          onPress={NewRegister}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: 50,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    width: 370,
    height: 60,
    margin: 12,
  },
  outputContainer: { marginTop: 30, marginBottom: 40 },
  icon: {
    marginRight: 10,
    marginLeft: 20,
  },
  input: {
    flex: 1,
    height: 60,
    padding: 12,
    paddingLeft: 35,
    textAlign: "left",
    fontSize: 16,

    color: Colors.primary_black,
  },
  image: {
    width: 400,
    height: 280,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default LoginPage;
