import React, { useEffect, useState, useRef, ReactNode } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";

import MapView, { PROVIDER_GOOGLE, MAP_TYPES, Marker } from "react-native-maps";

import useLocation from "./hooks/useLocation";
import useCamera from "./hooks/useCamera";
import BottomSheet from "reanimated-bottom-sheet";
import CameraView, { PhotoProp } from "./components/CameraView/CameraView";
import ImageView from "./components/ImageView/ImageView";
import MarkerCurrentLocation from "./components/MarkerCurrentLocation/MarkerCurrentLocation";
import MarkerContent from "./components/MarkerContent/MarkerContent";

interface Coordinate {
  latitude: Number;
  longitude: Number;
}

interface LocationContent {
  id: string;
  coordinate: Coordinate;
  timestamp: string;
  image: PhotoProp;
}

interface ActiveImage {
  image: PhotoProp;
  timestamp: string;
}

export default function App() {
  const bottomSheetRef = useRef(null);
  const bottomSheetImageRef = useRef(null);

  const { coords, getLocation } = useLocation();

  const [selectCoordinate, setSelectedCoordinate] = useState<
    Coordinate | undefined
  >();

  const [markers, setMarkers] = useState<LocationContent[]>([]);
  const [activeImage, setActiveImage] = useState<ActiveImage | undefined>();

  const { getCamera, isCameraActive, setCameraActive } = useCamera();

  const onImageLocationCapture = (coordinate: Coordinate, image: PhotoProp) => {
    const location: LocationContent = {
      id: Date.now().toString(),
      timestamp: Date.now().toString(),
      coordinate,
      image
    };
    setMarkers([...markers, location]);
    setTimeout(() => {
      bottomSheetRef.current.snapTo(0);
    });
  };

  // Activate sheet
  const onLocationSelection = e => {
    const {
      nativeEvent: { coordinate, action }
    } = e;

    if (action === "marker-press") return;
    setSelectedCoordinate(coordinate);
    setTimeout(() => {
      bottomSheetRef.current.snapTo(1);
    });
  };

  const cameraDetails = {
    center: {
      latitude: coords.latitude,
      longitude: coords.longitude
    },
    heading: coords.heading,
    altitude: coords.altitude,
    zoom: 19,
    pitch: 0
  };

  useEffect(() => {
    getLocation();
    getCamera();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          mapType={MAP_TYPES.SATELLITE}
          camera={cameraDetails}
          onPress={onLocationSelection}
        >
          <MarkerCurrentLocation
            coordinate={{
              latitude: coords.latitude,
              longitude: coords.longitude
            }}
          />
          {markers.map(location => (
            <MarkerContent
              key={location.id}
              coordinate={location.coordinate}
              image={location.image}
              timestamp={location.timestamp}
              onSelected={(image: PhotoProp, timestamp: string) => {
                setActiveImage({ image, timestamp });
                setTimeout(() => {
                  bottomSheetImageRef.current.snapTo(1);
                });
              }}
            />
          ))}
        </MapView>
      </View>

      <View
        pointerEvents={"box-none"}
        style={{
          flex: 1,
          position: "absolute",
          bottom: 0,
          top: 0,
          right: 0,
          left: 0
        }}
      >
        <BottomSheet
          ref={bottomSheetImageRef}
          snapPoints={[0, "50%", 0]}
          renderContent={() => (
            <ImageView
              image={activeImage?.image}
              timestamp={activeImage?.timestamp}
            />
          )}
        />

        <BottomSheet
          ref={bottomSheetRef}
          enabledContentTapInteraction={false}
          snapPoints={[0, "100%", 0]}
          renderContent={() => (
            <CameraView
              coordinate={selectCoordinate}
              onClose={() => bottomSheetRef.current.snapTo(0)}
              onCapture={onImageLocationCapture}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    position: "absolute",

    height: Dimensions.get("window").height,
    bottom: 0
  },
  cameraPrompt: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#fff",
    borderRadius: 100,
    width: 80,
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
