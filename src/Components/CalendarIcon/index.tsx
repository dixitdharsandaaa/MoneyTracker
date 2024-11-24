import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, sizes} from '../../Constants/theme';
import TouchableIcon from '../TouchableIcon';

interface CalendarIconProps {
  onPress?: () => void;
  color?: string;
  disabled?: boolean;
}

const CalendarIcon: React.FC<CalendarIconProps> = ({
  onPress,
  color,
  disabled = false,
}) => {
  return (
    <TouchableIcon
      name="calendar-outline"
      color={color}
      size={sizes.f18}
      onPress={onPress}
      as={Ionicons}
      disabled={disabled}
    />
  );
};

export default React.memo(CalendarIcon);
