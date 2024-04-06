import React, { useContext, useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  I18nManager,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import themeContext from '../constants/themeContext';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../constants/Colors';
import { FONTS, SIZES, STRING } from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import { Switch } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import KidsAppCommBtn from '../utils/KidsAppCommBtn';
import { ShowToastMessage } from '../utils/Utility';
import images from '../constants/images';
import GlobalStyle from '../styles/GlobalStyle';
import icons from '../constants/icons';
import { useNavigation } from '@react-navigation/native';

const DrawerContent = ({ navigation }) => {
  const theme = useContext(themeContext);

  // const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS?.white,
        flex: 1,
      }}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: COLORS?.white,

          flexGrow: 1,
        }}>
        <View
          style={{
            paddingVertical: 45,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: COLORS?.bg
          }}>
          <Image
            source={images?.profile}
            style={{
              height: 70,
              width: 70,
              borderRadius: 10,
              marginHorizontal: 15,
            }}
          />
          <View style={{}}>
            <Text
              style={[
                GlobalStyle?.fontSize18,
                GlobalStyle?.colorBlack,
                GlobalStyle?.marginTop
              ]}>
              Johan Smith
            </Text>
            <Text
              style={[
                GlobalStyle?.fontSize13,
                GlobalStyle?.colorBlack,
                GlobalStyle?.marginTop, {
                  fontFamily: FONTS?.regular,
                  fontSize: 14
                }
              ]}>
              Build Muscle
            </Text>
          </View>
        </View>
        <View
          style={{
            // padding: 1,
            backgroundColor: COLORS.light_gray,
            marginBottom: 10,
            marginHorizontal: 0,
            alignItems:'center'
          }}
        />
        <ItemView
          onPress={() => {
            navigation.replace('MainContainer');
          }}
          title='Home'
          icon={
            <Image
              source={icons?.homeD}
              style={styles?.icons}
            />
          }
        />
        <ItemView
          onPress={() => {
            navigation.replace('Profile');
          }}
          title="Profile"
          icon={
            <Image
              source={icons?.profileD}
              style={styles?.icons}
            />
          }
        />
        <ItemView
          onPress={() => {
            navigation.replace('Progress');
          }}
          title="Progress"
          icon={
            <Image
              source={icons?.progress}
              style={styles?.icons}
            />
          }
        />
        <ItemView
          onPress={() => {
            navigation.replace('Recipes');
          }}
          title="Recipes"
          icon={
            <Image
              source={icons?.recipesD}
              style={styles?.icons}
            />
          }
        />
        <ItemView
          onPress={() => {
            // ShowToastMessage('Cooming Soon')
            navigation.replace('Grocery');
          }}
          title="Grocery List"
          icon={
            <Image
              source={icons?.groceryD}
              style={styles?.icons}
            />
          }
        />
        <ItemView
          onPress={() => {
            // ShowToastMessage('Cooming Soon')

            navigation.replace('BlogList');
          }}
          title="Blog"
          icon={
            <Image
              source={icons?.blog}
              style={styles?.icons}
            />
          }
        />
        <ItemView
          onPress={() => {
            ShowToastMessage('Cooming Soon')

            // navigation.replace('MainContainer');
          }}
          title="Share App"
          icon={
            <Image
              source={icons?.shareD}
              style={styles?.icons}
            />
          }
        />
        <ItemView
          onPress={() => {
            ShowToastMessage('Cooming Soon')

            // navigation.replace('MainContainer');
          }}
          title="Rate Us"
          icon={
            <Image
              source={icons?.rateUsD}
              style={styles?.icons}
            />
          }
        />
        <ItemView
          onPress={() => {
            navigation.replace('PrivacyPolicy');
          }}
          title="Privacy Policy"
          icon={
            <Image
              source={icons?.privacy}
              style={styles?.icons}
            />
          }
        />
        <ItemView
          onPress={() => {
            navigation.replace('TermsandCondition');
          }}
          title="Terms & Conditions"
          icon={
            <Image
              source={icons?.termsD}
              style={styles?.icons}
            />
          }
        />
        <ItemView
          onPress={() => {
            navigation.replace('Setting');
          }}
          title="Setting"
          icon={
            <Image
              source={icons?.Setting}
              style={styles?.icons}
            />
          }
        />
        <ItemView
          onPress={() => {
            navigation.replace('Faq');
          }}
          title="FAQ’s"
          icon={
            <Image
              source={icons?.faqD}
              style={styles?.icons}
            />
          }
        />
        <ItemView
          onPress={() => {
            navigation.replace('Feedback');
          }}
          title="Feedback"
          icon={
            <Image
              source={icons?.Feedback}
              style={styles?.icons}
            />
          }
        />
        <ItemView
          onPress={() => {
            navigation.replace('ContactUs');
          }}
          title="Contact Us"
          icon={
            <Image
              source={icons?.contactD}
              style={styles?.icons}
            />
          }
        />

        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              'Logout',
              'Are you sure want to logout',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    navigation.replace('Auth');
                  },
                },
              ],
              { cancelable: false },
            );
          }}
          activeOpacity={0.8}
          style={[
            styles.itemWrapper,
            {
            },
          ]}>
          <View
            style={[
              styles.itemIcon,
              {
                marginEnd: 10,
              },
            ]}>
            <Image
              source={icons?.logout}
              style={styles?.icons}
            />
          </View>
          <Text
            style={[
              [
                styles.itemText,
                {
                  color: COLORS?.black,
                },
              ],
            ]}>
            Log Out
          </Text>
          <View
            style={{
              flex: 1,
            }}
          />
        </TouchableOpacity>


        <View
          style={{
            marginBottom: 25,
          }}
        />
      </ScrollView>

    </SafeAreaView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    // alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#00000080',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    width: SIZES.width,
    paddingHorizontal: 10,
    // alignSelf: 'center',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 75,
  },
  wrapper: {
    padding: 10,
    marginTop: 10,
    backgroundColor: COLORS.colorPrimaryLight,
    // backgroundColor: COLORS.red,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
  },
  profileImage: {
    height: 75,
    width: 75,
    borderRadius: 5,
  },
  icons: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  },
  divLine: {
    borderWidth: 0.2,
    backgroundColor: COLORS.light_gray,
    marginBottom: 10,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // minHeight: 30,
    marginBottom: 10,
    paddingVertical: 5,
    marginHorizontal: 15,
    // marginTop: 10
  },
  itemIcon: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontFamily: FONTS?.regular,
    fontSize: 16.5,
    color: COLORS.black,
    // flex: 1,
    alignItems: 'flex-start',
  },
});

const ItemView = ({ icon, title, onPress, show }) => {
  const theme = useContext(themeContext);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.itemWrapper}>
      <View
        style={[
          styles.itemIcon,
          {
            marginEnd: 10,
          },
        ]}>
        {icon}
      </View>
      <Text
        style={[styles.itemText,]}>

        {title || 'Home'}</Text>

    </TouchableOpacity>
  );
};
