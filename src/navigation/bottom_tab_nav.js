import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { lazy, useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { STRING } from '../constants';
import themeContext from '../constants/themeContext';
import { FONTS } from '../constants/Fonts';
import { useSelector } from 'react-redux';
import { COLORS } from '../constants/Colors';
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import Home from '../screen/Home';
import Progress from '../screen/Progress/Index';
import Profile from '../screen/Profile/Index';
import Workout from '../screen/Workout/Index';
import Recipes from '../screen/Recipes/Index';
import icons from '../constants/icons';




const Tab = createBottomTabNavigator();
const BottomTabNav = () => {
  const theme = useContext(themeContext);

  const cartDataLength = useSelector(
    state => state?.homeReducer?.cartDataLength,
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          // backgroundColor: 'yellow',
          backgroundColor: COLORS?.white,
          minHeight: 80,
          paddingTop: 15,
          paddingBottom: 5,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          borderTopWidth: 0.5,
          paddingVertical: 15,
          borderRadius: 20,

        },
        tabBarItemStyle: {},
      }}
      // initialRouteName="Home"
      style={{}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',

                flexGrow: 1,
              }}>

              <Image
                source={focused ? icons?.home1 : icons?.home}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused
                    ? theme?.colors.colorPrimary
                    : theme?.colors.grey,
                }}
              />
              <Text
                style={[
                  styles.text,
                  {
                    color: focused
                      ? COLORS?.primary2
                      : COLORS?.gray,
                    // fontFamily:FONTS?.bold
                  },
                ]}>
                Home
              </Text>
              {focused ? (
                <Image
                  source={icons?.dot}
                  style={{
                    height: 8,
                    width: 8,
                    tintColor: focused
                      ? theme?.colors.colorPrimary
                      : theme?.colors.grey,
                    marginTop: 3
                  }}
                />
              ) : null}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Progress"
        component={Progress}

        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',

                flexGrow: 1,
              }}>
              <Image
                source={focused ? icons?.Progress1 : icons?.Progress}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused
                    ? theme?.colors.colorPrimary
                    : theme?.colors.grey,
                  resizeMode: 'contain'

                }}
              />

              <Text
                style={[
                  styles.text,
                  {
                    color: focused
                      ? COLORS?.primary2
                      : COLORS?.gray,
                    // fontFamily:FONTS?.bold
                  },
                ]}>
                Progress
              </Text>
              {focused ? (
                <Image
                  source={icons?.dot}
                  style={{
                    height: 8,
                    width: 8,
                    tintColor: focused
                      ? theme?.colors.colorPrimary
                      : theme?.colors.grey,
                    marginTop: 3
                  }}
                />
              ) : null}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Recipes"
        component={Recipes}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',

                flexGrow: 1,
                // backgroundColor: 'red',
              }}>
              <Image
                source={focused ? icons?.recipes1 : icons?.recipes}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused
                    ? theme?.colors.colorPrimary
                    : theme?.colors.grey,
                  resizeMode: 'contain'

                }}
              />
              <Text
                style={[
                  styles.text,
                  {
                    color: focused
                      ? COLORS?.primary2
                      : COLORS?.gray,
                    // fontFamily:FONTS?.bold
                  },
                ]}>
                Recipes
              </Text>
              {focused ? (
                <Image
                  source={icons?.dot}
                  style={{
                    height: 8,
                    width: 8,
                    tintColor: focused
                      ? theme?.colors.colorPrimary
                      : theme?.colors.grey,
                    marginTop: 3

                  }}
                />
              ) : null}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Workout"
        component={Workout}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                flexGrow: 1,
              }}>
              <Image
                source={focused ? icons?.workout1 : icons?.workout}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused
                    ? theme?.colors.colorPrimary
                    : theme?.colors.grey,
                  resizeMode: 'contain'
                }}
              />
              <Text
                style={[
                  styles.text,
                  {
                    color: focused
                      ? COLORS?.primary2
                      : COLORS?.gray,
                    // fontFamily:FONTS?.bold
                  },
                ]}>
                Workout
              </Text>
              {focused ? (
                <Image
                  source={icons?.dot}
                  style={{
                    height: 8,
                    width: 8,
                    tintColor: focused
                      ? theme?.colors.colorPrimary
                      : theme?.colors.grey,
                    marginTop: 3
                  }}
                />
              ) : null}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',

                flexGrow: 1,
              }}>
              <Image
                source={focused ? icons?.profile1 : icons?.profile}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused
                    ? theme?.colors.colorPrimary
                    : theme?.colors.grey,
                }}
              />


              <Text
                style={[
                  styles.text,
                  {
                    color: focused
                      ? COLORS?.primary2
                      : COLORS?.gray,
                    // fontFamily:FONTS?.bold
                  },
                ]}>
                Profile
              </Text>
              {focused ? (
                <Image
                  source={icons?.dot}
                  style={{
                    height: 8,
                    width: 8,
                    tintColor: focused
                      ? theme?.colors.colorPrimary
                      : theme?.colors.grey,
                    marginTop: 3
                  }}
                />
              ) : null}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNav;

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    marginTop: 3,
    fontFamily: FONTS?.medium,
  },
});
