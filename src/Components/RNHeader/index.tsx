import {HStack, View} from 'native-base';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fonts, sizes} from '../../Constants/theme';
import BackArrowIcon from '../BackArrowIcon';
import CalendarIcon from '../CalendarIcon';
import RNText from '../RNText';
import {goBack} from '../../Navigation/NavigationServices';

interface HeaderProps {
  showBackArrow?: boolean;
  showCalender?: boolean;
  showText?: boolean;
  value?: string;
}

const RNHeader: React.FC<HeaderProps> = ({
  showBackArrow = false,
  showCalender = false,
  showText = false,
  value,
}) => {
  return (
    <LinearGradient colors={[colors.secondary, colors.primary]}>
      <HStack
        alignItems={'center'}
        pt={4}
        pb={3}
        px={5}
        justifyContent={'space-between'}>
        {showBackArrow && <BackArrowIcon onPress={() => goBack()} />}
        {showText && (
          <RNText
            text={value}
            color={colors.white}
            fontSize={sizes.f13}
            fontFamily={fonts.medium}
            flex={1}
            textAlign="center"
            mt={2}
          />
        )}
        {showCalender && <CalendarIcon color={colors.white} />}
      </HStack>
    </LinearGradient>
  );
};

export default RNHeader;
