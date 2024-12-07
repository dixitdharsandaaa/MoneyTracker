import React, {useCallback, useLayoutEffect, useState} from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import {FlatList, HStack, View} from 'native-base';
import RNHeader from '../../Components/RNHeader';
import PlusIcon from '../../Components/PlusIcon';
import {navigate} from '../../Navigation/NavigationServices';
import {routes} from '../../Constants/routes';
import {constantString} from '../../Constants/constantString';
import {getIncomeAndExpense} from '../../Sqlite/SqliteService';
import RNText from '../../Components/RNText';
import {colors, sizes} from '../../Constants/theme';
import RNShowCategoryIcon from '../../Components/RNShowCategoryIcon';
import {currentMonthDateDay} from '../../Constants/utils';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

interface IncomeAndExpenseArray {
  amount: number;
  category_id: number;
  created_at: string;
  description: string;
  id: number;
  type: string;
}

const Home: React.FC = React.memo(() => {
  const [incomeAndExpense, setIncomeAndExpense] = useState<
    IncomeAndExpenseArray[]
  >([]);
  const [expense, setExpense] = useState<number>(0);

  useFocusEffect(
    useCallback(() => {
      getIncomeAndExpenseRecord();
    }, []),
  );

  const getIncomeAndExpenseRecord = () => {
    getIncomeAndExpense()
      .then(response => {
        const data = response?.data;
        if (data?.length > 0) {
          const totalAmount = data?.reduce(
            (total, transaction) => total + transaction?.amount || 0,
            0,
          );
          setExpense(totalAmount);
          setIncomeAndExpense(data);
        } else {
          setExpense(0);
          setIncomeAndExpense([]);
        }
      })
      .catch(error => {})
      .finally(() => {});
  };

  const RenderIcomeAndExpense = React.memo(({item}: {item: any}) => (
    <TouchableOpacity
      onPress={() =>
        navigate(routes.ADD_UPDATE_INCOME_EXPENSE, {data: item, update: true})
      }>
      <HStack
        py={2}
        mb={2}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <HStack alignItems={'center'} space={2}>
          <RNShowCategoryIcon iconName={item?.category_icon} />
          <RNText
            text={item?.category_name}
            color={colors.black}
            fontSize={sizes.f12}
          />
        </HStack>
        <HStack alignItems={'center'} space={0.5}>
          <Icon
            name="rupee-sign"
            color={item?.category_type == 'Expense' ? colors.red : colors.green}
            size={sizes.f10}
          />
          <RNText
            text={item?.amount}
            color={item?.category_type == 'Expense' ? colors.red : colors.green}
            fontSize={sizes.f12}
          />
        </HStack>
      </HStack>
    </TouchableOpacity>
  ));

  return (
    <RNContainer>
      <RNHeader name={constantString.HOME} />
      <View flex={1}>
        <HStack
          px={5}
          py={2}
          borderBottomWidth={0.5}
          borderBottomColor={colors.gray}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <RNText
            text={currentMonthDateDay}
            color={colors.black}
            fontSize={sizes.f12}
          />
          <HStack alignItems={'center'}>
            <RNText
              text={`${constantString.EXPENSE}: `}
              color={colors.black}
              fontSize={sizes.f12}
            />
            <RNText text={expense} color={colors.black} fontSize={sizes.f12} />
          </HStack>
        </HStack>
        <View flex={1} px={5}>
          <FlatList
            data={incomeAndExpense}
            renderItem={({item}) => <RenderIcomeAndExpense item={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<View pt={3} />}
            ListFooterComponent={<View pb={16} />}
          />
        </View>
      </View>
      <PlusIcon onPress={() => navigate(routes.SELECT_CATEGORY)} />
    </RNContainer>
  );
});

export default Home;
