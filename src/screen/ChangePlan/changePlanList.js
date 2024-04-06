import React, { memo, useContext, useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { COLORS } from '../../constants/Colors';

import { FONTS } from '../../constants/Fonts';
// import moment from 'moment';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GlobalStyle from '../../styles/GlobalStyle';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ShimmerView } from '../../utils/Skeleton';

const changePlanList = ({ item, isLoading }) => {

  if (isLoading) {
    return <ShimmerView />;
  } else {

    return (
      <TouchableOpacity
        style={[
          GlobalStyle?.mainContainer,
          GlobalStyle?.marginTop15,
          GlobalStyle?.paddingVertical10,
          GlobalStyle?.marginVertical10,

          , {
            width: '100%',
            // height: 170,
            borderRadius: 8,
            marginHorizontal: 0,
            marginVertical: 10,
            // borderWidth: 0.2,
            // marginHorizontal:5,
            paddingHorizontal: 10,

            // borderColor: COLORS?.gray,
            flexDirection: 'row',
            // elevation: 3,
            // borderWidth: 0.2,

          }]}
      >

        <Image
          source={{
            uri: item?.image
          }}
          style={{
            width: 110,
            height: 85,
            borderRadius: 10
            // resizeMode: 'contain'
          }}
        />



        <View
          style={[
            GlobalStyle?.marginHorizontal5,
            GlobalStyle?.marginLeft15,

          ]}>

          <View>
            <Text
              style={[
                GlobalStyle?.fontSize13,
                GlobalStyle?.marginTop5,
                {
                  fontFamily: FONTS?.medium
                }
              ]}>{item?.tittle}</Text>
          </View>

          <View>
            <Text
              style={[
                GlobalStyle?.fontSize18,
                GlobalStyle?.marginTop5,

                {
                  fontFamily: FONTS?.semi_bold
                }
              ]}>{item?.name}</Text>
          </View>
          <View
            style={[
              GlobalStyle?.flexRowJustifyBtwn,
              GlobalStyle?.marginTop5,
              {
                flex: 1,
              }
            ]}
          >
            <View
              style={[
                // GlobalStyle?.flexRowAlignCenter,
                , {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              ]}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/13195/13195071.png'
                }}
                style={{
                  width: 20,
                  height: 22,
                  alignItems: 'center'
                }}
              />
              <Text
                style={[
                  GlobalStyle?.fontSize13,
                  GlobalStyle?.colorBlack,
                  {
                    marginLeft: 5,
                    fontFamily: FONTS?.semi_bold,
                  }
                ]}>125 Kcal</Text>
            </View>
            <View
              style={[
                // GlobalStyle?.flexRowAlignCenter,
                , {
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 15
                }
              ]}>

              <AntDesign
                name="clockcircle"
                size={15}
                color={COLORS?.green}
              />
              <Text
                style={[
                  GlobalStyle?.fontSize13,
                  GlobalStyle?.colorBlack,
                  {
                    marginLeft: 5,
                    fontFamily: FONTS?.semi_bold,
                  }
                ]}
              >Serving: 2.18</Text>
            </View>
          </View>


        </View>



      </TouchableOpacity>
    );
  }
};

export default memo(changePlanList);
const styles = StyleSheet.create({

});
