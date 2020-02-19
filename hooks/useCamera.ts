import { useState } from "react";
import { Camera } from "expo-camera";

const useCamera = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);

  const getCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    console.log("CAMERA", status);
    if (status !== "granted") return;
  };

  const setCameraActive = (isActive: boolean) => setIsCameraActive(isActive);

  return { isCameraActive, setCameraActive, getCamera };
};

export default useCamera;
