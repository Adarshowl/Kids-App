import React, { useState, useRef } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    FlatList,
    Image

} from 'react-native';
import CustomHeader from '../../global/CustomHeader';
import BottomSheet from 'react-native-simple-bottom-sheet';
import LinearGradient from 'react-native-linear-gradient';
import Octicons from 'react-native-vector-icons/Octicons'
import { COLORS } from '../../constants';
import { FONTS } from '../../constants/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import GlobalStyle from '../../styles/GlobalStyle';
import CommHeader from '../../global/CommHeader';
import images from '../../constants/images';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import icons from '../../constants/icons';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import CustomBottomSheet from '../../global/CustomBottomSheet';
import ToolBarIcon from '../../utils/ToolBarIcon';
import PreprationContent from '../../global/PreprationContent';


const Blog = ({ navigation }) => {



    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer
            ]}
        >
            <ScrollView>
                <ImageBackground
                    source={images?.Blog}
                    style={{
                        width: '100%',
                        height: 200
                    }}
                >
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
                        <Image
                            source={icons?.shareD}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS?.white,
                                resizeMode: 'contain'
                            }}
                        />
                    </View>
                </ImageBackground>


                <ScrollView
                    style={{
                        flex: 1,
                        backgroundColor: COLORS?.white,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        marginTop: -30
                    }}
                >
                    <View
                        style={[
                            GlobalStyle?.marginHorizontal15,
                            GlobalStyle?.marginTop15
                            , {
                                marginTop: 20
                            }
                        ]}
                    >

                        <LinearGradient
                            colors={[COLORS.primary1, COLORS.primary3]}
                            // start={{ x: 1, y: 0 }}
                            // end={{ x: 0, y: 1 }}
                            style={{
                                borderRadius: 20,
                                paddingHorizontal: 25,
                                paddingVertical: 5,
                                width: 100,
                                height: 35,
                                justifyContent: 'center',
                                alignItems: 'center'

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

                        <View
                            style={[
                                GlobalStyle?.marginTop
                            ]}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize22
                                ]}
                            >What is Body Recompositing
                                Body Recomp </Text>
                            <Text
                                style={[
                                    GlobalStyle?.marginTop,
                                    GlobalStyle?.fontSize18, {
                                        fontFamily: FONTS?.regular
                                    }
                                ]}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Text>
                        </View>
                        <View
                            style={[
                                GlobalStyle?.flexRowAlignCenter,
                                GlobalStyle?.marginTop15
                            ]}
                        >
                            <Image
                                source={images?.profile}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 50,
                                }}
                            />
                            <View
                                style={[
                                    GlobalStyle?.marginLeft
                                ]}
                            >
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize18,
                                        {
                                            fontSize: 16
                                        }
                                    ]}
                                >Kali Kutcher</Text>
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize13
                                    ]}
                                >Feb19,2023  • 8 min read</Text>
                            </View>
                        </View>

                        <View
                            style={[
                                // GlobalStyle?.marginHorizontal10,
                                GlobalStyle?.marginTop15, {
                                    marginHorizontal: 5
                                }

                            ]}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    GlobalStyle?.fontSize14TextGray,
                                    {
                                        fontFamily: FONTS?.medium,
                                    }
                                ]}
                            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    GlobalStyle?.fontSize14TextGray,
                                    GlobalStyle?.marginTop15,
                                    {
                                        fontFamily: FONTS?.medium,
                                    }
                                ]}
                            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.</Text>

                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    GlobalStyle?.fontSize14TextGray,
                                    GlobalStyle?.marginTop15,
                                    {
                                        fontFamily: FONTS?.medium,
                                    }
                                ]}
                            >
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>

                        </View>
                    </View>


                    <View
                        style={[
                            GlobalStyle?.marginVertical10
                        ]}
                    />

                </ScrollView>


            </ScrollView>

        </SafeAreaView>
    );
};

export default Blog;
const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: '100%',
        height: 600,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(80, 190, 180, 0)',
    },
    name: {
        fontSize: 20,
        color: COLORS.white,
        marginTop: 15,
        fontFamily: 'Montserrat-Medium',
    },
    email: {
        fontSize: 14,
        color: COLORS.white,
        fontFamily: 'Montserrat-Medium',
    },
});
