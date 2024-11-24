import {TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Icon} from 'native-base';

interface TouchableIconProps {
  onPress?: () => void;
  as?: any;
  name?: string;
  color?: string;
  size?: number;
  disabled?: boolean;
}
const TouchableIcon: React.FC<TouchableIconProps> = ({
  onPress,
  as,
  name,
  color,
  size,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.iconStyle}>
      <Icon as={as} name={name} color={color} size={size} />
    </TouchableOpacity>
  );
};

export default React.memo(TouchableIcon);
