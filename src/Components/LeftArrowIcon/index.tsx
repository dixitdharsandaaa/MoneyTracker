import React from 'react';
import {colors, sizes} from '../../Constants/theme';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const LeftArrowIcon: React.FC = React.memo(() => {
  return <Icon name="arrow-left" color={colors.primary} size={sizes.f12} />;
});

export default LeftArrowIcon;
