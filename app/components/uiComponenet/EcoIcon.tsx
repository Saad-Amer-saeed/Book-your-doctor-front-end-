import React from "react";
import { Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface EcoIconProps {
  name: string;
  size: number;
  color: string;
}

const EcoIcon: React.FC<EcoIconProps> = ({ name, size, color }) => {
  return (
    <Pressable>
      <MaterialCommunityIcons name={name} size={size} color={color} />
    </Pressable>
  );
};

export default EcoIcon;
