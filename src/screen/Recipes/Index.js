import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  FlatList,
  Image

} from 'react-native';
import CustomHeader from '../../global/CustomHeader';
import BottomSheet from 'react-native-simple-bottom-sheet';
import LinearGradient from 'react-native-linear-gradient';
import Octicons from 'react-native-vector-icons/Octicons'
import { COLORS } from '../../constants';
import { FONTS } from '../../constants/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import GlobalStyle from '../../styles/GlobalStyle';
import CommHeader from '../../global/CommHeader';
import images from '../../constants/images';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import icons from '../../constants/icons';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import CustomBottomSheet from '../../global/CustomBottomSheet';
import ToolBarIcon from '../../utils/ToolBarIcon';
import { RecipeSkel } from '../../utils/Skeleton';
import Header from '../../global/Header';


const Recipes = ({ navigation }) => {

  const [fav, setFva] = useState(false)
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
      image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Tandoori-Fish-750x750.jpg',
      name: "Fish",
      id: 1,
      weight: '67.2 kg'
    },
    {
      image: 'https://static.toiimg.com/thumb/62457617.cms?resizemode=4&width=1200',
      selected: false,
      name: "Egg dish",
      id: 5,
      weight: '90.2 kg'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1xVA3595J_XT7WNMf1Y4rLoLaLJlE5Ds3r-TO8Inog&s',
      selected: false,
      name: "Berries",
      id: 5,
      weight: '90.2 kg'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBI6QAwmjTmPGlfMbHW8dw0DxNd6Jv3VRU5szH1Tfsw&s',
      selected: false,
      name: "Organic",
      id: 5,
      weight: '90.2 kg'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ54i5OWCgKZiieCIqRfmHxD2-3L2TFX5HgMq1O16LT1w&s',
      selected: false,
      name: "Soy",
      id: 5,
      weight: '90.2 kg'
    },
    {
      image: 'https://www.shutterstock.com/image-photo/bowl-fresh-mixed-berries-yogurt-260nw-175231781.jpg',
      selected: false,
      name: "Yogurt",
      id: 5,
      weight: '90.2 kg'
    },

    {
      selected: true,
      image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Tandoori-Fish-750x750.jpg',
      name: "Fish",
      id: 1,
      weight: '67.2 kg'
    },
    {
      image: 'https://static.toiimg.com/thumb/62457617.cms?resizemode=4&width=1200',
      selected: false,
      name: "Egg dish",
      id: 5,
      weight: '90.2 kg'
    },
  ]);

  const renderShopLove = ({ item }) => {
    if (isLoading) {
      return <RecipeSkel />;
    } else {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RecipeDetails')
          }}
          style={[
            // GlobalStyle?.mainContainer,
            // GlobalStyle?.paddingHorizontal5,
            // GlobalStyle?.paddingVertical10,
            GlobalStyle?.marginVertical10,
            GlobalStyle?.borderRadius,
            , {
              flex: 1,
              width: '40%',
              // height: 170,
              borderRadius: 10,
              // borderWidth: 0.2,
              marginHorizontal: 5,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              // paddingHorizontal: 20,

              borderColor: COLORS?.gray,
              // flexDirection: 'row',
              // elevation: 5
            }]}
        >

          <ImageBackground

          >
            <Image
              source={{
                uri: item?.image
              }}
              style={{
                width: '100%',
                height: 150,
                // borderBottomLeftRadius: 10,
                // borderBottomRightRadius: 10,
                borderRadius: 10
              }}
            />
           
          </ImageBackground>
          <LinearGradient
            colors={['#00000070', '#00000080', '#00000090']}
            style={{
              flex: 1,
              width: '100%',
              height: 50,
              position: 'absolute',
              bottom: 0,
              right: 0,
              left: 0,
              paddingHorizontal: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10

            }}>
            <Text
              style={[
                GlobalStyle?.fontSize16,
                GlobalStyle?.colorWhite,
                GlobalStyle?.marginTop5
              ]}>
              {item?.name}
            </Text>
            <View
              style={[
                GlobalStyle?.flexRowJustifyBtwn,
                GlobalStyle?.marginTop3

              ]}
            >
              <Text
                style={[
                  GlobalStyle?.fontSize13,
                  GlobalStyle?.colorWhite
                ]}
              >
                All-food diet
              </Text>
              <Text
                style={[
                  GlobalStyle?.fontSize13,
                  {
                    color:COLORS.colorPrimary,
                    fontFamily:FONTS?.semi_bold,
                    fontSize:11
                  }
                ]}
              >
                400 Kcal
              </Text>
            </View>

          </LinearGradient>

        </TouchableOpacity>
      );
    }
  };

  return (
    <SafeAreaView
      style={[
        GlobalStyle?.mainContainer
      ]}
    >
      <Header
        title="Canteen menu"
      // onPressLeft={() => navigation.goBack(null)}
      />

      <ScrollView
      >
        <View
          style={[
            GlobalStyle?.marginHorizontal5,
            // GlobalStyle?.marginTop15
          ]}
        >

          <FlatList
            // horizontal
            ListEmptyComponent={isLoading ? RecipeSkel : null} // Show skeleton only when loading

            showsHorizontalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{
              flex: 1,
              paddingLeft: 10,
              paddingRight: 10,
              // paddingBottom: 10,
              paddingTop: 15,
            }}
            data={

              data
            }
            renderItem={renderShopLove}

          />

        </View>

        {/* <View style={[
          GlobalStyle?.marginHorizontal10,
          GlobalStyle?.marginTop15
        ]}>
          <KidsAppBorderWidthBtn
            height={55}
            width={'100%'}
            borderRadius={30}
            marginTop={30}
            textSize={17}
            borderWidth={2}
            iconPosition={'left'}
            icon={
              <AntDesign
                name='plus'
                size={25}
                color={COLORS?.customColor}
                style={{
                  marginRight: 15
                }}
              />
            }
            borderColor={COLORS?.customColor}

            textColor={COLORS?.customColor}
            text={('Add Goal')}
            backgroundColor={COLORS?.white}
            onPress={() => {
              // navigation.navigate('NewPlan');
              openBottomSheet();
            }}
            textStyle={{
              fontFamily: FONTS?.semi_bold,
              color: COLORS.colorPrimary,
            }}
          />
        </View> */}
        <View
          style={[
            GlobalStyle?.marginVertical10
          ]}
        />

      </ScrollView>



    </SafeAreaView>
  );
};

export default Recipes;
const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: 600,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(80, 190, 180, 0)', // Adjust opacity as needed
  },
  name: {
    fontSize: 20,
    color: COLORS.white,
    marginTop: 15,
    fontFamily: 'Montserrat-Medium',
  },
  email: {
    fontSize: 14,
    color: COLORS.white,
    fontFamily: 'Montserrat-Medium',
  },
});
