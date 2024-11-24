import {Text} from 'native-base';
import React from 'react';

interface TextProps {
  text?: any;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  flex?: number;
  textAlign?: any;
}

const RNText: React.FC<TextProps> = React.memo(
  ({text, color, fontSize, fontFamily, mt, mb, ml, mr, flex, textAlign}) => {
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
  },
);

export default RNText;
