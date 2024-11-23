import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../Constants/theme';

export const styles = StyleSheet.create({
  btn: {
    flex: 1,
  },
  linearGradientStyle: {
    borderRadius: 6,
  },
  btnStyle: {
    paddingVertical: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  btnBorderStyle: {
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: moderateScale(9),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
});
