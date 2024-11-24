import React, {useState} from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import {FlatList, View} from 'native-base';
import RNText from '../../Components/RNText';
import {constantString} from '../../Constants/constantString';
import RNHeader from '../../Components/RNHeader';
import {TouchableOpacity} from 'react-native';
import {colors, fonts, sizes} from '../../Constants/theme';

type Month = {
  name: string;
};

const Graph: React.FC = () => {
  const [activeMonthIndex, setActiveMonthIndex] = useState<Number>(0);

  const monthArray: Month[] = [
    {name: constantString.JANUARY},
    {name: constantString.FEBRUARY},
    {name: constantString.MARCH},
    {name: constantString.APRIL},
    {name: constantString.MAY},
    {name: constantString.JUNE},
    {name: constantString.JULY},
    {name: constantString.AUGUST},
    {name: constantString.SEPTEMBER},
    {name: constantString.OCTOBER},
    {name: constantString.NOVEMBER},
    {name: constantString.DECEMBER},
  ];

  const renderMonthItem = ({item, index}: {item: Month; index: Number}) => {
    const borderWidth = index == activeMonthIndex ? 2 : 0;
    return (
      <View
        pt={3.5}
        pb={3.5}
        px={4}
        mx={1}
        borderBottomWidth={borderWidth}
        borderColor={colors.white}>
        <TouchableOpacity onPress={() => setActiveMonthIndex(index)}>
          <RNText
            color={colors.white}
            text={item?.name}
            fontSize={sizes.f11}
            fontFamily={fonts.medium}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <RNContainer>
      <RNHeader />
      <View backgroundColor={colors.primary}>
        <FlatList
          data={monthArray}
          renderItem={renderMonthItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View flex={1}></View>
    </RNContainer>
  );
};

export default React.memo(Graph);
