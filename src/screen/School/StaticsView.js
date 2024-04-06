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
import Fontisto from 'react-native-vector-icons/Fontisto'
import { FONTS } from '../../constants/Fonts';
import GlobalStyle from '../../styles/GlobalStyle';
import images from '../../constants/images';
import icons from '../../constants/icons';
import ToolBarIcon from '../../utils/ToolBarIcon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Header from '../../global/Header';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import AntDesign from 'react-native-vector-icons/AntDesign'
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import { Picker } from '@react-native-picker/picker';

const StaticsView = ({ navigation }) => {


    const [onlinestorw, setData] = useState([
        {
            selected: false,
            name: "Brackfast",
            tittle: 'Home',
            price: '300 Kcl',
            images: icons?.brackfast
        },
        {
            selected: false,
            name: "Lunch",
            tittle: 'Canteen',
            price: '600 Kcl',
            images: icons?.lunch
        },
        {
            selected: false,
            name: "Dinner",
            tittle: 'Home',
            price: '900 Kcl',
            images: icons?.dinner
        },
        {
            selected: false,
            name: "Snaks",
            tittle: 'Anyway',
            price: '150 Kcl',
            images: icons?.Snaks
        },


    ]);

    const renderEvents = ({ item }) => {
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
                            width: 35,
                            height: 35,
                            borderRadius: 50,
                            resizeMode: 'contain'
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
                                    GlobalStyle?.fontSize16,
                                    GlobalStyle?.marginTop5,

                                    {
                                        fontFamily: FONTS?.semi_bold
                                    }
                                ]}>{item?.name}</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14,
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
                                    GlobalStyle?.fontSize15, {
                                        fontFamily: FONTS?.medium
                                    }
                                ]}
                            >{item?.price}</Text>

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
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer,
                // GlobalStyle?.paddingHorizontal10,
                {
                    // backgroundColor: "#FAFAFA"
                }
            ]}
        >


            <Header
                title="History"
            // onPressLeft={() => navigation.goBack(null)}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[
                    GlobalStyle?.paddingHorizontal15
                ]}
            >

                <View
                    style={{
                        // alignItems: 'center',
                        marginTop: 20
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            flex: 1,
                            alignItems: 'center'
                        }}
                    >

                        <Image
                            source={icons?.arrowLeft}
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text
                            style={[
                                GlobalStyle?.fontSize20, {
                                    fontFamily: FONTS?.semi_bold
                                }
                            ]}
                        >Today</Text>
                        <Image
                            source={icons?.arrowRight}
                            style={{
                                width: 27,
                                height: 27
                            }}
                        />
                    </View>

                    <Image
                        source={icons?.CircleP}
                        style={{
                            width: 200,
                            height: 200,
                            alignSelf: 'center',
                            marginTop: 30
                        }}
                    />

                </View>

                <View
                    style={[
                        GlobalStyle?.commaonBorder,
                        // GlobalStyle?.flexRowJustifyBtwn,
                        GlobalStyle?.marginTop,

                        {
                            flex: 1,
                            marginHorizontal: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            // paddingHorizontal:0,
                            // marginLeft: 20,
                            paddingRight: 0,
                            marginTop: 20,
                            borderColor: COLORS?.gray,
                        }
                    ]}
                >
                    <View
                        style={{
                            flex: 1
                        }}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize16
                            ]}
                        >Carbs</Text>
                        <View
                            style={[
                                GlobalStyle?.flexRowAlignCenter,
                                GlobalStyle?.marginTop

                            ]}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize15, {
                                        fontFamily: FONTS?.medium
                                    }
                                ]}
                            >25g /</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14, {
                                        fontFamily: FONTS?.light
                                    }
                                ]}>356g</Text>

                        </View>
                        <ImageBackground
                            source={icons?.pro3}
                            style={{
                                marginTop: 8

                            }}
                            resizeMode='contain'
                        >
                            <Image
                                source={icons?.pro1}
                                style={{
                                    // marginTop: 8,
                                    resizeMode: 'contain'
                                }}
                            />
                        </ImageBackground>
                    </View>

                    <View
                        style={{
                            flex: 1
                        }}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize16
                            ]}
                        >Carbs</Text>
                        <View
                            style={[
                                GlobalStyle?.flexRowAlignCenter,
                                GlobalStyle?.marginTop

                            ]}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize15, {
                                        fontFamily: FONTS?.medium
                                    }
                                ]}
                            >25g /</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14, {
                                        fontFamily: FONTS?.light
                                    }
                                ]}>356g</Text>

                        </View>
                        <ImageBackground
                            source={icons?.pro3}
                            style={{
                                marginTop: 8

                            }}
                            resizeMode='contain'
                        >
                            <Image
                                source={icons?.pro2}
                                style={{
                                    // marginTop: 8,
                                    resizeMode: 'contain'
                                }}
                            />
                        </ImageBackground>
                    </View>
                    <View
                        style={{
                            flex: 1
                        }}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize16
                            ]}
                        >Carbs</Text>
                        <View
                            style={[
                                GlobalStyle?.flexRowAlignCenter,
                                GlobalStyle?.marginTop

                            ]}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize15, {
                                        fontFamily: FONTS?.medium
                                    }
                                ]}
                            >25g /</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14, {
                                        fontFamily: FONTS?.light
                                    }
                                ]}>356g</Text>

                        </View>
                        <Image
                            source={icons?.pro3}
                            style={{
                                marginTop: 8
                            }}
                        />
                    </View>

                </View>

                <FlatList
                    style={{
                        // flex: 1,
                        marginHorizontal: 8,
                    }}
                    showsVerticalScrollIndicator={false}
                    data={onlinestorw}
                    extraData={onlinestorw}
                    renderItem={renderEvents}
                />


            </ScrollView>
        </SafeAreaView>
    );
};

export default StaticsView;
const styles = StyleSheet.create({

});