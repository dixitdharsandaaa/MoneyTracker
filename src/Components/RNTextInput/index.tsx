import React, {useState} from 'react';
import RNText from '../RNText';
import {TextInput} from 'react-native';
import {View} from 'native-base';
import {colors, fonts, sizes} from '../../Constants/theme';
import {styles} from './style';

interface RNTextInputProps {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  multiline?: boolean;
  keyboardType?: any;
  maxLength?: number;
}

const RNTextInput: React.FC<RNTextInputProps> = ({
  label,
  value,
  onChangeText,
  multiline = false,
  keyboardType = 'default',
  maxLength,
}) => {
  const [textInputFocus, setTextInputFocus] = useState<boolean>(false);
  return (
    <View
      borderWidth={0.5}
      borderRadius={6}
      borderColor={textInputFocus ? colors.primary : colors.black}
      px={2.5}
      py={1.5}>
      <RNText
        text={label}
        color={colors.black}
        fontSize={sizes.f13}
        fontFamily={fonts.medium}
      />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.textInputStyle}
        onFocus={() => setTextInputFocus(true)}
        onBlur={() => setTextInputFocus(false)}
        cursorColor={colors.primary}
        multiline={multiline}
        numberOfLines={multiline ? 5 : 1}
        textAlignVertical={multiline ? 'top' : 'center'}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
    </View>
  );
};

export default React.memo(RNTextInput);
