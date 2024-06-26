import React from "react";
import MapView, { Marker } from "react-native-maps";
import { View, StyleSheet } from "react-native";
import Colors from "@/app/Functions/colors.android.ios";
const MapInfo = ({
  latitude,
  latitudeDelta,
  longitude,
  longitudeDelta,
  title,
  description,
}) => {
  // console.log({ latitude, latitudeDelta, longitude, longitudeDelta });
  const onRegionChange = (region) => {
    // console.log(region);
  };
  let locationsOfInterest = [
    {
      title: title,
      location: {
        latitude: latitude,
        longitude: longitude,
      },
      description: description,
    },
  ];

  const showLocationsOfInterest = () => {
    return locationsOfInterest.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onRegionChange={onRegionChange}
        initialRegion={{
          // latitude: 36.33575420771796,
          // latitudeDelta: 0.33357589770795215,
          // longitude: 43.142709891167975,
          // longitudeDelta: 0.22149153720901893,
          latitude: latitude,
          latitudeDelta: latitudeDelta,
          longitude: longitude,
          longitudeDelta: longitudeDelta,
        }}
      >
        {showLocationsOfInterest()}
      </MapView>
    </View>
  );
};

export default MapInfo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary_white,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  map: {
    width: 380,
    height: 280,
  },
  mapOverlay: {
    position: "absolute",
    bottom: 50,
    backgroundColor: Colors.primary_white,
    borderWidth: 2,
    borderRadius: 5,
    padding: 16,
    left: "25%",
    width: "50%",
    textAlign: "center",
  },
});
