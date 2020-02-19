import React, { useRef, useState } from "react";

import { Text } from "react-native";

import { Camera } from "expo-camera";

import {
  CameraViewBase,
  CameraScreen,
  CameraScreenHeader,
  CameraScreenBody,
  FocusArea,
  FocusAreaTopLeft,
  FocusAreaTopRight,
  FocusAreaBottomLeft,
  FocusAreaBottomRight,
  CameraScreenFooter,
  SafeView,
  CloseButton,
  CaptureButton,
  CaptureButtonInner,
  FlexView
} from "./CameraView.styles";

export interface PhotoProp {
  height: number;
  uri: string;
  width: number;
}

const CameraViewFocus = () => (
  <FocusArea>
    <FocusAreaTopLeft />
    <FocusAreaTopRight />
    <FocusAreaBottomLeft />
    <FocusAreaBottomRight />
  </FocusArea>
);

const CameraViewCaptureButton = ({ onPress }) => (
  <CaptureButton onPress={onPress}>
    <CaptureButtonInner />
  </CaptureButton>
);

const CameraView = ({ onClose, onCapture, coordinate }) => {
  const cameraRef = useRef(null);

  const takePick = async () => {
    const photo = await cameraRef.current.takePictureAsync();
    console.log("Camera", photo);
    onCapture(coordinate, photo);
  };

  return (
    <CameraViewBase>
      <CameraScreen ref={cameraRef} type={Camera.Constants.Type.back}>
        <SafeView>
          <FlexView>
            <CameraScreenHeader>
              <CloseButton onPress={() => onClose()}>
                <Text>Close</Text>
              </CloseButton>
            </CameraScreenHeader>
            <CameraScreenBody>
              <CameraViewFocus />
            </CameraScreenBody>
            <CameraScreenFooter>
              <CameraViewCaptureButton onPress={takePick} />
            </CameraScreenFooter>
          </FlexView>
        </SafeView>
      </CameraScreen>
    </CameraViewBase>
  );
};
export default CameraView;
