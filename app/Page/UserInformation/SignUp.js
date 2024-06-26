import React, { useState, useContext } from "react";
import { TextInput, View, StyleSheet, Text, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "@/app/Functions/colors.android.ios";
import SelectComponent2 from "../../components/uiComponenet/SelectComponent";
import AppButton from "../../components/uiComponenet/Buttons/App-Button";
import { AuthContext } from "@/app/context/AuthContext";

const SignUp = ({ navigation }) => {
  const { signUp } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const [errors, setErrors] = useState({});

  const data = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];
  /***********************************************************/

  const validateInputs = () => {
    let valid = true;
    let errors = {};

    if (!username.trim()) {
      errors.username = "Username is required";
      valid = false;
    }
    if (!password.trim()) {
      errors.password = "Password is required";
      valid = false;
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
      valid = false;
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      valid = false;
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      valid = false;
    }
    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
      valid = false;
    }
    if (!Email.trim()) {
      errors.Email = "Email is required";
      valid = false;
    }
    if (!gender.trim()) {
      errors.gender = "Gender is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };
  /***********************************************************/

  const handleSignUp = () => {
    if (validateInputs()) {
      signUp(username, Email, password, confirmPassword, phoneNumber, gender);
      navigation.navigate("MainPage");
    } else {
      Alert.alert("Validation Error", "Please fill all the required fields.");
    }
  };
  /***********************************************************/

  return (
    <View style={styles.container1}>
      <View style={styles.container}>
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
              placeholder="Enter your username"
              placeholderTextColor={Colors.primary_text_dark}
              value={username}
              onChangeText={setUsername}
            />
          </View>
          {errors.username && (
            <Text style={styles.errorText}>{errors.username}</Text>
          )}

          <View style={styles.inputContainer}>
            <Icon
              name="envelope"
              size={20}
              color={Colors.primary_black}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your Email"
              placeholderTextColor={Colors.primary_text_dark}
              value={Email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>
          {errors.Email && <Text style={styles.errorText}>{errors.Email}</Text>}

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
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          <View style={styles.inputContainer}>
            <Icon
              name="lock"
              size={29}
              color={Colors.primary_black}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              placeholderTextColor={Colors.primary_text_dark}
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
          {errors.confirmPassword && (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          )}

          <View style={styles.inputContainer}>
            <Icon
              name="mobile-phone"
              size={29}
              color={Colors.primary_black}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your PhoneNumber"
              placeholderTextColor={Colors.primary_text_dark}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
          {errors.phoneNumber && (
            <Text style={styles.errorText}>{errors.phoneNumber}</Text>
          )}
        </View>
      </View>
      <View style={styles.container3}>
        <SelectComponent2
          data={data}
          name="gender-male-female"
          onValueChange={setGender}
          value={gender}
        />
        {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}

        <View style={styles.container4}>
          <AppButton
            title="Log In"
            fontSize={17}
            paddingVertical={16}
            paddingHorizontal={20}
            fontWeight={"bold"}
            color={Colors.primary_white}
            borderRadius={28}
            textColor={Colors.primary_text_dark}
            onPress={handleSignUp}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  container3: {
    marginBottom: 130,
  },

  container4: { paddingTop: 30 },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    width: 370,
    height: 60,
    margin: 12,
  },

  outputContainer: {
    marginTop: 1,
    marginBottom: 1,
  },
  icon: {
    marginRight: 10,
    marginLeft: 20,
  },
  input: {
    flex: 1,
    height: 60,
    padding: 10,
    paddingRight: 60,
    textAlign: "center",
  },
  errorText: {
    color: "red",
    marginLeft: 20,
    marginTop: -10,
  },
  image: {
    width: 400,
    height: 230,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default SignUp;
