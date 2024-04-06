import React, { useContext, useEffect, useState } from 'react';
import {
    FlatList,
    ImageBackground,
    SafeAreaView,
    ScrollView,
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
import ToolBarIcon from '../../utils/ToolBarIcon';
import { FONTS } from '../../constants/Fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import images from '../../constants/images';
import LinearGradient from 'react-native-linear-gradient';

const BlogList = () => {

    const navigation = useNavigation()
    const [data, setData] = useState([
        {
            selected: true,
            name: "Sweat, Smile, Repeat Your Guide to Fitness Success.",
            id: 1,
            weight: '67.2 kg',
            tittle: 'Meal-1',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjm_YL7BVSs5QCV5Z85ZO7s-1LYhznTphGg&usqp=CAU",
        },
        {
            selected: false,
            name: "From Flab to Fab Your Blueprint for Fitness Triumph",
            weight: '90.2 kg',
            tittle: 'Meal-2',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmyrNnu-b4R-rXjfNh9zEPhgXF9bxkP7cXpg&usqp=CAU",

        },
        {

            selected: false,
            name: "Rise and Grind Your Daily Dose of Fitness Inspiration",
            weight: '90.2 kg',
            tittle: 'Meal-3',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjm_YL7BVSs5QCV5Z85ZO7s-1LYhznTphGg&usqp=CAU",

        },



    ]);
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    navigation.navigate('Blog')
                }}
                style={[
                    GlobalStyle?.mainContainer,
                    // GlobalStyle?.paddingHorizontal0,
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
                        height: 110,
                        borderRadius: 10
                        // resizeMode: 'contain'
                    }}
                />



                <View
                    style={[
                        GlobalStyle?.marginHorizontal5,
                        GlobalStyle?.marginLeft15,
                        {
                            flex: 1
                        }

                    ]}>

                    <View
                        style={[
                            GlobalStyle?.flexRowAlignCenter,
                        ]}
                    >
                        <Image
                            source={images?.clock}
                            style={{
                                width: 18,
                                height: 18
                            }}
                        />
                        <Text
                            style={[
                                GlobalStyle?.fontSize13,
                                // GlobalStyle?.marginLeft,
                                {
                                    fontFamily: FONTS?.medium,
                                    marginLeft: 5,
                                    color: COLORS?.grey

                                }
                            ]}>8 days ago </Text>

                        <View
                            style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginLeft: 5
                            }}
                        >
                            <Text style={{
                                color: COLORS?.customColor,
                                fontSize: 20,
                                alignItems: 'center',

                                // marginTop:5


                            }}>{'\u2022'}</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize13,
                                    {
                                        fontFamily: FONTS?.medium,
                                        marginLeft: 5,
                                        color: COLORS?.grey

                                    }
                                ]}
                            >
                                5 min read
                            </Text>
                        </View>



                    </View>

                    <View
                        style={{
                        }}
                    >
                        <Text
                            numberOfLines={2}
                            style={[
                                GlobalStyle?.fontSize18,
                                // GlobalStyle?.marginTop5,

                                {
                                    fontFamily: FONTS?.semi_bold
                                }
                            ]}>{item?.name}</Text>
                    </View>

                    <View
                        style={[
                            GlobalStyle?.flexRowAlignCenter,
                            GlobalStyle?.marginTop5,
                            , {

                            }
                        ]}>
                        <Image
                            source={images?.profile}
                            style={{
                                width: 25,
                                height: 25,
                                alignItems: 'center',
                                borderRadius: 50
                            }}
                        />
                        <Text
                            style={[
                                GlobalStyle?.fontSize13,
                                GlobalStyle?.colorBlack,
                                {
                                    marginLeft: 5,
                                    fontFamily: FONTS?.regular,
                                }
                            ]}>Alisha Noble</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView
            style={[
                GlobalStyle.mainContainer,
                {
                    backgroundColor: COLORS?.dalColor,
                },
            ]}>
            <View
                style={[
                    GlobalStyle?.marginHorizontal5,
                    GlobalStyle?.paddingVertical15,
                    GlobalStyle?.marginTop15,
                    GlobalStyle?.flexRowJustifyBtwn, {
                    }
                ]}
            >

                <View
                    style={[
                        GlobalStyle?.flexRowAlignCenter
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
                        Blog
                    </Text>
                </View>

            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    flex: 1,
                    marginHorizontal: 15
                }}
            >
                <View
                    style={[
                        GlobalStyle?.marginVertical15
                    ]}
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize22, {
                                marginBottom: 20

                            }
                        ]}
                    >News's & Blog</Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                            navigation.navigate('Blog')
                        }}
                        style={[
                            // GlobalStyle?.paddingHorizontal10,
                            // GlobalStyle?.paddingVertical10,
                            , {
                                borderRadius: 10,
                                backgroundColor: COLORS?.white,
                                elevation: 3,
                                paddingHorizontal: 10,
                                paddingVertical: 10
                            }
                        ]}
                    >
                        <Image
                            source={images?.slide}
                            style={{
                                width: '100%',
                                height: 120,
                                borderRadius: 10
                            }}
                        />

                        <View
                            style={[
                                GlobalStyle?.flexRowJustifyBtwn,
                                GlobalStyle?.marginTop,
                                {
                                    flex: 1,
                                }
                            ]}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize22, {
                                        fontFamily: FONTS?.medium,

                                    }
                                ]}
                            >How to Build Muscle</Text>

                            <LinearGradient
                                colors={[COLORS.primary1, COLORS.primary3]}
                                // start={{ x: 1, y: 0 }}
                                // end={{ x: 0, y: 1 }}
                                style={{
                                    borderRadius: 10,
                                    paddingHorizontal: 25,
                                    paddingVertical: 5,
                                    // marginTop: -50
                                    position: 'absolute',
                                    right: 30,
                                    top: -27
                                }}>
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize16, {
                                            color: COLORS?.white,
                                            fontFamily: FONTS?.semi_bold,
                                            fontSize: 13
                                        }
                                    ]}
                                >Muscle</Text>
                            </LinearGradient>

                        </View>
                        <View
                            style={[
                                GlobalStyle?.flexRowJustifyBtwn,
                                GlobalStyle?.marginTop,
                                {
                                    flex: 1,
                                }
                            ]}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize13, {
                                        fontFamily: FONTS?.regular,
                                        color: COLORS?.grey


                                    }
                                ]}
                            >2/19/2023</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize13, {
                                        fontFamily: FONTS?.regular,
                                        color: COLORS?.grey
                                    }
                                ]}
                            >20 min ago</Text>


                        </View>
                    </TouchableOpacity>
                </View>
                <Text
                    style={[
                        GlobalStyle?.fontSize22,
                        GlobalStyle?.marginVertical15,

                        {
                        }
                    ]}
                >For You</Text>
                <FlatList
                    style={{
                        flex: 1,
                        // marginHorizontal: 8,
                    }}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    extraData={data}
                    renderItem={renderItem}
                />
            </ScrollView>
        </SafeAreaView>
    );
};
export default BlogList;

const styles = StyleSheet.create({

});
