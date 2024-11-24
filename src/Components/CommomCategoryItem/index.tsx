import {View} from 'native-base';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {colors, fonts, sizes} from '../../Constants/theme';
import RNText from '../RNText';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface CommomCategoryItemProps {
  item?: any;
}

const CommomCategoryItem: React.FC<CommomCategoryItemProps> = ({item}) => {
  return (
    <View flex={1} alignItems={'center'}>
      <View
        width={moderateScale(45)}
        height={moderateScale(45)}
        backgroundColor={colors.gray_light}
        borderRadius={100}
        justifyContent={'center'}
        alignItems={'center'}>
        <Icon name={item?.icon_name} size={sizes.f16} color={colors.primary} />
      </View>
      <RNText
        text={item?.name || ''}
        color={colors.black}
        fontSize={sizes.f11}
        fontFamily={fonts.medium}
        textAlign={'center'}
      />
    </View>
  );
};

export default React.memo(CommomCategoryItem);
