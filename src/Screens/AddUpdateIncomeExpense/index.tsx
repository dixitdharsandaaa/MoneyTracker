import React, {useCallback, useEffect, useState} from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import RNHeader from '../../Components/RNHeader';
import {HStack, ScrollView, View, VStack} from 'native-base';
import RNTextInput from '../../Components/RNTextInput';
import {constantString} from '../../Constants/constantString';
import RNSelectDate from '../../Components/RNSelectDate';
import {
  appFormateDate,
  currentDate,
  dbFormateDate,
} from '../../Constants/utils';
import RNDatePickerModal from '../../Components/RNDatePickerModal';
import RNButton from '../../Components/RNButton';
import RNShowCategory from '../../Components/RNShowCategory';
import {resetNavigationStack} from '../../Navigation/NavigationServices';
import {routes} from '../../Constants/routes';
import {
  deleteIncomeAndExpense,
  insertIncomeAndExpense,
  updateIncomeAndExpense,
} from '../../Sqlite/SqliteService';
import DeleteIcon from '../../Components/DeleteIcon';
import RNModal from '../../Components/RNModal';

interface AddUpdateIncomeExpenseProps {
  route?: any;
}

const AddUpdateIncomeExpense: React.FC<AddUpdateIncomeExpenseProps> =
  React.memo(({route}) => {
    const category = route?.params?.category;
    const update = route?.params?.update;
    const data = route?.params?.data;
    const [amount, setAmount] = useState<string>('0');
    const [date, setDate] = useState<string>(currentDate);
    const [description, setDescription] = useState<string>('');
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [categoryInfo, setCategoryInfo] = useState<any>(null);

    useEffect(() => {
      if (category) {
        setCategoryInfo(category);
      }
    }, [category]);

    useEffect(() => {
      if (data && update) {
        const category: any = {
          icon_name: data?.category_icon,
          id: data?.category_id,
          name: data?.category_name,
          type: data?.category_type,
        };
        setCategoryInfo(category);
        setAmount(data?.amount?.toString());
        setDate(data?.created_at);
        setDescription(data?.description);
      }
    }, [data, update]);

    const clickSubmitButton = () => {
      const payload = {
        categoryId: categoryInfo?.id,
        categoryType: categoryInfo?.type,
        amount: Number(amount),
        description: description,
        date: dbFormateDate(date),
        categoryIconName: categoryInfo?.icon_name,
        categoryName: categoryInfo?.name,
      };
      insertIncomeAndExpense(payload)
        .then(response => {
          if (response) {
            resetNavigationStack(routes.MAIN_TAB_NAVIGATION);
          }
        })
        .catch(error => {})
        .finally(() => {});
    };

    const clickUpdateButton = () => {
      const payload = {
        id: data?.id,
        amount: Number(amount),
        description: description,
        date: dbFormateDate(date),
      };
      updateIncomeAndExpense(payload)
        .then(response => {
          if (response) {
            resetNavigationStack(routes.MAIN_TAB_NAVIGATION);
          }
        })
        .catch(error => {})
        .finally(() => {});
    };

    const clickDeleteButton = () => {
      setShowDeleteModal(false);
      deleteIncomeAndExpense(data?.id)
        .then(response => {
          if (response) {
            resetNavigationStack(routes.MAIN_TAB_NAVIGATION);
          }
        })
        .catch(error => {})
        .finally(() => {});
    };

    const handleCloseDeleteModal = useCallback(() => {
      setShowDeleteModal(false);
    }, []);

    return (
      <RNContainer>
        <RNHeader
          showBackArrow={true}
          showDeleteIcon={update}
          deleteOnPress={() => setShowDeleteModal(true)}
        />
        <View flex={1} px={5}>
          <ScrollView flex={1} showsVerticalScrollIndicator={false}>
            <VStack flex={1} mb={5} space={4} mt={5}>
              <RNShowCategory item={categoryInfo} />
              <RNSelectDate
                value={date}
                onPress={() => setShowDatePicker(true)}
              />
              <RNTextInput
                value={amount}
                onChangeText={val => {
                  let value = val
                    ?.replace(/[^0-9.]/g, '')
                    ?.replace(/(\.\d{2}).*/, '$1');
                  setAmount(value);
                }}
                label={constantString.AMOUNT}
                keyboardType={'numeric'}
                maxLength={10}
              />
              <RNTextInput
                value={description}
                onChangeText={val => setDescription(val)}
                label={constantString.DESCRIPTION}
                multiline={true}
              />
              <RNButton
                name={update ? constantString.UPDATE : constantString.SUBMIT}
                onPress={update ? clickUpdateButton : clickSubmitButton}
              />
            </VStack>
          </ScrollView>
        </View>
        <RNDatePickerModal
          isOpen={showDatePicker}
          onClose={() => setShowDatePicker(false)}
          value={date}
          onConfirm={value => {
            setDate(appFormateDate(value));
            setShowDatePicker(false);
          }}
        />
        <RNModal
          isOpen={showDeleteModal}
          onClose={handleCloseDeleteModal}
          message={constantString.DELETE_EXPENSE_ENTRY}
          buttonName={constantString.DELETE}
          buttonOnPress={clickDeleteButton}
        />
      </RNContainer>
    );
  });

export default AddUpdateIncomeExpense;
