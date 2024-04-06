import React, { useState, useRef } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    FlatList,
    Image

} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { COLORS } from '../../constants';
import { FONTS } from '../../constants/Fonts';
import GlobalStyle from '../../styles/GlobalStyle';
import images from '../../constants/images';
import icons from '../../constants/icons';
import ToolBarIcon from '../../utils/ToolBarIcon';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Header from '../../global/Header';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import CustomButtomModal from '../../global/CustomButtomModal';
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';


const ShopNow = ({ navigation }) => {

    const [shoolUniform, setShooluniform] = useState([

        {
            selected: false,
            name: "Side planks",
            weight: '8.5',
            image: 'https://s3-alpha-sig.figma.com/img/69ea/2414/01c22f82baacdf8b52915fd3d632b103?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M2qABNPz7Q7lxdE1BcTxidsLmZRPS4IDxLyv50O-YKBdv0CkL6gDfRo-BptF~qBcMGIEudzfTa~QQL1ssCNHsp7FVTh2lldzgo8-7N15OzUpGsMsACgOMJjML26BjV~akq5qwIbWxgHM5QtPhGwgExQMYH1KZ1b5GYEaRvlHfupIR4g75KRHa81GEFeRQre1PU6JfCeNKhcsfsLlVBv7KIHJtGlqYM96wSkWpdR2yrUm6nV3inmU0SVoVDaxRIIfhjC3HuZRMMDbkWa2LScayTjeDexjj~NjNmrzAkLGstjFUw~o9dXWFhR9fDrzeghpgy~CRl23zds10x5The82~g__'
        },
        {
            selected: false,
            name: "Side planks",
            weight: '9.5',
            image: 'https://s3-alpha-sig.figma.com/img/9b9f/d851/e5efe237a0074925ec334be14ece3715?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKickv0LO9NdFdORlvuf6uGklcOUTvFYwyjiyISx6KA2b2EQn1gWeKahEUN2GDDnW-dl3MgQJIXKof4sq3XFY3GR4BNWgEoA~jhD60xsR8-8cjN-hkx4-USp8iyQ8TsFvq3PUIkuTNA56jg9ulU2681whFxGNyqfjGXcUs~OSmTshlsyNPlPI8Emir1LAIkASYZ~ZgZrwfCZEKJjrMeCk9sg1u~mhbtrlr7hoIbNJYEXoNbpvzL7v67E8Eygm3AIhpAa6RqVD42vtCMQirgYsXnRv7jpipkawhFGNfFI8pp5ZLBNt17z7jCPrj87upS6gHMhXTmpmU~ABj9TzlaMFw__'
        },
    ]);
    const renderSchoolShop = ({ item }) => {
        return (
            <TouchableOpacity
                // onPress={handleWorkoutButtonClick}
                style={[
                    GlobalStyle?.marginHorizontal10
                    , {
                        flex: 1,
                    }]}
            >

                <Image
                    style={{
                        width: 300,
                        height: 156,
                        borderRadius: 12,
                        // resizeMode: 'contain'
                    }}
                    source={{
                        uri: item?.image
                    }}

                >
                </Image>


                <View
                    style={[
                        , {
                            // flex: 1,
                            marginTop: 10,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }
                    ]}
                >
                    <View
                        style={[
                            // GlobalStyle?.flexRowAlignCenter, 
                            {
                                backgroundColor: COLORS?.colorPrimary,
                                width: 60,
                                justifyContent: 'center',
                                borderRadius: 20,
                                flexDirection: 'row',
                                paddingVertical: 3,
                                paddingHorizontal: 5,
                                alignItems: 'center'
                            }
                        ]}
                    >
                        <MaterialIcons
                            name="thumb-up"
                            siz={25}
                            color={COLORS?.white}
                        />
                        <Text
                            style={[
                                GlobalStyle.fontSize16,
                                GlobalStyle.colorWhite,
                                GlobalStyle.marginLeft5

                            ]}
                        >{item?.weight}</Text>
                    </View>
                    <Image
                        source={images?.rating}
                        style={{
                            marginLeft: 10,
                            height: 20,
                            width: 130,
                            // resizeMode:'contain'
                        }}
                    />


                </View>

            </TouchableOpacity>
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
            <ImageBackground
                source={images?.shopbackimage}
                style={{
                    // flex: 1,
                    width: '100%',
                    height: 300,
                    borderRadius: 50
                }}
            // resizeMode='contain'
            >
                <ImageBackground
                    source={images?.shopimage}
                    style={{
                        flex: 1,
                        width: '100%',
                        height: 300,
                        // position: 'absolute',
                        // right: 0,
                        borderRadius: 20,

                    }}
                >
                    <ImageBackground
                        source={images?.shopbackimage}
                        style={{
                            flex: 1,
                            width: '100%',
                        }}
                    >

                        <View
                            style={[
                                GlobalStyle?.marginBottom,
                                GlobalStyle?.marginVertical15

                                , {
                                    // flex: 1,
                                    height: 60,
                                    flexDirection: 'row',
                                    marginTop: 20,
                                    alignItems: 'center'
                                }
                            ]}
                        >
                            <ToolBarIcon
                                title={AntDesign}
                                iconName={'arrowleft'}
                                icSize={25}
                                // borderWidth={0.5}
                                icColor={COLORS?.colorBtn}
                                style={{
                                    backgroundColor: COLORS?.white,
                                    // elevation: 5,
                                    borderWidth: 0.5,
                                    borderRadius: 20,
                                    borderColor: COLORS?.gray
                                }}
                            // onPress={() => {
                            //     // navigation.goBack()
                            // }}

                            />
                            <Text
                                style={[
                                    GlobalStyle?.fontSize22,
                                    GlobalStyle?.colorWhite,
                                    GlobalStyle?.marginLeft15, {
                                        fontFamily: FONTS?.semi_bold
                                    }
                                ]}
                            >
                                Shop
                            </Text>
                        </View>

                        <View
                            style={{
                                position: 'absolute',
                                // top: '50%',
                                left: 20,
                                bottom: 30
                            }}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize25,
                                    GlobalStyle?.colorWhite, {
                                        fontFamily: FONTS?.semi_bold,
                                        fontSize: 30
                                    }
                                ]}
                            >Explore New York</Text>

                            <View
                                style={[
                                    GlobalStyle?.flexRowAlignCenter
                                ]}
                            >
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize18,
                                        GlobalStyle?.colorWhite, {
                                            fontFamily: FONTS?.regular,
                                        }
                                    ]}
                                >City in New York State</Text>
                                <Image
                                    source={icons?.arrow}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        marginLeft: 10,
                                    }}
                                />
                            </View>
                            <Image
                                source={images?.progline}
                                style={{
                                    marginTop: 30
                                }}
                            />
                        </View>
                    </ImageBackground>
                </ImageBackground>
            </ImageBackground>




            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[
                    GlobalStyle?.paddingHorizontal15
                ]}
            >
                <View
                    style={[
                        // GlobalStyle?.paddingHorizontal10,
                        GlobalStyle?.marginTop15,
                        GlobalStyle?.flexRowAlignCenter,
                        {
                            flex: 1
                        }
                    ]}
                >
                    <Image
                        source={images?.frame3}
                        style={{

                        }}
                    />
                    <View
                        style={{
                            marginLeft: 15,
                            flex: 1
                        }}
                    >
                        <Image
                            source={images?.frame1}
                            style={{
                                marginBottom: 15,
                            }}
                        />
                        <Image
                            source={images?.frame2}
                            style={{
                            }}
                        />
                    </View>
                </View>


                <View
                    style={[
                        GlobalStyle?.marginTop15,
                    ]}
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize20, {
                                fontFamily: FONTS?.medium,
                                marginTop: 15
                            }
                        ]}
                    >What’s new</Text>

                </View>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        // flex: 1,
                        // paddingLeft: 10,
                        paddingRight: 10,
                        paddingBottom: 10,
                        paddingTop: 15,
                    }}
                    data={shoolUniform}
                    renderItem={renderSchoolShop}
                />


                <View
                    style={[
                        GlobalStyle?.marginTop15,
                    ]}
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize20, {
                                fontFamily: FONTS?.medium,
                                marginTop: 15
                            }
                        ]}
                    >Popular</Text>

                </View>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        // flex: 1,
                        // paddingLeft: 10,
                        paddingRight: 10,
                        paddingBottom: 10,
                        paddingTop: 15,
                    }}
                    data={shoolUniform}
                    renderItem={renderSchoolShop}
                />


            </ScrollView>
            <View
                style={{
                    marginBottom: 30,
                    flex: 1
                }}
            />

        </SafeAreaView>
    );
};

export default ShopNow;
const styles = StyleSheet.create({

    backgroundImage: {
        width: '100%',
        height: 300,
    },
    shopImage: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: 200,
    },
});