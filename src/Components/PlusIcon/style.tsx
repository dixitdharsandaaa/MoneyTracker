import {StyleSheet} from 'react-native';
import {colors} from '../../Constants/theme';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  plusIconStyle: {
    backgroundColor: colors.primary,
    width: moderateScale(45),
    height: moderateScale(45),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    bottom: '3%',
    right: '8%',
  },
});
