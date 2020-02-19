import styled from "styled-components/native";
import { Camera } from "expo-camera";
import { Dimensions, SafeAreaView, TouchableOpacity } from "react-native";

export const CameraViewBase = styled.View`
  display: flex;
  height: ${Dimensions.get("window").height}px;
`;

export const CameraScreen = styled(Camera)`
  flex: 1;
`;

export const CameraScreenHeader = styled.View`
  padding: 16px;
`;

export const CameraScreenBody = styled.View`
  padding: 16px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CameraScreenFooter = styled.View`
  padding: 16px;
`;

export const SafeView = styled(SafeAreaView)`
  flex: 1;
`;

export const FlexView = styled.View`
  flex: 1;
`;

export const FocusArea = styled.View`
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 400px;
  width: 100%;
`;

export const FocusAreaTopLeft = styled.View`
  position: absolute;
  top: -1px;
  left: -1px;
  width: 20px;
  height: 20px;
  border-top-width: 1px;
  border-left-width: 1px;
  border-color: #fff;
`;

export const FocusAreaTopRight = styled.View`
  position: absolute;
  top: -1px;
  right: -1px;
  width: 20px;
  height: 20px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-color: #fff;
`;

export const FocusAreaBottomLeft = styled.View`
  position: absolute;
  bottom: -1px;
  left: -1px;
  width: 20px;
  height: 20px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-color: #fff;
`;

export const FocusAreaBottomRight = styled.View`
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 20px;
  height: 20px;
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-color: #fff;
`;

export const CloseButton = styled.TouchableOpacity`
  background-color: #fff;
  padding: 16px;
  border-radius: 50px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

export const CaptureButton = styled(TouchableOpacity)`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  border: 5px solid #fff;
  height: 100px;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50px;
`;

export const CaptureButtonInner = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.4);
`;
