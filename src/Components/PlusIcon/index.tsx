import React, {useCallback} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {styles} from './style';
import {colors, sizes} from '../../Constants/theme';

interface PlusIconProps {
  onPress?: () => void;
}

const PlusIcon: React.FC<PlusIconProps> = React.memo(({onPress}) => {
  const handlePress = useCallback(() => {
    if (onPress) {
      onPress();
    }
  }, [onPress]);
  return (
    <TouchableOpacity onPress={handlePress} style={styles.plusIconStyle}>
      <Ionicons name="add" color={colors.white} size={sizes.f25} />
    </TouchableOpacity>
  );
});

export default PlusIcon;
