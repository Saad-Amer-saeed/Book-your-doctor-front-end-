import React from "react";
import InformationBox from "../../components/uiComponenet/InformationBox";
import { FontAwesome6 } from "@expo/vector-icons";
import Colors from "@/app/Functions/colors.android.ios";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
export default function SearchResult({ route, navigation }) {
  const { params } = route;
  const filterdoctordata = params ? params.filteredDoctors : null; //Recived Data from SearchDoctorData

  /***********************************************************/

  const flattenedDoctors = filterdoctordata.flatMap((doctor) =>
    // Map each clinic to a new object and flatten the result
    doctor.clinic.map((clinic) => ({
      NameOfDoctor: doctor.NameOfDoctor,
      Spcilized: doctor.Spcilized,
      NameOfClinic: clinic.NameOfClinic,
      LocationOfclinic: clinic.LocationOfclinic,
      _id: doctor._id,
    }))
  );

  /***********************************************************/

  function handelpreesedDoctor(id) {
    //filter doctors data and pass only the data of doctor depend on id recived when press button

    const filteredDoctor = filterdoctordata.find((doctor) => doctor.id === id);
    clinicinfo = {
      LocationOfclinic: filteredDoctor.clinic[0].LocationOfclinic,
      location: filteredDoctor.clinic[0].location,
    };

    navigation.navigate("Doctor", { id: id, clinicinfo: clinicinfo });
  }

  /***********************************************************/

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image source={require("../../image/10.jpg")} style={styles.Image} />
        </View>

        {flattenedDoctors.length > 0 ? (
          flattenedDoctors
            .filter((item) => item.NameOfDoctor !== "جميع الاسامي")
            .map((item, index) => (
              <Pressable
                key={index}
                onPress={() => handelpreesedDoctor(item._id)}
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.9 : 1,
                  },
                  styles.pressable,
                ]}
              >
                <View style={styles.box}>
                  <InformationBox
                    centerName={item.NameOfDoctor}
                    specialty={item.Spcilized}
                    location={item.NameOfClinic}
                    doctorsCount={item.LocationOfclinic}
                    iconFamily={FontAwesome6}
                    iconName1="user-doctor"
                    iconName2="book-medical"
                    iconName3="building"
                    iconName4="map-location-dot"
                  />
                </View>
              </Pressable>
            ))
        ) : (
          <View style={styles.NoResult}>
            <Image
              source={require("../../image/4.jpg")}
              style={styles.Image2}
            />
            <Text style={styles.text}>No result ...</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: Colors.primary_white,
  },

  Image: {
    width: 400,
    height: 220,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  Image2: {
    width: 150,
    height: 140,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  box: {
    paddingBottom: 20,
  },
  NoResult: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
  },
});
