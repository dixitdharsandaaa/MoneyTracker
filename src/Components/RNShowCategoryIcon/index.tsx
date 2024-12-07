import React from 'react';
import {colors, sizes} from '../../Constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View} from 'native-base';
import {moderateScale} from 'react-native-size-matters';

interface RNShowCategoryIconProps {
  iconName?: string;
}
const RNShowCategoryIcon: React.FC<RNShowCategoryIconProps> = ({iconName}) => {
  return (
    <View
      width={moderateScale(35)}
      height={moderateScale(35)}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={colors.gray_light}
      borderRadius={100}>
      <Icon name={iconName || ''} size={sizes.f15} color={colors.primary} />
    </View>
  );
};

export default RNShowCategoryIcon;
