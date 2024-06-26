import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import InformationBox2 from "../components/uiComponenet/InformationBox2";
import InformationBox3 from "../components/uiComponenet/InformationBox3";
import { FontAwesome6 } from "@expo/vector-icons";
import Colors from "../Functions/colors.android.ios";
import { AuthContext } from "@/app/context/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";
import { fetchDoctorData } from "./../Util/http";
import LoderComponent from "@/app/components/uiComponenet/LoderComponent";
import { CONFIGIO } from "./../Util/config";
const BACKEND_URL = CONFIGIO.BACKEND_URL;

export default function SearchResult() {
  const { userToken } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [role, setRole] = useState(null);
  const [id, setid] = useState(null);
  const [loading, setLoading] = useState(true);
  /***********************************************************/

  useEffect(() => {
    const socket = io(BACKEND_URL);

    // Event handler for socket connection
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    // Event handler for socket data event
    const handleEvent = async (data) => {
      try {
        const { doctors, typeofrole, Id } = await fetchDoctorData(userToken);
        setData(doctors);
        setRole(typeofrole);
        setid(Id);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Listen for specific socket event
    socket.on("eventname", handleEvent);

    // Clean up socket connection and event listeners
    return () => {
      socket.off("eventname", handleEvent); // Remove event listener
      socket.disconnect(); // Disconnect socket
    };
  }, [userToken]);

  /***********************************************************/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { doctors, typeofrole, Id } = await fetchDoctorData(userToken);
        setData(doctors);
        setRole(typeofrole);
        setid(Id);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userToken]);
  if (loading) {
    return <LoderComponent />;
  }

  /***********************************************************/

  if (!data || data.length === 0) {
    return (
      <View style={styles.container}>
        <Image source={require("./../image/11.jpg")} style={styles.image} />
        <Text style={styles.noResultText}>No Results Found</Text>
      </View>
    );
  }
  const Dateofrevirced = data[0].ClientUser.filter(
    (item) => item._id === id
  ).map((item) => item.RevircedTime);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image source={require("./../image/11.jpg")} style={styles.image} />
        </View>

        {!data ||
          (data.length === 0 && (
            <Text style={styles.noResultText}>No Results Found</Text>
          ))}
        <View style={styles.box}>
          {role === "user" && (
            <InformationBox2
              centerName={data[0].NameOfDoctor}
              specialty={data[0].Spcilized}
              location={data[0].certifcate}
              doctorsCount={data[0].clinic[0].LocationOfclinic}
              ChosenDate={Dateofrevirced}
              // ChosenHoure={Dateofrevirced}
              iconFamily={FontAwesome6}
              iconName1="user-doctor"
              iconName2="book-medical"
              iconName3="building"
              iconName4="map-location-dot"
              iconName5="calendar-days"
              // iconName6="clock"
            />
          )}
          {role === "doctor" &&
            data &&
            data.length > 0 &&
            data[0].ClientUser &&
            data[0].ClientUser.length > 0 &&
            data[0].ClientUser.map((client, index) => (
              <View style={styles.box} key={index}>
                <InformationBox3
                  centerName={client.name}
                  specialty={client.phonenumber}
                  location={client.Gender}
                  ChosenDate={client.RevircedTime}
                  ChosenHoure={client.RevircedTime}
                  iconFamily={FontAwesome6}
                  iconName1="user-doctor"
                  iconName2="phone"
                  iconName3="users"
                  iconName5="calendar-days"
                  iconName6="clock"
                />
              </View>
            ))}
        </View>
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
  image: {
    width: 400,
    height: 220,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  box: {
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noResultContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noResultText: {
    textAlign: "center",
    fontSize: 25,
  },
});
