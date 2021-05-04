import React from "react";
import { Text } from "./card";

interface CardProps {}

export const Card: React.FC<CardProps> = ({}) => {
  return (
    <div>
      <Text size-1="big"> this is a test</Text>
    </div>
  );
};
