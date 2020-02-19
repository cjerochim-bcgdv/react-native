import React, { FC } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { PhotoProp } from "../CameraView/CameraView";

interface ActiveImage {
  image: PhotoProp;
  timestamp: string;
}

const Heading = styled.Text`
  color: #fff;
  font-size: 22px;
  padding: 16px;
`;

const Base = styled.View`
  display: flex;
  height: ${Dimensions.get("screen").height * 0.5}px;
  background-color: #23262f;
`;

const Grip = styled.View`
  width: 50px;
  height: 5px;
  border-radius: 10px;
  opacity: 0.3;
  background-color: #aeb1b4;
`;

const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: #c4c4c4;
  opacity: 0.1;
`;

const BaseHeader = styled.View`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 16px;
`;
const BaseBody = styled.View`
  padding: 32px;
  flex: 1;
`;

const BaseImage = styled.Image`
  flex: 1;
  border-radius: 10px;
`;

const ImageView: FC<ActiveImage> = ({ image, timestamp }) => {
  return (
    <Base>
      <BaseHeader>
        <Grip />
        <Heading>Site image</Heading>

        <Divider />
      </BaseHeader>
      <BaseBody>{image && <BaseImage source={{ uri: image.uri }} />}</BaseBody>
    </Base>
  );
};

export default ImageView;
