import {HStack, View} from 'native-base';
import React, {useCallback, useState} from 'react';
import RNText from '../RNText';
import {colors, fonts, sizes} from '../../Constants/theme';
import CalendarIcon from '../CalendarIcon';
import {TouchableOpacity} from 'react-native';
import RNDatePickerModal from '../RNDatePickerModal';
import {appDisplayFormateDate, currentDate} from '../../Constants/utils';

interface RNSelectDateProps {
  label?: string;
  value?: string;
}

const RNSelectDate: React.FC<RNSelectDateProps> = ({label, value}) => {
  const [selectDate, setSelectDate] = useState<string>(currentDate); // Default or initial date format
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleConfirm = useCallback((date: any) => {
    setSelectDate(appDisplayFormateDate(date));
    setShowDatePicker(false);
  }, []);

  const handleClose = useCallback(() => {
    setShowDatePicker(false);
  }, []);

  return (
    <>
      <TouchableOpacity
        disabled={false}
        onPress={() => setShowDatePicker(true)}>
        <HStack
          borderWidth={0.5}
          borderRadius={6}
          borderColor={colors.black}
          px={2.5}
          py={1.5}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <View>
            <RNText
              text={label || ''}
              color={colors.black}
              fontSize={sizes.f13}
              fontFamily={fonts.medium}
            />
            <RNText
              text={selectDate || ''}
              color={colors.primary}
              fontSize={sizes.f15}
              fontFamily={fonts.bold}
            />
          </View>
          <CalendarIcon disabled={true} color={colors.primary} />
        </HStack>
      </TouchableOpacity>
      <RNDatePickerModal
        isOpen={showDatePicker}
        onClose={handleClose}
        value={value}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default React.memo(RNSelectDate);
