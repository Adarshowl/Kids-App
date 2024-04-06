import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    FlatList,
    Image

} from 'react-native';
import CustomHeader from '../../global/CustomHeader';
import { COLORS } from '../../constants';
import { FONTS } from '../../constants/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'

import GlobalStyle from '../../styles/GlobalStyle';
import CommHeader from '../../global/CommHeader';
import images from '../../constants/images';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import LinearGradient from 'react-native-linear-gradient';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';


const ChoosePlan = ({ navigation }) => {
    const [data, setData] = useState([
        {
            selected: true,
            name: "$45",
            id: 1
        },
        {
            image: images.workOut1,
            selected: false,
            name: "$100",
            id: 2

        },

        {
            image: images.workOut1,
            selected: false,
            name: "$75",
            id: 3,
            text: 'recommended'

        },
        {
            image: images.workOut2,
            selected: false,
            name: "$124",
            id: 4

        }


    ]);

    const handlePress = (itemId) => {
        const updatedData = data.map(item => {
            if (item.id === itemId) {
                return { ...item, selected: true };
            } else {
                return { ...item, selected: false };
            }
        });
        setData(updatedData);
    };

    const renderShopLove = ({ item }) => {
        return (

            <View>
                {item?.selected ? (

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => handlePress(item.id)}

                        style={[
                            GlobalStyle?.mainContainer,
                            GlobalStyle?.marginVertical5,

                            , {
                                borderRadius: 8,
                                borderWidth: 1,
                                marginVertical: 15,
                                borderColor: COLORS?.customColor,
                                backgroundColor: item?.text == 'recommended' ? COLORS?.red : COLORS?.black,
                                // padding:25,
                                elevation: 2
                            }]}
                    >

                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            colors={item.selected ? [COLORS?.primary1, COLORS?.primary3] : [COLORS?.white, COLORS?.white]}
                            style={[
                                {
                                    borderRadius: 8,
                                    paddingHorizontal: 10,
                                    paddingVertical: 5,
                                }
                            ]}
                        >
                            {item?.text == 'recommended' && (
                                <View
                                    style={{
                                        alignItems: 'center'
                                    }}
                                >
                                    <LinearGradient
                                        colors={[COLORS.primary1, COLORS.primary3]}
                                        // start={{ x: 1, y: 0 }}
                                        // end={{ x: 0, y: 1 }}
                                        style={{
                                            borderRadius: 25,
                                            paddingHorizontal: 20,
                                            paddingVertical: 5,
                                            marginTop: -20
                                        }}>
                                        <Text
                                            style={[
                                                GlobalStyle?.fontSize16, {
                                                    color: COLORS?.white,
                                                    fontFamily: FONTS?.semi_bold,
                                                    fontSize: 14
                                                }
                                            ]}
                                        >Recommended</Text>
                                    </LinearGradient>
                                </View>
                            )}

                            <View
                                style={[
                                    GlobalStyle?.flexRowJustifyBtwn,
                                    GlobalStyle?.marginHorizontal5,
                                    GlobalStyle?.marginVertical10,

                                ]}>


                                <View
                                    style={[
                                        GlobalStyle?.flexRowAlignCenter
                                    ]}
                                >
                                    <Text style={[
                                        GlobalStyle?.fontSize30, {
                                            color: item?.selected ? COLORS?.white : COLORS?.black,

                                        }
                                    ]}>{item?.id}</Text>
                                    <Text
                                        style={[
                                            GlobalStyle?.fontSize16,
                                            {
                                                marginLeft: 5,
                                                color: item?.selected ? COLORS?.white : COLORS?.black,

                                            }
                                        ]}
                                    >months</Text>

                                </View>
                                <View>
                                    <Text
                                        style={[
                                            GlobalStyle?.fontSize30,
                                            GlobalStyle?.marginRight,

                                            {
                                                color: item?.selected ? COLORS?.white : COLORS?.black,

                                            }
                                        ]}>{item?.name}00</Text>
                                </View>
                            </View>

                            <View
                                style={[
                                    GlobalStyle?.flexRowJustifyBtwn,
                                    GlobalStyle?.marginHorizontal5,
                                    GlobalStyle?.marginVertical10,

                                ]}>
                                <View style={[
                                    // GlobalStyle?.marginHorizontal10,
                                    // GlobalStyle?.marginTop15,
                                    {
                                        flex: 1
                                    }
                                ]}>
                                    {!item?.selected ? (
                                        <KidsAppCommBtn
                                            height={30}
                                            width={80}
                                            borderRadius={15}
                                            textSize={14}
                                            borderColor={COLORS?.gray}
                                            textColor={COLORS?.white}
                                            text={('Save 5%')}
                                            backgroundColor={COLORS?.white}
                                            onPress={() => {
                                                navigation.navigate('ChoosePlan');
                                            }}
                                            textStyle={{
                                                fontFamily: FONTS?.semi_bold,
                                                color: COLORS.colorPrimary,
                                            }}
                                        />
                                    ) : (
                                        <KidsAppBorderWidthBtn
                                            height={30}
                                            width={80}
                                            borderRadius={15}
                                            textSize={14}
                                            borderColor={COLORS?.gray}
                                            textColor={COLORS?.black}
                                            text={('Save 5%')}
                                            backgroundColor={COLORS?.white}
                                            onPress={() => {
                                                navigation.navigate('ChoosePlan');
                                            }}
                                            textStyle={{
                                                fontFamily: FONTS?.semi_bold,
                                                color: COLORS.colorPrimary,
                                            }}
                                        />
                                    )}

                                </View>
                                <View>
                                    <Text
                                        style={[
                                            GlobalStyle?.fontSize16,
                                            GlobalStyle?.marginRight,
                                            {
                                                color: item?.selected ? COLORS?.white : COLORS?.black,

                                            }
                                        ]}>$100/ month</Text>
                                </View>


                            </View>


                        </LinearGradient>
                    </TouchableOpacity>

                )
                    : (
                        <ImageBackground
                            source={images?.border}
                            style={{
                                width: '100%',
                                flexGrow: 1,
                                borderRadius: 10,

                            }}
                            resizeMode='contain'

                        >
                            <TouchableOpacity
                                activeOpacity={0.8}

                                onPress={() => handlePress(item.id)}

                                style={[
                                    GlobalStyle?.mainContainer,
                                    GlobalStyle?.marginVertical5,

                                    , {
                                        borderRadius: 8,
                                        borderWidth: 2,
                                        marginVertical: 15,
                                        borderColor: COLORS?.customColor,
                                        // backgroundColor: item?.text === 'recommended' ? COLORS?.red : COLORS?.black,
                                        // padding:25,
                                        elevation: 2
                                    }]}
                            >

                                <LinearGradient
                                    colors={item?.text === 'recommended' ? ['#E7F8FF','#E7F8FF'] : [COLORS?.white, COLORS?.white]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={[
                                        {
                                            borderRadius: 8,
                                            paddingHorizontal: 10,
                                            paddingVertical: 5,
                                        }
                                    ]}
                                >
                                    {item?.text == 'recommended' && (
                                        <View
                                            style={{
                                                alignItems: 'center'
                                            }}
                                        >
                                            <LinearGradient
                                                colors={[COLORS.primary1, COLORS.primary3]}
                                                // start={{ x: 1, y: 0 }}
                                                // end={{ x: 0, y: 1 }}
                                                style={{
                                                    borderRadius: 20,
                                                    paddingHorizontal: 15,
                                                    paddingVertical: 5,
                                                    marginTop: -20
                                                }}>
                                                <Text
                                                    style={[
                                                        GlobalStyle?.fontSize16, {
                                                            color: COLORS?.white,
                                                            fontFamily: FONTS?.semi_bold,
                                                            fontSize: 14
                                                        }
                                                    ]}
                                                >Recommended</Text>
                                            </LinearGradient>
                                        </View>
                                    )}

                                    <View
                                        style={[
                                            GlobalStyle?.flexRowJustifyBtwn,
                                            GlobalStyle?.marginHorizontal5,
                                            GlobalStyle?.marginVertical10,

                                        ]}>


                                        <View
                                            style={[
                                                GlobalStyle?.flexRowAlignCenter
                                            ]}
                                        >
                                            <Text style={[
                                                GlobalStyle?.fontSize30, {
                                                    color: item?.selected ? COLORS?.white : COLORS?.black,

                                                }
                                            ]}>{item?.id}</Text>
                                            <Text
                                                style={[
                                                    GlobalStyle?.fontSize16,
                                                    {
                                                        marginLeft: 5,
                                                        color: item?.selected ? COLORS?.white : COLORS?.black,

                                                    }
                                                ]}
                                            >months</Text>

                                        </View>
                                        <View>
                                            <Text
                                                style={[
                                                    GlobalStyle?.fontSize30,
                                                    GlobalStyle?.marginRight,

                                                    {
                                                        color: item?.selected ? COLORS?.white : COLORS?.black,

                                                    }
                                                ]}>{item?.name}00</Text>
                                        </View>
                                    </View>

                                    <View
                                        style={[
                                            GlobalStyle?.flexRowJustifyBtwn,
                                            GlobalStyle?.marginHorizontal5,
                                            GlobalStyle?.marginVertical10,

                                        ]}>
                                        <View style={[
                                            // GlobalStyle?.marginHorizontal10,
                                            // GlobalStyle?.marginTop15,
                                            {
                                                flex: 1
                                            }
                                        ]}>
                                            {!item?.selected ? (
                                                <KidsAppCommBtn
                                                    height={30}
                                                    width={80}
                                                    borderRadius={15}
                                                    textSize={14}
                                                    borderColor={COLORS?.gray}
                                                    textColor={COLORS?.white}
                                                    text={('Save 5%')}
                                                    backgroundColor={COLORS?.white}
                                                    onPress={() => {
                                                        navigation.navigate('ChoosePlan');
                                                    }}
                                                    textStyle={{
                                                        fontFamily: FONTS?.semi_bold,
                                                        color: COLORS.colorPrimary,
                                                    }}
                                                />
                                            ) : (
                                                <KidsAppBorderWidthBtn
                                                    height={30}
                                                    width={80}
                                                    borderRadius={15}
                                                    textSize={14}
                                                    borderColor={COLORS?.gray}
                                                    textColor={COLORS?.black}
                                                    text={('Save 5%')}
                                                    backgroundColor={COLORS?.white}
                                                    onPress={() => {
                                                        navigation.navigate('ChoosePlan');
                                                    }}
                                                    textStyle={{
                                                        fontFamily: FONTS?.semi_bold,
                                                        color: COLORS.colorPrimary,
                                                    }}
                                                />
                                            )}

                                        </View>
                                        <View>
                                            <Text
                                                style={[
                                                    GlobalStyle?.fontSize16,
                                                    GlobalStyle?.marginRight,
                                                    {
                                                        color: item?.selected ? COLORS?.white : COLORS?.black,

                                                    }
                                                ]}>$100/ month</Text>
                                        </View>


                                    </View>


                                </LinearGradient>
                            </TouchableOpacity>
                        </ImageBackground>
                    )}
            </View>
        );
    };

    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer
            ]}
        >
            <View
                style={[
                    GlobalStyle?.marginHorizontal15,
                    GlobalStyle?.paddingVertical15,
                    GlobalStyle?.marginTop15
                ]}
            >
                <Text
                    style={[
                        GlobalStyle?.fontSize28
                    ]}
                >
                    Choose Your Subscription
                    Plan
                </Text>
            </View>


            <ScrollView
            >
                <View
                    style={[
                        GlobalStyle?.marginHorizontal5,
                        // GlobalStyle?.marginTop15,
                        {
                            flex: 1
                        }
                    ]}
                >

                    <FlatList
                        // horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            flex: 1,
                            paddingLeft: 10,
                            paddingRight: 10,
                            // paddingBottom: 10,
                            // paddingTop: 15,
                        }}
                        data={
                            data
                        }
                        renderItem={renderShopLove}

                    />

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
                        textSize={17}
                        borderColor={COLORS?.gray}

                        textColor={COLORS?.white}
                        text={('Continue')}
                        backgroundColor={COLORS?.white}
                        onPress={() => {
                            navigation.navigate('NewPlan');
                            // languageRestart();
                        }}
                        textStyle={{
                            fontFamily: FONTS?.semi_bold,
                            color: COLORS.colorPrimary,
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

export default ChoosePlan;
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
