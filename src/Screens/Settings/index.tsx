import React, {useCallback, useState} from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import {View, VStack} from 'native-base';
import {constantString} from '../../Constants/constantString';
import RNHeader from '../../Components/RNHeader';
import TouchableButton from '../../Components/TouchableButton';
import RNModal from '../../Components/RNModal';
import {navigate} from '../../Navigation/NavigationServices';
import {routes} from '../../Constants/routes';
import {deleteExpense} from '../../Sqlite/SqliteService';

const Settings: React.FC = React.memo(() => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  const handleCloseDeleteModal = useCallback(() => {
    setShowDeleteModal(false);
  }, []);

  const handleCloseExportModal = useCallback(() => {
    setShowExportModal(false);
  }, []);

  const clickExportButton = () => {
    setShowExportModal(false);
  };

  const clickDeleteButton = () => {
    setShowDeleteModal(false);
    deleteExpense()
      .then(response => {})
      .catch(error => {})
      .finally(() => {});
  };

  return (
    <RNContainer>
      <RNHeader name={constantString.SETTINGS} />
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
            onPress={() => setShowExportModal(true)}
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
            message={constantString.DELETE_EXPENSE_DATA}
            buttonName={constantString.DELETE}
            buttonOnPress={clickDeleteButton}
          />
        )}
        {showExportModal && (
          <RNModal
            isOpen={showExportModal}
            onClose={handleCloseExportModal}
            message={constantString.EXPORT_DATA_MESSAGE}
            buttonName={constantString.EXPORT}
            buttonOnPress={clickExportButton}
          />
        )}
      </View>
    </RNContainer>
  );
});

export default Settings;
