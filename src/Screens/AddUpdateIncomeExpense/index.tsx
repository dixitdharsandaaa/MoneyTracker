import React, {useState} from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import RNHeader from '../../Components/RNHeader';
import {View, VStack} from 'native-base';
import RNTextInput from '../../Components/RNTextInput';
import {constantString} from '../../Constants/constantString';
import RNSelectDate from '../../Components/RNSelectDate';
import RNButton from '../../Components/RNButton';
import {currentDate} from '../../Constants/utils';

const AddUpdateIncomeExpense: React.FC = React.memo(() => {
  const [amount, setAmount] = useState<string>('0');
  const [description, setDescription] = useState<string>('');

  const clickSubmitButton = () => {};

  return (
    <RNContainer>
      <RNHeader showBackArrow={true} />
      <View flex={1} px={5}>
        <VStack flex={1} space={4} mt={5} mb={5}>
          <RNTextInput
            label={constantString.AMOUNT}
            value={amount}
            onChangeText={val => setAmount(val)}
            maxLength={10}
            keyboardType={'numeric'}
          />
          <RNSelectDate label={constantString.DATE} value={currentDate} />
          <RNTextInput
            label={constantString.DESCRIPTION}
            value={description}
            onChangeText={val => setDescription(val)}
            multiline={true}
          />
          <RNButton name={constantString.SUBMIT} onPress={clickSubmitButton} />
        </VStack>
      </View>
    </RNContainer>
  );
});

export default AddUpdateIncomeExpense;
