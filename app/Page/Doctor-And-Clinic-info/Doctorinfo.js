import React from "react";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import DoctorBoxinfo from "../../components/uiComponenet/DoctorBoxinfo";
import Day from "../../components/uiComponenet/Day";
import MapInfo from "../../components/uiComponenet/MapInfo";
import Time from "../../components/uiComponenet/Time";
import AppButton from "../../components/uiComponenet/Buttons/App-Button";
import Colors from "./../../Functions/colors.android.ios";
import { useEffect, useState, useContext } from "react";
import { fetchdoctorInfo } from "../../Util/http";
import LoderComponent from "@/app/components/uiComponenet/LoderComponent";
import { AuthContext } from "@/app/context/AuthContext";
import { patchData } from "../../Util/http";
import "dayjs/locale/ar";
import ChosenDayData from "../../Functions/ChosenDayData";
import { fetchRevircedTime } from "../../Util/http";

const Doctorinfo = ({ route }) => {
  const [receivedTimes, setReceivedTimes] = useState([]);
  useEffect(() => {
    if (userToken !== null) {
      const fetchData = async () => {
        try {
          const data = await fetchRevircedTime(userToken, DataId);
          setReceivedTimes(data.revircedTimes);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
        }
      };

      fetchData();
    }
  }, [userToken]);

  /***********************************************************/
  const handleAppointmentConfirmation = () => {
    if (!userToken) {
      Alert.alert(
        "Login Required",
        "You need to log in to confirm the appointment.",
        [
          {
            text: "OK",
            onPress: () => {},
          },
        ],
        { cancelable: false }
      );
      return;
    }

    if (!DateReceived || !pressedTime) {
      Alert.alert(
        "Missing Information",
        "Please chose both Date  and  Time before confirming the appointment.",
        [
          {
            text: "OK",
            onPress: () => {},
          },
        ],
        { cancelable: false }
      );
      return;
    }

    patchData(DataId, userToken, DateReceived, pressedTime, receivedTimes);
  };

  /***********************************************************/
  const handelapotment = () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to take Appointment?",
      [
        {
          text: "Cancel",
          onPress: () => setshowcalnder(false),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            setshowcalnder(true);
          },
        },
      ],
      { cancelable: false }
    );
  };

  /***********************************************************/

  function handelpressedTime(time) {
    Alert.alert(
      "Confirm",
      "Are you sure you want to set the pressed time?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            setPressedTime(time);
          },
        },
      ],
      { cancelable: false }
    );
  }
  /***********************************************************/

  const [DoctorInformation, setDoctornfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { NameOfDoctor, Spcilized, certifcate, opningTime } = DoctorInformation;

  useEffect(() => {
    async function getClinicInfo(id) {
      try {
        const doctorInfo = await fetchdoctorInfo(id);
        setDoctornfo(doctorInfo);
      } catch (error) {
        setError("Can't feach Data !!");
      } finally {
        setIsLoading(false);
      }
    }

    getClinicInfo(DataId);
  }, []);

  /************************************************************ */
  const { userToken } = useContext(AuthContext);
  const { params } = route;
  const DataId = params ? params.id : null;
  const clinicinfo = params ? params.clinicinfo : null;

  /***********************************************************/
  const [date, setDate] = useState(new Date());
  const correctedDate = dayjs(date).add(1, "day").toDate(); //fix debug and correct day
  const DateReceived = correctedDate.toISOString().split("T")[0]; //out date like this 2024-06-26

  /************************************************************* */
  const chosenDay = correctedDate.getDay();

  let timeSlots;
  if (opningTime) {
    timeSlots = ChosenDayData(chosenDay, opningTime);
  } else {
    timeSlots = "";
  }

  /************************************************************* */

  const AllClinicInfo = clinicinfo;
  (AllClinicInfo.NameOfDoctor = NameOfDoctor),
    (AllClinicInfo.Spcilized = Spcilized),
    (AllClinicInfo.certifcate = certifcate);

  /************************************************************* */

  const [showCalnder, setshowcalnder] = useState(false);
  const [pressedTime, setPressedTime] = useState("");

  return isLoading ? (
    <LoderComponent />
  ) : error ? (
    <View style={styles.Loader}>
      <Text style={{ fontSize: 20 }}>Error: {error}</Text>
    </View>
  ) : (
    <ScrollView style={styles.main}>
      <View style={styles.outcontainer}>
        <View style={styles.outcontainer1}>
          <DoctorBoxinfo doctordata={AllClinicInfo}></DoctorBoxinfo>
        </View>
        <View style={styles.outcontainer2}>
          {opningTime && <Day weekSchedule={opningTime}></Day>}
        </View>
        {!showCalnder && (
          <View style={styles.outcontainer4}>
            <AppButton
              title="حجز موعد"
              fontSize={20}
              paddingVertical={16}
              paddingHorizontal={35}
              // fontWeight={"bold"}
              color={Colors.primary900}
              borderRadius={55}
              textColor={Colors.primary_white}
              onPress={handelapotment}
            ></AppButton>
          </View>
        )}
        {showCalnder && (
          <>
            <View style={styles.Date}>
              <DateTimePicker
                mode="single"
                locale="en"
                date={date}
                onChange={(params) => setDate(params.date)}
              />
            </View>
            <Time
              titles={timeSlots}
              handelpreesedTime={handelpressedTime}
            ></Time>
            <View style={styles.outcontainer4}>
              <AppButton
                title="حجز موعد"
                fontSize={20}
                paddingVertical={16}
                paddingHorizontal={35}
                color={Colors.primary900}
                borderRadius={55}
                textColor={Colors.primary_white}
                onPress={handleAppointmentConfirmation}
              ></AppButton>
            </View>
          </>
        )}

        {
          <View style={styles.outcontainer3}>
            <MapInfo
              latitude={AllClinicInfo.location[0]}
              latitudeDelta={0.012235898474813212}
              longitude={AllClinicInfo.location[1]}
              longitudeDelta={0.027104893412136732}
              title={"test"}
              description={"saad amer saeed"}
            />
          </View>
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.primary_white,
  },
  test: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "blue",
  },
  outcontainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.primary_white,
  },
  outcontainer1: {
    flex: 1,
    paddingBottom: 30,
  },
  outcontainer2: {
    flex: 1,
    paddingTop: 13,
    paddingBottom: 23,
  },
  outcontainer4: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 20,
  },
  outcontainer3: {
    flex: 1,
    paddingTop: 10,
  },
  Date: {
    paddingBottom: 20,
  },
  Loader: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.primary_white,
    alignItems: "center",
  },
});

export default Doctorinfo;
