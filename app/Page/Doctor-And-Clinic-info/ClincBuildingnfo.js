import React from "react";
import ClinicInfo from "../../components/uiComponenet/ClinicInfo";
import MapInfo from "../../components/uiComponenet/MapInfo";
import InformationBox from "../../components/uiComponenet/InformationBox";
import { View, StyleSheet, ScrollView, Pressable, Text } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import Colors from "./../../Functions/colors.android.ios";
import { fetchClinicInfo } from "../../Util/http";
import { useEffect, useState } from "react";
import LoderComponent from "@/app/components/uiComponenet/LoderComponent";

const ClincBuildingnfo = ({ route, navigation }) => {
  const { params } = route;
  const DataId = params ? params.id : null;
  /***********************************************************/

  function handelpreesedDoctor(id) {
    navigation.navigate("Doctor", { id: id, clinicinfo: clinicinfo });
  }
  /***********************************************************/

  const [isLoading, setIsLoading] = useState(true);
  const [ClinicInformation, setClinicInfo] = useState([]);
  const [error, setError] = useState(null);
  /***********************************************************/

  useEffect(() => {
    async function getClinicInfo(id) {
      try {
        const clinicData = await fetchClinicInfo(id);
        setClinicInfo(clinicData);
      } catch (error) {
        setError("Can't feach Data !!");
      } finally {
        setIsLoading(false);
      }
    }

    getClinicInfo(DataId);
  }, []);
  /***********************************************************/

  const { NameOfClinic, TypeOfclinic, LocationOfclinic, location, doctor } =
    ClinicInformation;
  const clinicinfo = { LocationOfclinic, location }; //to pass data to Doctor Page
  /***********************************************************/

  return isLoading ? (
    <LoderComponent />
  ) : error ? (
    <View style={styles.Loader}>
      <Text style={{ fontSize: 20 }}>Error: {error}</Text>
    </View>
  ) : (
    <ScrollView style={styles.outercontainer}>
      <View style={styles.container}>
        <ClinicInfo
          centerName={NameOfClinic}
          typefoclinic={TypeOfclinic}
          location={LocationOfclinic}
        />

        {location && (
          <MapInfo
            latitude={location[0]}
            latitudeDelta={0.012235898474813212}
            longitude={location[1]}
            longitudeDelta={0.027104893412136732}
            title={"location"}
            description={"location-Of-Clinic"}
          />
        )}
      </View>
      {doctor &&
        doctor.map((item, index) => (
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
              <View style={styles.InformationBox}>
                <InformationBox
                  centerName={item.NameOfDoctor}
                  specialty={item.Spcilized}
                  location={NameOfClinic}
                  doctorsCount={LocationOfclinic}
                  iconFamily={FontAwesome6}
                  iconName1="user-doctor"
                  iconName2="book-medical"
                  iconName3="building"
                  iconName4="map-location-dot"
                />
              </View>
            </View>
          </Pressable>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outercontainer: { backgroundColor: Colors.primary_white },
  Loader: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.primary_white,
    alignItems: "center",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.primary_white,
  },
  box: {
    marginTop: 2,

    flex: 1,
  },
  InformationBox: {
    paddingVertical: 4,
    backgroundColor: Colors.primary_white,
  },
  image: {
    width: 300,
    height: 250,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default ClincBuildingnfo;
