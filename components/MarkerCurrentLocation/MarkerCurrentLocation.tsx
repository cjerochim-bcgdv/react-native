import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Marker } from "react-native-maps";

const Base = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

const Ring = styled.View`
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  background-color: lightblue;
`;

const Point = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: darkblue;
`;

const MarkerCurrentLocation = ({ coordinate }) => {
  return (
    <Marker coordinate={coordinate} title="Hello">
      <Base>
        <Ring />
        <Point />
      </Base>
    </Marker>
  );
};

export default MarkerCurrentLocation;
