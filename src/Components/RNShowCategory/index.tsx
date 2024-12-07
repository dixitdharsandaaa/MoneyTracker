import {HStack, View} from 'native-base';
import React from 'react';
import RNText from '../RNText';
import {colors, fonts, sizes} from '../../Constants/theme';
import {constantString} from '../../Constants/constantString';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RNShowCategoryIcon from '../RNShowCategoryIcon';

interface RNShowCategoryProps {
  item?: any;
}

const RNShowCategory: React.FC<RNShowCategoryProps> = React.memo(({item}) => {
  return (
    <HStack
      borderWidth={0.5}
      borderRadius={6}
      borderColor={colors.black}
      px={2.5}
      py={1.5}
      alignItems={'center'}
      justifyContent={'space-between'}>
      <View>
        <RNText
          text={constantString.CATEGORY}
          color={colors.black}
          fontSize={sizes.f13}
          fontFamily={fonts.medium}
        />
        <RNText
          text={item?.name || ''}
          color={colors.primary}
          fontSize={sizes.f15}
          fontFamily={fonts.bold}
        />
      </View>
      <RNShowCategoryIcon iconName={item?.icon_name} />
    </HStack>
  );
});

export default RNShowCategory;
