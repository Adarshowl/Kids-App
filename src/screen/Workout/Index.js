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


const Workout = ({ navigation }) => {

  const [fav, setFva] = useState(false)

  const [data, setData] = useState([
    {
      selected: true,
      image: 'data:image/jpeg;base64,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',
      name: "Push-up",
      id: 1,
      weight: '67.2 kg',
      set: '8 set'
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjm_YL7BVSs5QCV5Z85ZO7s-1LYhznTphGg&usqp=CAU",
      selected: false,
      name: "Plank",
      weight: '90.2 kg',
      set: '12 set'

    },
    {

      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX74PEaljM3LkGrRZ6QDeLa7IM1ObGOruS-g&usqp=CAU",
      selected: false,
      name: "Side planks",
      weight: '90.2 kg',
      set: '10 set'

    },
    {

      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmyrNnu-b4R-rXjfNh9zEPhgXF9bxkP7cXpg&usqp=CAU",
      selected: false,
      name: "Dumbbell rows",
      weight: '90.2 kg',
      set: '15 set'

    },


  ]);


  const [cardio, setCardio] = useState([
    {
      selected: true,
      image: 'data:image/jpeg;base64,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',
      name: "Dumbbell rows",
      id: 1,
      weight: '67.2 kg',
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjm_YL7BVSs5QCV5Z85ZO7s-1LYhznTphGg&usqp=CAU",
      selected: false,
      name: "Side planks",
      weight: '90.2 kg'
    },



  ]);

  const handleWorkoutButtonClick = () => {
    navigation.navigate('VideoPlayerCardio');
    // VideoPlayerWorkout
  };

  const handleCardioButtonClick = () => {
    navigation.navigate('VideoPlayerWorkout');
    // VideoPlayerCardio
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderShopLove = ({ item }) => {
    if (isLoading) {
      return <RecipeSkel />;
    } else {
      return (
        <TouchableOpacity
          onPress={handleWorkoutButtonClick}
          style={[
            // GlobalStyle?.mainContainer,
            // GlobalStyle?.paddingHorizontal5,
            // GlobalStyle?.paddingVertical10,
            GlobalStyle?.marginVertical10,
            // GlobalStyle?.borderRadius,
            , {
              flex: 1,
              width: '40%',
              // height: 170,
              borderRadius: 15,
              // borderWidth: 0.2,
              marginHorizontal: 8,
              borderBottomLeftRadius: 10,
              borderBottomRighRadius: 10,
              // paddingHorizontal: 20,

              borderColor: COLORS?.gray,
              // flexDirection: 'row',
              elevation: 5
            }]}
        >

          <Image
            style={{
              width: '100%',
              height: 160,
              // borderBottomLeftRadius: 10,
              // borderBottomRightRadius: 10,
              borderRadius: 15,
              // resizeMode:'contain',
            }}
            source={{
              uri: item.image
            }}

          >

          </Image>
          <LinearGradient
            colors={['#00000080', '#00000090', 'black']}
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
                GlobalStyle?.marginTop5, {
                  fontFamily: FONTS?.medium
                }
              ]}>
              {item?.name}
            </Text>
            <View
              style={[
                GlobalStyle?.flexRowJustifyBtwn,
                // GlobalStyle?.marginTop3

              ]}
            >
              <Text
                style={[
                  GlobalStyle?.fontSize13,
                  GlobalStyle?.colorWhite, {
                    fontFamily: FONTS?.medium
                  }
                ]}
              >
                Beginner
              </Text>
              <Text
                style={[
                  GlobalStyle?.fontSize13,
                  GlobalStyle?.colorWhite,
                  {
                    fontFamily: FONTS?.medium

                  }
                ]}
              >
                {item?.set}
              </Text>
            </View>

          </LinearGradient>

        </TouchableOpacity>
      );
    }
  };

  const renderCardio = ({ item }) => {
    if (isLoading) {
      return <RecipeSkel />;
    } else {
      return (
        <TouchableOpacity
          onPress={handleCardioButtonClick}
          style={[
            // GlobalStyle?.mainContainer,
            // GlobalStyle?.paddingHorizontal5,
            // GlobalStyle?.paddingVertical10,
            GlobalStyle?.marginVertical10,
            // GlobalStyle?.borderRadius,
            , {
              flex: 1,
              width: '40%',
              // height: 170,
              borderRadius: 15,
              // borderWidth: 0.2,
              marginHorizontal: 8,
              borderBottomLeftRadius: 10,
              borderBottomRighRadius: 10,
              // paddingHorizontal: 20,

              borderColor: COLORS?.gray,
              // flexDirection: 'row',
              elevation: 5
            }]}
        >

          <Image
            style={{
              width: '100%',
              height: 160,
              // borderBottomLeftRadius: 10,
              // borderBottomRightRadius: 10,
              borderRadius: 15,
              // resizeMode:'contain',
            }}
            source={{
              uri: item.image
            }}

          >

          </Image>
          <LinearGradient
            colors={['#00000080', '#00000090', 'black']}
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
                GlobalStyle?.marginTop5, {
                  fontFamily: FONTS?.medium
                }
              ]}>
              {item?.name}
            </Text>
            <View
              style={[
                GlobalStyle?.flexRowJustifyBtwn,
                // GlobalStyle?.marginTop3

              ]}
            >
              <Text
                style={[
                  GlobalStyle?.fontSize13,
                  GlobalStyle?.colorWhite, {
                    fontFamily: FONTS?.medium
                  }
                ]}
              >
                Beginner
              </Text>
              <Text
                style={[
                  GlobalStyle?.fontSize13,
                  GlobalStyle?.colorWhite,
                  {
                    fontFamily: FONTS?.medium

                  }
                ]}
              >
                35 min
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
      <View
        style={[
          GlobalStyle?.marginHorizontal10,
          GlobalStyle?.paddingVertical15,
          GlobalStyle?.marginTop15,
          GlobalStyle?.flexRowJustifyBtwn, {
          }
        ]}
      >
        <Text
          style={[
            GlobalStyle?.fontSize22,
            GlobalStyle?.marginLeft, {
              fontFamily: FONTS?.bold,
              fontSize: 24
            }
          ]}
        >
          Workouts
        </Text>


      </View>


      <ScrollView
      >
        <View
          style={[
            GlobalStyle?.marginHorizontal5,
            // GlobalStyle?.marginTop15
          ]}
        >

          <Text
            style={[
              GlobalStyle?.fontSize18,
              GlobalStyle?.marginHorizontal15, {
                fontSize: 22,
                fontFamily: FONTS?.medium
              }
            ]}
          >Strength Workout</Text>

          <FlatList
            // horizontal
            ListEmptyComponent={isLoading ? RecipeSkel : null} // Show skeleton only when loading

            showsHorizontalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{
              flex: 1,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 10,
              paddingTop: 15,
            }}
            data={

              data
            }
            renderItem={renderShopLove}

          />

          <Text
            style={[
              GlobalStyle?.fontSize18,
              GlobalStyle?.marginHorizontal15,
              GlobalStyle?.marginTop15,
              {
                fontSize: 22,
                fontFamily: FONTS?.medium
              }
            ]}
          >Cardio Workout</Text>

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

              cardio
            }
            renderItem={renderCardio}

          />

        </View>


        <View
          style={[
            GlobalStyle?.marginVertical10
          ]}
        />

      </ScrollView>



    </SafeAreaView>
  );
};

export default Workout;
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
