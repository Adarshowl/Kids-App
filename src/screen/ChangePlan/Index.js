import React, { I18nManager, useContext, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

import { COLORS } from '../../constants/Colors';
import GlobalStyle from '../../styles/GlobalStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { FONTS } from '../../constants/Fonts';
import Meal1 from './Meal1';
import Meal2 from './Meal2';
import ToolBarIcon from '../../utils/ToolBarIcon';
import Meal3 from './Meal3';
import Meal4 from './Meal4';

const Tab = createMaterialTopTabNavigator();

const ChangePlan = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={[
                    GlobalStyle?.marginHorizontal5,
                    GlobalStyle?.paddingVertical15,
                    GlobalStyle?.marginTop15,

                    // GlobalStyle?.flexRowAlignCenter,
                    {
                        // flex:1,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }
                ]}
            >

                <ToolBarIcon
                    title={MaterialIcons}
                    iconName={'arrow-back-ios-new'}
                    icSize={25}
                    icColor={COLORS?.black}
                    style={{
                        backgroundColor: COLORS?.white,
                        // borderRadius: 30,
                        // width: 25,
                        // height: 25,
                        elevation: 5

                    }}

                />
                <Text
                    style={[
                        GlobalStyle?.fontSize22,
                        GlobalStyle?.marginLeft15, {
                            fontFamily: FONTS?.bold
                        }
                    ]}
                >
                    Change Meal Plan
                </Text>
            </View>

            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: COLORS.black,
                    labelStyle: {
                        fontSize: 16,
                        color: COLORS?.black,
                        textTransform: 'capitalize',
                        fontFamily:FONTS?.medium

                    },
                    indicatorStyle: { backgroundColor: COLORS?.black },
                }}>
                <Tab.Screen name="Meal-1" component={Meal1} />
                <Tab.Screen name="Meal-2" component={Meal2} />
                <Tab.Screen name="Meal-3" component={Meal3} />
                <Tab.Screen name="Meal-4" component={Meal4} />


            </Tab.Navigator>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    
});

export default ChangePlan;
