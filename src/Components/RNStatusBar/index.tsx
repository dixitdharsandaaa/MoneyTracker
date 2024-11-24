import React from 'react';
import {StatusBar} from 'react-native';
import {colors} from '../../Constants/theme';

const RNStatusBar: React.FC = () => {
  return (
    <StatusBar barStyle={'dark-content'} backgroundColor={colors.secondary} />
  );
};

export default React.memo(RNStatusBar);
