import { StyleSheet, View, ScrollView, Text, Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import InformationBox from "../../components/uiComponenet/InformationBox";
import SelectComponent from "../../components/uiComponenet/SelectComponent";
import { UniqueClinicandDoctorData } from "../../Functions/UniqueClinicandDoctorData";
import { useEffect, useState } from "react";
import LoderComponent from "@/app/components/uiComponenet/LoderComponent";
import { fetchClinisData } from "../../Util/http";
function SearchClinic({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [ClinicsData, setClinicsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getclinicdata() {
      try {
        const clinicData = await fetchClinisData();

        setClinicsData(clinicData.Clinic);
      } catch (error) {
        setError("Can't feach Data !!");
      } finally {
        setIsLoading(false);
      }
    }

    getclinicdata();
  }, []);

  const [centerNameDatavalue, setCenterNameDataValue] = useState(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  function handleCenterNameChange(data) {
    setCenterNameDataValue(data);
  }
  function handleselectedSpecialty(data) {
    setSelectedSpecialty(data);
  }

  function handleselectedLocation(data) {
    setSelectedLocation(data);
  }

  function handelpreesedbox(id) {
    navigation.navigate("ClincBuildingnfo", { id: id });
  }

  const NameOfClinic = UniqueClinicandDoctorData(
    ClinicsData,
    "NameOfClinic",
    "كافة المجمعات"
  );

  const TypeOfclinic = UniqueClinicandDoctorData(
    ClinicsData,
    "TypeOfclinic",
    "كافة الاختصاصات"
  );

  const LocationOfclinic = UniqueClinicandDoctorData(
    ClinicsData,
    "LocationOfclinic",
    "جميع الاماكن"
  );

  const filteredClinics = ClinicsData?.filter(
    (clinic) =>
      (!centerNameDatavalue || clinic.NameOfClinic === centerNameDatavalue) &&
      (!selectedSpecialty || clinic.TypeOfclinic === selectedSpecialty) &&
      (!selectedLocation || clinic.LocationOfclinic === selectedLocation)
  );
  return (
    <>
      {isLoading ? (
        <LoderComponent />
      ) : error ? (
        <Text style={styles.text}>Error: {error}</Text>
      ) : (
        <ScrollView style={styles.FindClinic}>
          <SelectComponent
            data={TypeOfclinic}
            name={"hospital-building"}
            onValueChange={handleselectedSpecialty}
            value={selectedSpecialty}
            placeholder={"كافة الاختصاصات"}
          />
          <SelectComponent
            data={LocationOfclinic}
            name={"account"}
            onValueChange={handleselectedLocation}
            value={selectedLocation}
            placeholder={"المنطقة"}
          />
          <SelectComponent
            data={NameOfClinic}
            name={"office-building-outline"}
            onValueChange={handleCenterNameChange}
            value={centerNameDatavalue}
            placeholder={"اسم المجمع"}
          />
          <View>
            {filteredClinics.length < 1 ? (
              <Text style={styles.text}>لايوجد نتائج ....</Text>
            ) : (
              filteredClinics
                .filter((clinic) => clinic.NameOfClinic !== "كافة المجمعات")
                .map((clinic) => (
                  <View key={clinic._id} style={styles.informationBoxWrapper}>
                    <Pressable
                      onPress={() => handelpreesedbox(clinic._id)}
                      style={({ pressed }) => [
                        {
                          opacity: pressed ? 0.9 : 1,
                        },
                        styles.pressable,
                      ]}
                    >
                      <InformationBox
                        centerName={clinic.NameOfClinic}
                        specialty={clinic.TypeOfclinic}
                        location={clinic.LocationOfclinic}
                        doctorsCount={clinic.NumerOfDoctor}
                        iconFamily={FontAwesome6}
                        iconName1="building"
                        iconName2="briefcase-medical"
                        iconName3="map-location-dot"
                        iconName4="users"
                      />
                    </Pressable>
                  </View>
                ))
            )}
          </View>
        </ScrollView>
      )}
    </>
  );
}

export default SearchClinic;

const styles = StyleSheet.create({
  informationBoxWrapper: {
    marginBottom: 10,
  },
  FindClinic: {
    backgroundColor: "white",
  },
  text: {
    paddingTop: 30,
    textAlign: "center",
    fontSize: 20,
  },
});
