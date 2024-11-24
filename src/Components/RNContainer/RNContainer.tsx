import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../style';
import {colors} from '../../Constants/theme';
import RNStatusBar from '../RNStatusBar';

interface RNContainerProps {
  children: React.ReactNode;
}

const RNContainer: React.FC<RNContainerProps> = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <RNStatusBar />
      {children}
    </SafeAreaView>
  );
};

export default React.memo(RNContainer);
