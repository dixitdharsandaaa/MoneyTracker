import {Dimensions} from 'react-native';

// Destructure and assign the width and height
const {width, height} = Dimensions.get('screen');
export const screenWidth = width;
export const screenHeight = height;

export const colors = {
  primary: '#643ff6',
  secondary: '#9d34fb',
  black: '#000000',
  white: '#ffffff',
  light_white: '#f9f9f9',
  gray:'#C0C0C0'
};

export const sizes= {
  f5:5,
  f10: 10,
  f15: 15,
  f20: 20,
};

export const fonts = {
  regular: '',
  medium: '',
  bold: '',
};
