import React from 'react';
import RNText from '../RNText';
import {buttonStyle, colors, fonts, sizes} from '../../Constants/theme';
import {HStack, View} from 'native-base';
import RNButton from '../RNButton';
import {constantString} from '../../Constants/constantString';
import {Modal} from 'react-native';

interface RNModalProps {
  isOpen?: boolean;
  message?: string;
  onClose?: () => void;
  buttonName: string;
  buttonOnPress: () => void;
}

const RNModal: React.FC<RNModalProps> = React.memo(
  ({isOpen, onClose, message, buttonName, buttonOnPress}) => {
    return (
      <Modal
        transparent={true}
        visible={isOpen}
        onRequestClose={onClose}
        animationType="slide">
        <View
          flex={1}
          justifyContent={'center'}
          backgroundColor={colors.black_opacity}
          px={8}>
          <View backgroundColor={colors.white} py={4} px={4} borderRadius={6}>
            <RNText
              text={message || ''}
              color={colors.black}
              fontSize={sizes.f12}
              fontFamily={fonts.medium}
            />
            <HStack mt={2} justifyContent={'flex-end'} space={2}>
              <RNButton
                name={constantString.CLOSE}
                removeBackgroundColor={true}
                onPress={onClose}
                style={buttonStyle.width60}
              />
              <RNButton
                name={buttonName}
                removeBackgroundColor={true}
                onPress={buttonOnPress}
                style={buttonStyle.width60}
              />
            </HStack>
          </View>
        </View>
      </Modal>
    );
  },
);

export default RNModal;
