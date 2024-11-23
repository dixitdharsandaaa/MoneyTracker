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
  flex?: number;
  textAlign?: string;
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
  flex,
  textAlign,
}) => {
  return (
    <Text
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      flex={flex}
      textAlign={textAlign}>
      {text}
    </Text>
  );
};

export default RNText;
