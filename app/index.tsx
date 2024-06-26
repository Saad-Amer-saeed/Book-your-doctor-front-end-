import { Text, StyleSheet, TouchableOpacity } from "react-native";
import MainPage from "./Page/MainPage";
import SearchClinic from "./Page/SeekerComponent/SearchClinic";
import SignUp from "./Page/UserInformation/SignUp";
import Doctorinfo from "./Page/Doctor-And-Clinic-info/Doctorinfo";
import SearchResult from "./Page/SeekerComponent/SearchResult";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import LoginPage from "./Page/UserInformation/LoginPage";
import Recerve from "./Page/Recerve";
import SearchDotor from "./Page/SeekerComponent/SearchDoctor";
import ClincBuildingnfo from "./Page/Doctor-And-Clinic-info/ClincBuildingnfo";
import Colors from "./Functions/colors.android.ios";
import { AuthProvider } from "./context/AuthContext";
const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <AuthProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{
            title: "احجز طبيبك",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Recerve"
          component={Recerve}
          options={{
            title: "احجز طبيبك",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="FindClinic"
          component={SearchClinic}
          options={({ navigation }) => ({
            title: "المجمعات الطبية",
            headerShadowVisible: false,

            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.headerButton}
              >
                <Text style={styles.buttonText}>
                  <Ionicons name="arrow-back" size={20} color="blue" />
                </Text>
              </TouchableOpacity>
            ),
            // headerRight: () => (
            //   <TouchableOpacity
            //     onPress={() => {
            //       navigation.navigate("Liveness");
            //     }}
            //     style={styles.headerButton}
            //   >
            //     <Text style={styles.buttonText}>Next</Text>
            //   </TouchableOpacity>
            // ),
          })}
        />
        <Stack.Screen
          name="SearchDotor"
          component={SearchDotor}
          options={({ navigation }) => ({
            title: "البحث عن طبيب",
            headerShadowVisible: false,

            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.headerButton}
              >
                <Text style={styles.buttonText}>
                  <Ionicons name="arrow-back" size={20} color="blue" />
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="SearchResult"
          component={SearchResult}
          options={({ navigation }) => ({
            title: "البحث عن طبيب",
            headerShadowVisible: false,

            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.headerButton}
              >
                <Text style={styles.buttonText}>
                  <Ionicons name="arrow-back" size={20} color="blue" />
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={({ navigation }) => ({
            title: "تسجيل الدخول",
            headerShadowVisible: false,

            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.headerButton}
              >
                <Text style={styles.buttonText}>
                  <Ionicons name="arrow-back" size={20} color="blue" />
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={({ navigation }) => ({
            title: "LoginPage",
            headerShadowVisible: false,

            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.headerButton}
              >
                <Text style={styles.buttonText}>
                  <Ionicons name="arrow-back" size={20} color="blue" />
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ClincBuildingnfo"
          component={ClincBuildingnfo}
          options={({ navigation }) => ({
            title: "مجمع طبي",
            headerShadowVisible: false,

            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.headerButton}
              >
                <Text style={styles.buttonText}>
                  <Ionicons name="arrow-back" size={20} color="blue" />
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Doctor"
          component={Doctorinfo}
          options={({ navigation }) => ({
            title: "طبيب",
            headerShadowVisible: false,

            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.headerButton}
              >
                <Text style={styles.buttonText}>
                  <Ionicons name="arrow-back" size={20} color="blue" />
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  headerButton: {
    marginRight: 10,
    padding: 8,
  },
  buttonText: {
    color: Colors.primary1000,
    fontSize: 16,
  },
});
