import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Marker } from "react-native-maps";

const Base = styled.View`
  position: relative;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ring = styled.View`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: #fff;
  shadow-color: #000;
  shadow-offset: 3px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
`;

const Point = styled.View`
  width: 23px;
  height: 23px;
  background-color: #000;
  border-radius: 50px;
`;

const MarkerContent = ({ coordinate, image, onSelected, timestamp }) => {
  return (
    <Marker coordinate={coordinate} onPress={e => onSelected(image, timestamp)}>
      <Base>
        <Ring />
        <Point />
      </Base>
    </Marker>
  );
};

export default MarkerContent;
