import React, { useContext, useEffect, useState } from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS } from '../../constants/Colors';
import { SIZES, STRING } from '../../constants';
import GlobalStyle from '../../styles/GlobalStyle';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import themeContext from '../../constants/themeContext';
import ToolBarIcon from '../../utils/ToolBarIcon';
import { FONTS } from '../../constants/Fonts';
import Octicons from 'react-native-vector-icons/Octicons';
import { useDispatch, useSelector } from 'react-redux';
import {
  doSaveOfferOfflineRealm,
  getSavedFavoriteProductString,
  removeFromFavoriteRealm,
} from '../../utils/RealmUtility';
import { ShowConsoleLogMessage } from '../../utils/Utility';
import { getHomeProduct } from '../../redux/actions/HomeApi';
import { IMAGE_BASE_URL } from '../../network/ApiEndPoints';
import { Image } from 'react-native';
import icons from '../../constants/icons';
import images from '../../constants/images';

const TabOfferScreen = () => {

  const navigation = useNavigation()
  const [data, setData] = useState([
    {
      selected: true,
      name: "Received Ali",
      id: 1,
      tittle: 'From Johnathan Obi',
      images: images?.recevied,
      price: '3,110'

    },
    {
      selected: false,
      name: "Add Wallet",
      tittle: 'Bill payment',
      images: images?.wallet,
      price: '1,500'

    },

    {
      selected: false,
      name: "Spend Ali",
      tittle: 'From Johnathan Obi',
      images: images?.spend,
      price: '2,000'

    },
    {
      selected: false,
      name: "Add Wallet",
      tittle: 'Bill payment',
      images: images?.wallet,
      price: '3,200'

    },

  ]);
  const renderItem = ({ item, index }) => {
    return (
      <View>
      <TouchableOpacity
        style={[
          // GlobalStyle?.mainContainer,
          GlobalStyle?.paddingVertical15,
          // GlobalStyle?.marginVertical10,

          , {
            flex: 1,
            width: '100%',
            borderRadius: 8,
            marginHorizontal: 0,
            // paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center'
          }]}
      >

        <Image
          source={item?.images}
          style={{
            width: 45,
            height: 45,
            borderRadius: 10
            // resizeMode: 'contain'
          }}
        />
        <View
          style={[
            GlobalStyle?.marginHorizontal5,
            GlobalStyle?.marginLeft15,
            {
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }
          ]}>



          <View>
            <Text
              style={[
                GlobalStyle?.fontSize18,
                GlobalStyle?.marginTop5,

                {
                  fontFamily: FONTS?.semi_bold
                }
              ]}>{item?.name}</Text>
            <Text
              style={[
                GlobalStyle?.fontSize16,
                // GlobalStyle?.marginTop5,
                GlobalStyle?.colorGray,
                {
                  fontFamily: FONTS?.light
                }
              ]}>{item?.tittle}</Text>
          </View>
          <View
            style={[
              // GlobalStyle?.flexRowAlignCenter,
              {
                // flex:1,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-end'
              }
            ]}
          >

            <Text
              style={[
                GlobalStyle?.fontSize16,

              ]}
            >{item?.price}</Text>
            <Text
              style={[
                GlobalStyle?.fontSize14,
                GlobalStyle?.marginLeft5,
                {
                  color: COLORS?.green
                }
              ]}
            >AED</Text>
          </View>



        </View>
      </TouchableOpacity>
        <View
        style={{
          borderWidth: 0.2,
          borderColor: COLORS?.gray,
          // flexGrow:1
        }}
      />
      </View>
    );
  };

  return (
    <View
      style={[
        GlobalStyle.mainContainer,
        {
          backgroundColor: COLORS?.dalColor,
          marginTop: 15

        },
      ]}>
      <FlatList
        style={{
          flex: 1,
          marginHorizontal: 8,
        }}
        showsVerticalScrollIndicator={false}
        data={data}
        extraData={data}
        renderItem={renderItem}
      />
    </View>
  );
};
export default TabOfferScreen;

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    borderRadius: 5,
  },
  Wrapper: {
    marginTop: 10,
    flexGrow: 1,
    marginVertical: 2,
    maxWidth: SIZES.width / 2 - 10,
    paddingBottom: 5,
    padding: 5,
    borderRadius: 10,
  },
  itemImage: {
    width: '100%',
    height: 160,
    borderRadius: 20,
    // resizeMode: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
    // marginBottom: 10
  },
  itemName: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: COLORS.black,
    marginTop: 2,
    // alignItems:'center'
    // textAlign: 'center'
  },
  itemPrice: {
    fontSize: 16,
    fontFamily: FONTS?.medium,

    // color: COLORS.grey,
    // textAlign: 'center',
    // marginTop: 5,
  },
  itemOriPrice: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 11,
    textDecorationLine: 'line-through',
    color: COLORS.gray,
    marginStart: 5,
  },
  offerText: {
    // fontFamily: 'OpenSans-SemiBold',
    //   fontSize: 12,
    //   color: COLORS.bitter_sweet,
    //   backgroundColor: COLORS.pale_pink,
    //   position: 'absolute',
    //   left: 0,
    //   top: 0,
    //   padding: 5,
    //   paddingHorizontal: 10,
    //   borderTopRightRadius: 10, // Always apply this radius
    //   borderBottomRightRadius: 10, // Always apply this radius
    //   borderTopLeftRadius: isRTL ? 0 : 10, // Apply only in LTR mode
    //   borderBottomLeftRadius: isRTL ? 0 : 10,
  },
});
