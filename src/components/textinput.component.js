import styled from "styled-components/native";
import React, { useState } from "react";

export const TextInput = () => {
  const [value, changeValue] = useState("hakan");
  return (
    <TextInputStyled value={value} onChangeText={value => changeValue(value)} />
  );
};

const TextInputStyled = styled.TextInput`
  height: 100px;
  width: 300px;
  text-shadow-offset: 10px 5px;
  font-variant: small-caps;
  margin: 5px 7px 2px;
  background-color: red;
`;
