import { useState } from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

interface CurrentPosition {
  accuracy: number;
  altitude: number;
  altitudeAccuracy: number;
  heading: number;
  latitude: number;
  longitude: number;
  speed: number;
}

const useLocation = () => {
  const [coords, setCoords] = useState<CurrentPosition>({
    accuracy: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    heading: 0,
    latitude: 0,
    longitude: 0,
    speed: 0
  });

  const getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    console.log("PERMISSION", status);
    if (status !== "granted") return;
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest
    });
    setCoords(location.coords as CurrentPosition);
  };
  return { coords, getLocation };
};

export default useLocation;
