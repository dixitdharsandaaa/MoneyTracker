import React from 'react';
import RNText from '../RNText';
import {colors, fonts, sizes} from '../../Constants/theme';
import {AlertDialog, HStack, Modal} from 'native-base';
import RNButton from '../RNButton';
import {constantString} from '../../Constants/constantString';

interface RNModalProps {
  message?: string;
  isOpen?: () => void;
  onClose?: () => void;
}

const RNModal: React.FC<RNModalProps> = ({isOpen, onClose, message}) => {
  return (
    <AlertDialog isOpen={isOpen} onClose={onClose} size={'lg'}>
      <AlertDialog.Content>
        <AlertDialog.Body>
          <RNText
            text={message || ''}
            color={colors.black}
            fontSize={sizes.f12}
            fontFamily={fonts.medium}
          />
        </AlertDialog.Body>
        <AlertDialog.Footer borderTopWidth={0} pt={0}>
          <HStack flex={0.5} alignItems={'center'} space={2}>
            <RNButton
              name={constantString.CLOSE}
              removeBackgroundColor={true}
              onPress={onClose}
            />
            <RNButton
              name={constantString.DELETE}
              removeBackgroundColor={true}
              onPress={onClose}
            />
          </HStack>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default RNModal;
