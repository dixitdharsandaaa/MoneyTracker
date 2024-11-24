import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, sizes} from '../../Constants/theme';
import TouchableIcon from '../TouchableIcon';

interface BackArrowProps {
  onPress?: () => void;
}

const BackArrowIcon: React.FC<BackArrowProps> = React.memo(({onPress}) => {
  return (
    <TouchableIcon
      name="arrow-back-sharp"
      as={Ionicons}
      color={colors.white}
      size={sizes.f18}
      onPress={onPress}
    />
  );
});

export default BackArrowIcon;
