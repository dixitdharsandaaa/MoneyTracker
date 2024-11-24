import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {styles} from './style';
import {colors, sizes} from '../../Constants/theme';

interface PlusIconProps {
  onPress?: () => void;
}

const PlusIcon: React.FC<PlusIconProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.plusIconStyle}>
      <Ionicons name="add" color={colors.white} size={sizes.f25} />
    </TouchableOpacity>
  );
};

export default React.memo(PlusIcon);
