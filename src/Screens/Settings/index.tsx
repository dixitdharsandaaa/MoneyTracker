import React, {useCallback, useState} from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import {View, VStack} from 'native-base';
import {constantString} from '../../Constants/constantString';
import RNHeader from '../../Components/RNHeader';
import TouchableButton from '../../Components/TouchableButton';
import RNModal from '../../Components/RNModal';
import {navigate} from '../../Navigation/NavigationServices';
import {routes} from '../../Constants/routes';

const Settings: React.FC = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCloseDeleteModal = useCallback(() => {
    setShowDeleteModal(false);
  }, []);

  return (
    <RNContainer>
      <RNHeader />
      <View flex={1} px={5}>
        <VStack space={2} mt={6}>
          <TouchableButton
            iconName={'user-alt'}
            name={constantString.PROFILE}
            onPress={() => navigate(routes.PROFILE)}
          />
          <TouchableButton
            iconName={'palette'}
            name={constantString.THEME}
            onPress={() => navigate(routes.THEME)}
          />
          <TouchableButton
            iconName={'file-export'}
            name={constantString.EXPORT_DATA}
            mt={3}
            onPress={() => {}}
          />
          <TouchableButton
            iconName={'trash-alt'}
            name={constantString.DELETE_ALL_DATA}
            onPress={() => setShowDeleteModal(true)}
          />
          <TouchableButton
            iconName={'file-alt'}
            name={constantString.TERMS_OF_USE}
            mt={3}
            onPress={() => {}}
          />
          <TouchableButton
            iconName={'clipboard-check'}
            name={constantString.PRIVACY_POLICY}
            onPress={() => {}}
          />
          <TouchableButton
            iconName={'question-circle'}
            name={constantString.ABOUT_US}
            onPress={() => {}}
          />
          <TouchableButton
            iconName={'envelope-open-text'}
            name={constantString.FEEDBACK}
            onPress={() => {}}
          />
        </VStack>
        {showDeleteModal && (
          <RNModal
            isOpen={showDeleteModal}
            onClose={handleCloseDeleteModal}
            message={'Are you sure you want to delete this data?'}
          />
        )}
      </View>
    </RNContainer>
  );
};

export default React.memo(Settings);
