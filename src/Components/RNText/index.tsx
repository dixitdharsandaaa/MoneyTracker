import {Text} from 'native-base';
import React from 'react';

interface TextProps {
  text?: string;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}

const RNText: React.FC<TextProps> = ({
  text,
  color,
  fontSize,
  fontFamily,
  mt,
  mb,
  ml,
  mr,
}) => {
  return (
    <Text
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}>
      {text}
    </Text>
  );
};

export default RNText;
