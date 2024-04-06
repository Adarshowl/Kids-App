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
import AntDesign from 'react-native-vector-icons/AntDesign'
import Header from '../../global/Header';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';


const ParentPaid = ({ navigation }) => {




    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer,
                {
                    // backgroundColor: "#FAFAFA"
                }
            ]}
        >


            <Header
                title="Parent-Paid Interest"
            // onPressLeft={() => navigation.goBack(null)}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[
                    GlobalStyle?.paddingHorizontal10,
                ]}
            >

                <View
                    style={[
                        GlobalStyle?.paddingHorizontal10,
                        GlobalStyle?.marginTop15
                    ]}
                >


                    <View
                        style={[
                            // GlobalStyle?.flexRowJustifyBtwn,
                            GlobalStyle?.commaonBorder,
                            {
                                flex: 1,
                                alignItems: 'center',
                                backgroundColor: COLORS?.light_green,
                                borderWidth: 1,
                                borderColor: COLORS?.colorBtn
                            }
                        ]}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize25, {
                                    fontFamily: FONTS?.bold,
                                    color: COLORS?.colorBtn
                                }
                            ]}
                        >5%</Text>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            marginTop: 20,
                            marginBottom:20

                        }}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize16,
                                {
                                    fontFamily: FONTS?.extra_light
                                }
                            ]}
                        >
                            This would be a monthly payment fo $0.00
                            based on current saving balance of $5
                        </Text>
                    </View>

                    <View
                        style={[
                            GlobalStyle?.flexRowAlignCenter,
                            GlobalStyle?.marginTop15
                        ]}
                    >
                        <AntDesign
                            name="infocirlce"
                            size={25}
                            color={COLORS?.colorBtn}
                            style={{

                            }}
                        />
                        <Text
                            style={[
                                GlobalStyle?.fontSize16,
                                GlobalStyle?.marginLeft,

                                {
                                    fontFamily: FONTS?.medium
                                }
                            ]}
                        >
                            How does parent-Paid interest work?
                        </Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ParentPaid;
const styles = StyleSheet.create({

});