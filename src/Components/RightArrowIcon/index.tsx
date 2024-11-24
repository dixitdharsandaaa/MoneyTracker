import React from 'react';
import {colors, sizes} from '../../Constants/theme';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const RightArrowIcon: React.FC = React.memo(() => {
  return <Icon name="arrow-right" color={colors.primary} size={sizes.f12} />;
});

export default RightArrowIcon;
