import React, { useState, useRef } from 'react';
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
import SubscriptionPlan from './SubscriptionPlan';


const Profile = ({ navigation }) => {

  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };
  const [data, setData] = useState([
    {
      selected: true,

      name: "Starting Weight",
      id: 1,
      weight: '67.2 kg',
      image: icons?.startW,

    },
    {
      image: icons?.currentW,
      selected: false,
      name: "Current Weight",
      id: 5,
      weight: '90.2 kg'


    },
    {
      image: icons?.goalW,
      selected: false,
      name: "Goal Weight",
      id: 5,
      weight: '90.2 kg'
    },
  ]);

  const [actityy, setActivity] = useState([
    {
      selected: true,

      name: "Activity Level",
      id: 1,
      weight: 'Little or no exercise',
      image: icons?.activity,

    },
    {
      image: icons?.mealL,
      selected: false,
      name: "Meal Plan",
      id: 5,
      weight: 'keta'


    },
    {
      image: icons?.workoutplan,
      selected: false,
      name: "At Home",
      id: 5,
      weight: '90.2 kg'
    },
  ]);

  const renderShopLove = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          // GlobalStyle?.mainContainer,
          GlobalStyle?.paddingHorizontal5,
          GlobalStyle?.marginVertical10,
          GlobalStyle?.paddingVertical10,
          , {
            alignItems: 'center',
            marginHorizontal: 10
          }]}
      >
        <Image
          source={item?.image}
          style={{
            width: 30,
            height: 30,
            resizeMode: 'contain'
          }}
        />
        <View
          style={[
            GlobalStyle?.marginHorizontal5,
            GlobalStyle?.marginTop15,

          ]}>
          <View style={[

            {
              alignItems: 'center'
            }
          ]}>
            <View>
              <Text
                numberOfLines={1}
                style={[
                  GlobalStyle?.fontSize16,
                  GlobalStyle?.marginRight,
                  {
                    fontFamily: FONTS?.semi_bold
                  }
                ]}>{item?.weight}</Text>
            </View>

          </View>
          <View>
            <Text
              style={[
                GlobalStyle?.fontSize13,
                {
                  color: COLORS?.grey
                }
              ]}>{item?.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderActivityPlan = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          GlobalStyle?.mainContainer,
          // GlobalStyle?.paddingHorizontal10,
          GlobalStyle?.marginVertical10,
          GlobalStyle?.paddingVertical10,
          , {
            // alignItems: 'center',
            marginHorizontal: 6,
            elevation: 3,
            borderRadius: 10,
            width: 110
          }]}
      >
        <Image
          source={item?.image}
          style={{
            width: 30,
            height: 30,
            resizeMode: 'contain',
            marginLeft: 5
          }}
        />
        <View
          style={[
            GlobalStyle?.marginHorizontal5,
            GlobalStyle?.marginTop15,

          ]}>
          <View style={[

            {
              // alignItems: 'center'
            }
          ]}>
            <View>
              <Text
                numberOfLines={1}
                style={[
                  GlobalStyle?.fontSize16,
                  GlobalStyle?.marginRight,
                  {
                    fontFamily: FONTS?.semi_bold,
                    fontSize: 14
                  }
                ]}>{item?.name}</Text>
            </View>

          </View>
          <View>
            <Text
              numberOfLines={1}
              style={[
                GlobalStyle?.fontSize13,
                {
                  color: COLORS?.gray,
                  fontSize: 10
                }
              ]}>{item?.weight}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={[
        GlobalStyle?.mainContainer, {
          backgroundColor: "#FAFAFA"
        }
      ]}
    >
      <View
        style={[
          GlobalStyle?.marginHorizontal15,
          GlobalStyle?.paddingVertical15,
          GlobalStyle?.marginTop15,
          GlobalStyle?.flexRowJustifyBtwn, {
          }
        ]}
      >
        <Text
          style={[
            GlobalStyle?.fontSize22,
            GlobalStyle?.marginLeft15, {
              fontFamily: FONTS?.bold
            }
          ]}
        >
          Profile
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EditProfile')
          }}
          style={[
            GlobalStyle?.marginRight,
            GlobalStyle?.flexRowJustifyBtwn,
            {

            }
          ]}
        >

          <Text
            style={[
              GlobalStyle?.fontSize18, {
                fontSize: 20,
                fontFamily: FONTS?.regular

              }
            ]}
          >
            Edit
          </Text>

          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10573/10573605.png'
            }}
            style={{
              width: 20,
              height: 20,
              marginLeft: 8
            }}
          />

        </TouchableOpacity>

      </View>


      <ScrollView
      >
        <View
          style={[
            GlobalStyle?.marginHorizontal5,
            GlobalStyle?.marginTop15, {
              flex: 1
            }
          ]}
        >


          <View
            style={[
              GlobalStyle?.alignJustifyCenter
            ]}
          >
            <Image
              source={images?.profile}
              style={{
                width: 100,
                height: 100,

              }}
            />
            <Text
              style={[
                GlobalStyle?.fontSize18,
                GlobalStyle?.marginTop
              ]}
            >Johan Smith</Text>
            <Text
              style={[
                GlobalStyle?.fontSize13,{
                  color:COLORS?.grey
                }
              ]}
            >Build Muscle</Text>
          </View>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              // flex: 1,
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

          <View

            style={[
              // GlobalStyle?.flexRowAlignCenter,
              GlobalStyle?.marginHorizontal10,
              GlobalStyle?.paddingVertical15,
              GlobalStyle?.marginTop15,
              {
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                // borderWidth: 0.2,
                borderColor: COLORS?.gray,
                borderRadius: 15,
                backgroundColor: COLORS?.white,
                elevation: 3,
                alignItems: 'center',
                flex: 1
              }
            ]}>

            <View
              style={[
                GlobalStyle?.flexAlignJustifyCenter,
                , {
                  flex: 1
                }
              ]}
            >
              <View style={[
                GlobalStyle?.flexRowAlignCenter,
                , {
                  flex: 1
                }

              ]}>
                <Image
                  source={icons?.calories}
                  style={{
                    width: 18,
                    height: 16,
                    resizeMode: 'contain'
                  }}
                />
                <Text
                  style={[
                    GlobalStyle?.fontSize18,
                    GlobalStyle?.marginLeft,
                  ]}
                >Calories</Text>
              </View>
              <Text
                style={[
                  GlobalStyle?.fontSize13,{
                    color:COLORS?.grey

                  }
                ]}
              >Budget, 2050 Kcal</Text>
              <ImageBackground
                source={images?.circle}
                style={{
                  width: 90,
                  height: 90,
                  marginTop: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1
                }}
              >
                <Text
                  style={[
                    GlobalStyle?.fontSize13,
                    // GlobalStyle?.marginLeft, 
                    {
                      color:COLORS?.grey
                    }
                  ]}
                >kcal</Text>
                <Text
                  style={[
                    GlobalStyle?.fontSize16,
                    // GlobalStyle?.marginLeft,
                    {
                      fontFamily: FONTS?.bold
                    }
                  ]}
                >800</Text>
              </ImageBackground>

            </View>
            <View
              style={[GlobalStyle?.line]}
            />
            <View
              style={[
                GlobalStyle?.flexAlignJustifyCenter,
                {
                  flex: 1
                }
              ]}
            >
              <View style={[
                GlobalStyle?.flexRowAlignCenter,
                , {
                  flex: 1
                }
              ]}>
                <Image
                  source={icons?.goal}
                  style={{
                    width: 18,
                    height: 18,
                    resizeMode: 'contain'
                  }}
                />
                <Text
                  style={[
                    GlobalStyle?.fontSize18,
                    GlobalStyle?.marginLeft,
                  ]}
                >Goal</Text>
              </View>
              <Text
                style={[
                  GlobalStyle?.fontSize13,{
                    color:COLORS?.grey

                  }
                ]}
              >Build Muscle</Text>
              <Image
                source={icons?.lineBar}
                style={{
                  width: '60%',
                  height: 50,
                  marginTop: 15,

                }}
              />
              <Text
                style={[
                  GlobalStyle?.fontSize18,
                  GlobalStyle?.marginTop15,
                  {

                  }
                ]}
              >72.2 Kg</Text>

            </View>

          </View>


          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              // flex: 1,
              paddingLeft: 10,
              paddingRight: 10,
              // paddingBottom: 10,
              paddingTop: 15,
            }}
            data={

              actityy
            }
            renderItem={renderActivityPlan}

          />
          <Text
            style={[
              GlobalStyle?.fontSize18,
              GlobalStyle?.marginLeft15,
              GlobalStyle?.marginTop15
            ]}
          >Your Subscription Plan</Text>

          <SubscriptionPlan />

        </View>

        <View style={[
          GlobalStyle?.marginHorizontal10,
          GlobalStyle?.marginTop15
        ]}>
          <KidsAppCommBtn
            height={55}
            width={'100%'}
            borderRadius={30}
            marginTop={30}
            textSize={18}
            borderWidth={2}

            borderColor={COLORS?.customColor}

            textColor={COLORS?.white}
            text={('Grocery List')}
            backgroundColor={COLORS?.white}
            onPress={() => {
              navigation.navigate('GroceryList');
              // openBottomSheet();
            }}
            textStyle={{
              fontFamily: FONTS?.semi_bold,
            }}
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

export default Profile;
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
});
