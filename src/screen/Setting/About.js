import React, { useState, useRef } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    FlatList,
    Image

} from 'react-native';

import { COLORS } from '../../constants';
import { FONTS } from '../../constants/Fonts';
import GlobalStyle from '../../styles/GlobalStyle';
import images from '../../constants/images';
import icons from '../../constants/icons';
import ToolBarIcon from '../../utils/ToolBarIcon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Header from '../../global/Header';


const About = ({ navigation }) => {
    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer,
                GlobalStyle?.paddingHorizontal10,

                {
                }
            ]}
        >


            <Header
                title="About"
                onPressLeft={() => navigation.goBack(null)}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <Image
                    source={images?.logo}
                    style={[
                        GlobalStyle?.flexAlignJustifyCenter
                        , {
                            width: '80%',
                            height: 60,
                            tintColor: COLORS?.black,
                            alignSelf: 'center',
                            marginTop: '20%'

                        }]}
                />
                <View
                    style={[
                        GlobalStyle?.flexAlignJustifyCenter,
                        GlobalStyle?.marginTop30, {
                            flex: 1,
                            marginHorizontal: 10,
                            borderRadius: 10,
                            borderColor: COLORS?.primary3,
                            borderWidth: 2,
                            // paddingVertical: 10,
                            marginHorizontal: 10,
                            height: 220

                        }
                    ]}
                >

                    <Text
                        style={[
                            GlobalStyle?.fontSize18,
                            GlobalStyle?.marginVertical15
                        ]}
                    >Version 20.22.0-17606</Text>
                    <Text
                        style={[
                            GlobalStyle?.fontSize16,
                            GlobalStyle?.marginVertical5, {
                                fontFamily: FONTS?.light
                            }
                        ]}
                    >Copyright 2020, Koa Ventures LLC.</Text>
                    <Text
                        style={[
                            GlobalStyle?.fontSize16,
                            GlobalStyle?.marginVertical5, {
                                fontFamily: FONTS?.light

                            }
                        ]}
                    >All right reserved</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default About;
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // padding: 20,
        // backgroundColor: '#ffffff', // Set background color if needed
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 20,
    },
});