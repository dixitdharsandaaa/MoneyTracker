import React from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import RNHeader from '../../Components/RNHeader';
import {View} from 'native-base';

interface AddUpdateCategoryProps {
  route?: any;
}

const AddUpdateCategory: React.FC<AddUpdateCategoryProps> = React.memo(
  ({route}) => {
    const data = route?.params?.item;
    return (
      <RNContainer>
        <RNHeader showBackArrow={true} />
        <View flex={1} px={5}></View>
      </RNContainer>
    );
  },
);

export default AddUpdateCategory;
