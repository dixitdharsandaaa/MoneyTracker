import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from '../style';
import {colors} from '../../Constants/theme';

interface RNContainerProps {
  children: React.ReactNode;
}

const RNContainer: React.FC<RNContainerProps> = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.secondary} />
      {children}
    </SafeAreaView>
  );
};

export default RNContainer;
