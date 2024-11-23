import {Dimensions} from 'react-native';
import { scale } from 'react-native-size-matters';

// Destructure and assign the width and height
const {width, height} = Dimensions.get('screen');
export const screenWidth = width;
export const screenHeight = height;

export const colors = {
  primary: '#643FF6',
  secondary: '#9D34FB',
  black: '#000000',
  white: '#FFFFFF',
  light_white: '#F2F1F6',
  gray:'#C0C0C0',
  transparent:"transparent"
};

export const sizes= {
  f5:scale(5),
  f10: scale(10),
  f11: scale(11),
  f12: scale(12),
  f13: scale(13),
  f14: scale(14),
  f15: scale(15),
  f16: scale(16),
  f18: scale(18),
  f20: scale(20),
  f25: scale(25),
  f35: scale(35),
};

export const fonts = {
  regular: '',
  medium: '',
  bold: '',
};
