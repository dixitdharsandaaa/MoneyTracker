import {Modal} from 'react-native';
import {buttonStyle, colors, sizes} from '../../Constants/theme';
import {HStack, View} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import RNButton from '../RNButton';
import {constantString} from '../../Constants/constantString';
import LeftArrowIcon from '../LeftArrowIcon';
import RightArrowIcon from '../RightArrowIcon';
import {
  appDisplayFormateDate,
  currentDate,
  dbFormateDate,
} from '../../Constants/utils';

interface RNDatePickerModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  value?: string;
  onConfirm?: (date: any | undefined) => void;
}

const RNDatePickerModal: React.FC<RNDatePickerModalProps> = React.memo(
  ({isOpen, onClose, value, onConfirm}) => {
    const [selected, setSelected] = useState('');

    useEffect(() => {
      if (value) {
        setSelected(appDisplayFormateDate(value));
      }
    }, [value]);

    const handleDayPress = useCallback((day: any) => {
      setSelected(day.dateString);
    }, []);

    const handleConfirm = useCallback(() => {
      const date = selected ? dbFormateDate(selected) : currentDate;
      onConfirm?.(date);
    }, [selected, onConfirm]);

    const handleClose = useCallback(() => {
      onClose?.();
    }, [onClose]);

    const MemoizedCalendar = React.memo(() => (
      <Calendar
        style={{borderRadius: 6}}
        theme={{
          calendarBackground: colors.white,
          textSectionTitleColor: colors.primary,
          selectedDayBackgroundColor: colors.primary,
          selectedDayTextColor: colors.white,
          todayTextColor: colors.primary,
          dayTextColor: colors.black,
          textDisabledColor: colors.gray,
          textDayFontSize: sizes.f13,
          textMonthFontSize: sizes.f13,
          // textDayHeaderFontSize: sizes.f12,
        }}
        // hideExtraDays={true}
        renderArrow={(direction: string) =>
          direction == 'left' ? <LeftArrowIcon /> : <RightArrowIcon />
        }
        scrollEnabled={false}
        onDayPress={handleDayPress}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            // selectedDotColor: 'red',
            selectedColor: colors.primary,
          },
        }}
        current={selected}
        // markingType={'simple'} // You can use 'simple', 'multi-dot', or 'period'
      />
    ));

    return (
      <Modal
        transparent={true}
        visible={isOpen}
        onRequestClose={handleClose}
        animationType="slide">
        <View
          flex={1}
          justifyContent={'center'}
          backgroundColor={colors.black_opacity}
          px={7}>
          <View borderRadius={6} backgroundColor={colors.white}>
            <MemoizedCalendar />
            <HStack justifyContent={'flex-end'} pb={2} space={2} pr={4}>
              <RNButton
                name={constantString.CLOSE}
                removeBackgroundColor={true}
                style={buttonStyle.width60}
                onPress={handleClose}
              />
              <RNButton
                name={constantString.CONFIRM}
                removeBackgroundColor={true}
                style={buttonStyle.width60}
                onPress={handleConfirm}
              />
            </HStack>
          </View>
        </View>
      </Modal>
    );
  },
);
export default RNDatePickerModal;
