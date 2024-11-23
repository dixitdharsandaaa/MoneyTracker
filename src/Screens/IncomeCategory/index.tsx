import React, {useCallback, useState} from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import {FlatList, View} from 'native-base';
import {getCategory} from '../../Sqlite/SqliteService';
import {staticString} from '../../Constants/staticString';
import CommomCategoryItem from '../../Components/CommomCategoryItem';
import {moderateScale} from 'react-native-size-matters';
import {useFocusEffect} from '@react-navigation/native';

interface Category {
  id: number;
  name: string;
  icon_name: string;
}

const IncomeCategory: React.FC = () => {
  const [category, setCategory] = useState<Category[]>([]);

  useFocusEffect(
    useCallback(() => {
      getIcomeCategory();
    }, []),
  );

  const getIcomeCategory = () => {
    getCategory(staticString.INCOME)
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

  const RenderCategoryItem = React.memo(({item}: {item: any}) => {
    return <CommomCategoryItem item={item} />;
  });

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
};

export default IncomeCategory;
