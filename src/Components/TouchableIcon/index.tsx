import {TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Icon} from 'native-base';

interface TouchableIconProps {
  onPress?: () => void;
  as?: string;
  name?: string;
  color?: string;
  size?: number;
}
const TouchableIcon: React.FC<TouchableIconProps> = ({
  onPress,
  as,
  name,
  color,
  size,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconStyle}>
      <Icon as={as} name={name} color={color} size={size} />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
