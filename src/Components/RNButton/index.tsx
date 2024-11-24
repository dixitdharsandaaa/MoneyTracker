import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import RNText from '../RNText';
import {colors, fonts, sizes} from '../../Constants/theme';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';

interface RNButtonProps {
  name?: string;
  onPress?: () => void;
  showBorder?: boolean;
  removeBackgroundColor?: boolean;
  style?: object;
}

const RNButton: React.FC<RNButtonProps> = ({
  name,
  onPress,
  showBorder = false,
  removeBackgroundColor = false,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[
          showBorder
            ? colors.transparent
            : removeBackgroundColor
            ? colors.transparent
            : colors.secondary,
          showBorder
            ? colors.transparent
            : removeBackgroundColor
            ? colors.transparent
            : colors.primary,
        ]}
        style={[
          styles.linearGradientStyle,
          showBorder && styles.btnBorderStyle,
          style,
        ]}>
        <RNText
          text={name}
          color={
            showBorder
              ? colors.primary
              : removeBackgroundColor
              ? colors.primary
              : colors.white
          }
          fontSize={sizes.f13}
          fontFamily={fonts.medium}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default React.memo(RNButton);
