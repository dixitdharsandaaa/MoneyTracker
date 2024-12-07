import React from 'react';
import TouchableIcon from '../TouchableIcon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, sizes} from '../../Constants/theme';

interface DeleteIconProps {
  onPress?: () => void;
}

const DeleteIcon: React.FC<DeleteIconProps> = ({onPress}) => {
  return (
    <TouchableIcon
      as={MaterialCommunityIcons}
      name={'delete'}
      color={colors.white}
      onPress={onPress}
      size={sizes.f18}
    />
  );
};

export default DeleteIcon;
