import {HStack, Modal} from 'native-base';
import React from 'react';
import DateTimePicker from 'react-native-ui-datepicker';
import {colors} from '../../Constants/theme';
import RNButton from '../RNButton';
import {constantString} from '../../Constants/constantString';

interface RNDatePickerModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  date?: string;
  onChange?: (date: object) => void;
}

const RNDatePickerModal: React.FC<RNDatePickerModalProps> = ({
  isOpen,
  onClose,
  date,
  onChange,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
      <Modal.Content px={4} py={4}>
        <DateTimePicker
          mode="single"
          date={date}
          onChange={onChange}
          displayFullDays={true}
          initialView={'day'}
          timePicker={false}
          calendarTextStyle={{
            color: colors.black,
          }}
          selectedTextStyle={{
            color: colors.white,
          }}
          selectedItemColor={colors.primary}
          headerTextStyle={{color: colors.black}}
          headerButtonColor={colors.primary}
          dayContainerStyle={{}}
          monthContainerStyle={{}}
          yearContainerStyle={{}}
          weekDaysContainerStyle={{}}
          weekDaysTextStyle={{color: colors.secondary}}
        />
        <Modal.Footer borderTopWidth={0} px={0} py={0}>
          <HStack alignItems={'center'} flex={1} space={2}>
            <RNButton
              removeBackgroundColor={true}
              name={constantString.CLOSE}
              onPress={onClose}
            />
            <RNButton
              name={constantString.CONFIRM}
              removeBackgroundColor={true}
              onPress={onClose}
            />
          </HStack>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default RNDatePickerModal;
