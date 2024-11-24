import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../style';
import RNStatusBar from '../RNStatusBar';

interface RNContainerProps {
  children: React.ReactNode;
}

const RNContainer: React.FC<RNContainerProps> = React.memo(({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <RNStatusBar />
      {children}
    </SafeAreaView>
  );
});

export default RNContainer;
