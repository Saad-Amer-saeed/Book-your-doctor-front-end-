import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import SelectComponent from "../../components/uiComponenet/SelectComponent";
import AppButton from "../../components/uiComponenet/Buttons/App-Button";
import { UniqueClinicandDoctorData } from "../../Functions/UniqueClinicandDoctorData";
import { useState, useEffect } from "react";
import Colors from "@/app/Functions/colors.android.ios";
import { fetchDoctorsData } from "../../Util/http";
import LoderComponent from "@/app/components/uiComponenet/LoderComponent";

const SearchDoctor = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [Doctorsdata, setDoctorsData] = useState([]);
  const [error, setError] = useState(null);

  /***********************************************************/
  useEffect(() => {
    async function getDotors() {
      try {
        const Doctorsinfo = await fetchDoctorsData();
        setDoctorsData(Doctorsinfo);
      } catch (error) {
        setError("Can't feach Data !!");
      } finally {
        setIsLoading(false);
      }
    }

    getDotors();
  }, []);
  /***********************************************************/

  const [DoctorName, setDoctorName] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

  function handleDoctorNameChange(data) {
    setDoctorName(data);
  }
  function handleselectedLocation(data) {
    setSelectedLocation(data);
  }
  function handleselectedSpecialty(data) {
    setSelectedSpecialty(data);
  }
  /***********************************************************/

  const getAllClinics = (Doctorsdata) => {
    return Doctorsdata?.flatMap((Doctors) => Doctors.clinic);
  };
  const allClinic = getAllClinics(Doctorsdata); //extract only clinic

  const Doctorname = UniqueClinicandDoctorData(
    Doctorsdata,
    "NameOfDoctor",
    "جميع الاسامي"
  );
  const locationofClinic = UniqueClinicandDoctorData(
    allClinic,
    "LocationOfclinic",
    "جميع الاماكن"
  );

  const specialty = UniqueClinicandDoctorData(
    Doctorsdata,
    "Spcilized",
    "جميع الاختصاصات"
  );
  /***********************************************************/

  const filteredDoctors = Doctorsdata.filter((doctor) => {
    const doctorNameMatch = !DoctorName || doctor.NameOfDoctor === DoctorName;
    const specialtyMatch =
      !selectedSpecialty || doctor.Spcilized === selectedSpecialty;

    const locationMatch =
      !selectedLocation ||
      doctor.clinic.some(
        (clinic) => clinic.LocationOfclinic === selectedLocation
      );

    return doctorNameMatch && specialtyMatch && locationMatch;
  });

  //pass Data to SearchResult Page
  const HandelSearchResult = () => {
    navigation.navigate("SearchResult", { filteredDoctors: filteredDoctors });
  };
  /***********************************************************/

  return (
    <>
      {isLoading ? (
        <LoderComponent />
      ) : error ? (
        <Text style={styles.text}>Error: {error}</Text>
      ) : (
        <View style={styles.container}>
          <Image source={require("../../image/4.jpg")} style={styles.image} />
          <View style={styles.selectContainer}>
            <SelectComponent
              data={Doctorname}
              name={"account"}
              onValueChange={handleDoctorNameChange}
              value={DoctorName}
              placeholder={"الاطباء"}
            />
            <SelectComponent
              data={locationofClinic}
              name={"office-building-outline"}
              onValueChange={handleselectedLocation}
              value={selectedLocation}
              placeholder={"المنطقة"}
            />
            <SelectComponent
              data={specialty}
              name={"hospital-building"}
              onValueChange={handleselectedSpecialty}
              value={selectedSpecialty}
              placeholder={"الاختصاص"}
            />
          </View>
          <AppButton
            title="بحث"
            fontSize={20}
            paddingVertical={16}
            paddingHorizontal={12}
            fontWeight={"bold"}
            color={Colors.primary900}
            borderRadius={28}
            textColor={Colors.primary_white}
            onPress={HandelSearchResult}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: 300,
    height: 250,
    resizeMode: "contain",
    alignSelf: "center",
  },

  selectContainer: {
    marginTop: 20,
    marginBottom: 60,
  },
});

export default SearchDoctor;
