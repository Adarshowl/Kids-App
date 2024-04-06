import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';


import { COLORS } from '../../constants/Colors';
import { useTranslation } from 'react-i18next';
import { FONTS } from '../../constants/Fonts';
import icons from '../../constants/icons';
import ChangePlanList from './changePlanList';
import { ShimmerView } from '../../utils/Skeleton';

const Meal1 = ({ navigation }) => {
  const [amount, setAmount] = useState(100);

  const { t } = useTranslation();
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const [data, setData] = useState([
    {
      selected: true,
      name: "High Protein",
      id: 1,
      weight: '67.2 kg',
      tittle: 'Meal-1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4yhcPXJearMtLb31qcJx5tYhau-27O6zgA&usqp=CAU'
    },
    {
      selected: false,
      name: "Low Glycemic",
      weight: '90.2 kg',
      tittle: 'Meal-2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1_fqiiEN68lpq4eT29mYmpqTIqU2fELS9g&usqp=CAU'

    },
    {

      selected: false,
      name: "Mediterranean",
      weight: '90.2 kg',
      tittle: 'Meal-3',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPMI_7GGMKD1VZzPx_8UjH0pBn_-4h_Oh-A&usqp=CAU'

    },
    {

      selected: false,
      name: "Paleo",
      weight: '90.2 kg',
      tittle: 'Meal-4',
      image: 'data:image/jpeg;base64,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'

    },


  ]);


  return (
    <SafeAreaView
      style={[
        // GlobalStyle.mainContainerBgColor,
        {
          // backgroundColor: theme?.colors?.bg_color_onBoard,
          flex: 1,
        },
      ]}>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}>
        <View
          style={
            {
              // flez: 1,
            }
          }>
          <FlatList
            style={{
              paddingStart: 5,
              paddingEnd: 5,
              paddingTop: 15
            }}
            ListEmptyComponent={isLoading ? ShimmerView : null}

            ListHeaderComponent={() => {
              return <View style={{}} />;
            }}

            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item, index }) => <ChangePlanList item={item}
              isLoading={isLoading}
            />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default Meal1;
