import React, {useLayoutEffect, useState} from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import {FlatList, View} from 'native-base';
import {staticString} from '../../Constants/staticString';
import {getCategory} from '../../Sqlite/SqliteService';
import {moderateScale} from 'react-native-size-matters';
import CommomCategoryItem from '../../Components/CommomCategoryItem';
import {navigate} from '../../Navigation/NavigationServices';
import {routes} from '../../Constants/routes';

interface Category {
  id: number;
  name: string;
  icon_name: string;
}

interface ExpenseCategoryProps {
  route?: any;
}

const ExpenseCategory: React.FC<ExpenseCategoryProps> = React.memo(
  ({route}) => {
    const addCategory = route?.params?.addCategory;
    const [category, setCategory] = useState<Category[]>([]);

    useLayoutEffect(() => {
      getExpenseCategory();
    }, []);

    const getExpenseCategory = () => {
      getCategory(staticString.EXPENSE)
        .then(response => {
          if (response?.data?.length > 0) {
            setCategory(response?.data);
          } else {
            setCategory([]);
          }
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {});
    };

    const RenderCategoryItem = React.memo(({item}: {item: any}) => (
      <CommomCategoryItem
        item={item}
        onPress={() => {
          if (addCategory) {
            navigate(routes.ADD_UPDATE_CATEGORY, {item: item});
          } else {
            navigate(routes.ADD_UPDATE_INCOME_EXPENSE, {
              category: item,
              update: false,
            });
          }
        }}
      />
    ));

    return (
      <RNContainer>
        <View flex={1} px={5}>
          <FlatList
            data={category}
            renderItem={({item}) => <RenderCategoryItem item={item} />}
            keyExtractor={(item: any) => item?.id}
            showsVerticalScrollIndicator={false}
            numColumns={4}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginTop: moderateScale(25),
            }}
          />
        </View>
      </RNContainer>
    );
  },
);

export default ExpenseCategory;
