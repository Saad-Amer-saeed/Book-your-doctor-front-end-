import axios from "axios";
import { CONFIG } from "./config";

const BACKEND_URL = CONFIG.BACKEND_URL;
import { Alert } from "react-native";

export async function fetchClinisData() {
  const response = await axios.get(BACKEND_URL + "/ClinicRouter/AllClinicData");

  return response.data.data;
}

export async function fetchClinicInfo(id) {
  const response = await axios.get(BACKEND_URL + `/ClinicRouter/${id}`);

  return response.data.data.Clinic;
}
export async function fetchdoctorInfo(id) {
  const response = await axios.get(BACKEND_URL + `/DoctorRouter/${id}`);

  return response.data.data.Doctor;
}

export async function fetchDoctorsData() {
  const response = await axios.get(
    BACKEND_URL + "/DoctorRouter/getAllDoctorData"
  );

  return response.data.data.doctors;
}

export async function fetchDoctorData(userToken) {
  const url = BACKEND_URL + "/DoctorRouter/getAllDoctorDataReviced";
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return {
      doctors: response.data.data.doctors,
      typeofrole: response.data.data.typeofrole,
      Id: response.data.data.Id,
    };
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    throw error;
  }
}
export async function fetchRevircedTime(userToken, DataId) {
  const url = BACKEND_URL + `/DoctorRouter/RevircedTime?DataId=${DataId}`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    const receivedTimesArray = response.data.data.receivedTimes[0];
    const revircedTimes = receivedTimesArray?.map((item) => item.RevircedTime);
    return {
      revircedTimes,
    };
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    throw error;
  }
}

export async function patchData(
  DataId,
  userToken,
  tt,
  pressedTime,
  receivedTimes
) {
  const RevircedTime = `Date:${tt} Time:${pressedTime}`;
  const matchedTimes = receivedTimes.filter((time) => time === RevircedTime);

  // Check if the time has been previously received
  if (matchedTimes.length > 0) {
    Alert.alert("Sorry!", "The time has been previously received.");
    return; // Exit the function early to skip the backend request
  }

  // If the time has not been previously received, proceed with the patch request
  try {
    const response = await axios.patch(
      `${BACKEND_URL}/DoctorRouter/update/${DataId}`,
      {
        RevircedTime: RevircedTime,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      }
    );

    if (response.status === 200) {
      Alert.alert("Success", "success");
      return response.data; // Return data if needed
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Error:", error);
    Alert.alert("Error", "Failed to update data");
    throw new Error("Failed to update data"); // Throw error for further handling
  }
}
