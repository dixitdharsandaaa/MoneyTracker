import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../Constants/theme';

export const styles = StyleSheet.create({
  btn: {
    flex: 1,
  },
  linearGradientStyle: {
    borderRadius: 6,
    paddingVertical: moderateScale(10),
    alignItems: 'center',
  },
  btnBorderStyle: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 6,
  },
});
