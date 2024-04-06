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


const Setting = ({ navigation }) => {
    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer,
                GlobalStyle?.paddingHorizontal10,

                {
                    // backgroundColor: "#FAFAFA"

                }
            ]}
        >


            <Header
                title="Setting"
                onPressLeft={() => navigation.goBack(null)}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('About')
                    }}
                    style={[
                        GlobalStyle?.Viewborder,
                        {
                            borderWidth: 0,
                            elevation: 5,
                        }
                    ]}
                >

                    <View
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    >
                        <Image
                            source={icons?.about}
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain'
                            }}
                        />
                    </View>
                    <View
                        style={[
                            GlobalStyle?.flexRowJustifyBtwn,
                            GlobalStyle?.marginLeft15,
                            {
                                flex: 1,
                            }
                        ]}
                    >
                        <View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize18
                                ]}
                            >About</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    {
                                        color: COLORS?.gray
                                    }
                                ]}
                            >About your account</Text>
                        </View>
                        <MaterialIcons
                            name='arrow-forward-ios'
                            size={25}
                            color={COLORS?.black}
                            style={{
                                // alignSelf: 'center'
                            }}
                        />
                    </View>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('ChangePassword')
                    }}
                    style={[
                        GlobalStyle?.Viewborder,
                        {
                            borderWidth: 0,
                            elevation: 5,
                        }
                    ]}
                >


                    <Image
                        source={icons?.pwd}
                        style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain'
                        }}
                    />
                    <View
                        style={[
                            GlobalStyle?.flexRowJustifyBtwn,
                            GlobalStyle?.marginLeft15,
                            {
                                flex: 1,
                            }
                        ]}
                    >
                        <View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize18
                                ]}
                            >Change Password</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    {
                                        color: COLORS?.gray
                                    }
                                ]}
                            >Changes your password</Text>
                        </View>
                        <MaterialIcons
                            name='arrow-forward-ios'
                            size={25}
                            color={COLORS?.black}
                            style={{
                                // alignSelf: 'center'
                            }}
                        />
                    </View>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('PrivacyPolicy')
                    }}
                    style={[
                        GlobalStyle?.Viewborder,
                        {
                            borderWidth: 0,
                            elevation: 5,
                        }
                    ]}
                >

                    <Image
                        source={icons?.privacy}
                        style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain'
                        }}
                    />
                    <View
                        style={[
                            GlobalStyle?.flexRowJustifyBtwn,
                            GlobalStyle?.marginLeft15,
                            {
                                flex: 1,
                            }
                        ]}
                    >
                        <View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize18
                                ]}
                            >Privacy & Policy</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    {
                                        color: COLORS?.gray
                                    }
                                ]}
                            >Allow privacy & policy</Text>
                        </View>
                        <MaterialIcons
                            name='arrow-forward-ios'
                            size={25}
                            color={COLORS?.black}
                            style={{
                                // alignSelf: 'center'
                            }}
                        />
                    </View>

                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('TermsandCondition')
                    }}
                    style={[
                        GlobalStyle?.Viewborder,
                        {
                            borderWidth: 0,
                            elevation: 5,
                        }
                    ]}
                >
                    <Image
                        source={icons?.termsC}
                        style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain'
                        }}
                    />
                    <View
                        style={[
                            GlobalStyle?.flexRowJustifyBtwn,
                            GlobalStyle?.marginLeft15,
                            {
                                flex: 1,
                            }
                        ]}
                    >
                        <View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize18
                                ]}
                            >Terms & Conditions</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    {
                                        color: COLORS?.gray
                                    }
                                ]}
                            >Read Tera & conditions</Text>
                        </View>
                        <MaterialIcons
                            name='arrow-forward-ios'
                            size={25}
                            color={COLORS?.black}
                            style={{
                                // alignSelf: 'center'
                            }}
                        />
                    </View>

                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => {
                        // navigation.navigate('TermsandCondition')
                    }}
                    style={[
                        GlobalStyle?.Viewborder,
                        {
                            borderWidth: 0,
                            elevation: 5,
                        }
                    ]}
                >
                    <Image
                        source={icons?.share}
                        style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain'
                        }}
                    />
                    <View
                        style={[
                            GlobalStyle?.flexRowJustifyBtwn,
                            GlobalStyle?.marginLeft15,
                            {
                                flex: 1,
                            }
                        ]}
                    >
                        <View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize18
                                ]}
                            >Share App</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    {
                                        color: COLORS?.gray
                                    }
                                ]}
                            >Share this app your friends</Text>
                        </View>
                        <MaterialIcons
                            name='arrow-forward-ios'
                            size={25}
                            color={COLORS?.black}
                            style={{
                                // alignSelf: 'center'
                            }}
                        />
                    </View>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        // navigation.navigate('TermsandCondition')
                    }}
                    style={[
                        GlobalStyle?.Viewborder,
                        {
                            borderWidth: 0,
                            elevation: 5,
                        }
                    ]}
                >


                    <Image
                        source={icons?.rateUs}
                        style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain'
                        }}
                    />
                    <View
                        style={[
                            GlobalStyle?.flexRowJustifyBtwn,
                            GlobalStyle?.marginLeft15,
                            {
                                flex: 1,
                            }
                        ]}
                    >
                        <View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize18
                                ]}
                            >Rate Us</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    {
                                        color: COLORS?.gray
                                    }
                                ]}
                            >What you give rate this app</Text>
                        </View>
                        <MaterialIcons
                            name='arrow-forward-ios'
                            size={25}
                            color={COLORS?.black}
                            style={{
                                // alignSelf: 'center'
                            }}
                        />
                    </View>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Faq')
                    }}
                    style={[
                        GlobalStyle?.Viewborder,
                        {
                            borderWidth: 0,
                            elevation: 5,
                        }
                    ]}
                >


                    <Image
                        source={icons?.faq}
                        style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain'
                        }}
                    />
                    <View
                        style={[
                            GlobalStyle?.flexRowJustifyBtwn,
                            GlobalStyle?.marginLeft15,
                            {
                                flex: 1,
                            }
                        ]}
                    >
                        <View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize18
                                ]}
                            >FAQ's</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    {
                                        color: COLORS?.gray
                                    }
                                ]}
                            >Ask question</Text>
                        </View>
                        <MaterialIcons
                            name='arrow-forward-ios'
                            size={25}
                            color={COLORS?.black}
                            style={{
                                // alignSelf: 'center'
                            }}
                        />
                    </View>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Feedback')
                    }}
                    style={[
                        GlobalStyle?.Viewborder,
                        {
                            borderWidth: 0,
                            elevation: 5,
                        }
                    ]}
                >


                    <Image
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/128/2883/2883375.png'
                        }}
                        // source={icons?.pwd}
                        style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain'
                        }}
                    />
                    <View
                        style={[
                            GlobalStyle?.flexRowJustifyBtwn,
                            GlobalStyle?.marginLeft15,
                            {
                                flex: 1,
                            }
                        ]}
                    >
                        <View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize18
                                ]}
                            >Feedback</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    {
                                        color: COLORS?.gray
                                    }
                                ]}
                            >Give your feedback</Text>
                        </View>
                        <MaterialIcons
                            name='arrow-forward-ios'
                            size={25}
                            color={COLORS?.black}
                            style={{
                                // alignSelf: 'center'
                            }}
                        />
                    </View>

                </TouchableOpacity>

                <TouchableOpacity
                    // ContactUs
                    onPress={() => {
                        navigation.navigate('ContactUs')
                    }}
                    style={[
                        GlobalStyle?.Viewborder,
                        {
                            borderWidth: 0,
                            elevation: 5,
                        }
                    ]}
                >


                    <Image
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/128/3095/3095583.png'
                        }}
                        // source={icons?.pwd}
                        style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain'
                        }}
                    />

                    <View
                        style={[
                            GlobalStyle?.flexRowJustifyBtwn,
                            GlobalStyle?.marginLeft15,
                            {
                                flex: 1,
                            }
                        ]}
                    >
                        <View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize18
                                ]}
                            >Contact Us</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    {
                                        color: COLORS?.gray
                                    }
                                ]}
                            >Contact with Us</Text>
                        </View>
                        <MaterialIcons
                            name='arrow-forward-ios'
                            size={25}
                            color={COLORS?.black}
                            style={{
                                // alignSelf: 'center'
                            }}
                        />
                    </View>

                </TouchableOpacity>


            </ScrollView>
        </SafeAreaView>
    );
};

export default Setting;
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