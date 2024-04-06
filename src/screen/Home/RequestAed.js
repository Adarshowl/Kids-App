import React, { useContext, useRef, useState } from 'react';
import {
    Image,
    Modal,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    I18nManager,
    ScrollView
} from 'react-native';
import { FONTS } from '../../constants/Fonts';

import { STRING, images } from '../../constants';
import { COLORS } from '../../constants/Colors';
import GlobalStyle from '../../styles/GlobalStyle';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import LoginHeader from '../../global/LoginHeader';
import Header from '../../global/Header';

const RequestAed = ({ navigation }) => {

    const [inputValue, setInputValue] = useState('56');

    const handleInputChange = (text) => {
        // Check if the input is a number and has 2 digits
        if (/^\d{0,2}$/.test(text)) {
            setInputValue(text); // Update the state with the input value
        }
    };

    return (
        <SafeAreaView
            style={[
                GlobalStyle.mainContainer,
                {
                },
            ]}>

            <Header
                title="Request"

            />

            <ScrollView

                style={[
                    GlobalStyle?.marginHorizontal10,
                    GlobalStyle?.marginTop15,
                    {
                    },
                ]}
            >
                <View style={[
                    GlobalStyle?.marginHorizontal15
                    , {
                        flex: 1
                    }]}>

                </View>


                <View
                    style={[
                        GlobalStyle.marginTop15,
                        GlobalStyle?.marginHorizontal10,
                        {

                        },
                    ]}>
                    <View style={styles.container}>
                        <TextInput
                            // placeholder='56'
                            style={styles.input}
                            keyboardType="numeric"
                            onChangeText={handleInputChange}
                            value={inputValue}
                            maxLength={2} // Limit input to 2 digits
                        />
                        <View
                            style={{
                                width: 0,
                                height: 40,
                                borderWidth: 1,
                                borderColor: COLORS?.black
                            }}
                        />
                        <Text
                            style={[
                                GlobalStyle?.fontSize25,
                                {
                                    fontFamily: FONTS?.medium,
                                    color: COLORS?.green
                                }
                            ]}
                        >
                            AED
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            marginTop: '20%'
                        }}
                    >
                        <View
                            style={styles?.viewborder}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize20, {
                                        fontFamily: FONTS?.semi_bold
                                    }
                                ]}
                            >5</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14, {
                                        fontFamily: FONTS?.semi_bold
                                    }
                                ]}
                            >AED</Text>
                        </View>
                        <View
                            style={styles?.viewborder}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize20, {
                                        fontFamily: FONTS?.semi_bold
                                    }
                                ]}
                            >10</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14, {
                                        fontFamily: FONTS?.semi_bold
                                    }
                                ]}
                            >AED</Text>
                        </View>
                        <View
                            style={styles?.viewborder}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize20, {
                                        fontFamily: FONTS?.semi_bold
                                    }
                                ]}
                            >20</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14, {
                                        fontFamily: FONTS?.semi_bold
                                    }
                                ]}
                            >AED</Text>
                        </View>
                        <View
                            style={styles?.viewborder}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize20, {
                                        fontFamily: FONTS?.semi_bold
                                    }
                                ]}
                            >50</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14, {
                                        fontFamily: FONTS?.semi_bold
                                    }
                                ]}
                            >AED</Text>
                        </View>
                    </View>

                    <KidsAppCommBtn
                        height={55}
                        width={'100%'}
                        borderRadius={15}
                        textSize={16}
                        fontWeight={'bold'}
                        marginTop={'15%'}
                        // marginTop={'80%'}
                        text={"Send Request"}
                        textColor={COLORS?.white}
                        onPress={() => {
                            navigation.navigate('OtpScreen');
                        }}
                        textStyle={{
                            fontFamily: FONTS?.semi_bold

                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default RequestAed;

const styles = StyleSheet.create({
    viewborder: {
        borderRadius: 50,
        borderWidth: 0.5,
        width: 75,
        height: 75,
        borderColor: COLORS?.gray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 50
    },
    input: {
        // borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        // paddingHorizontal: 10,
        // paddingVertical: 8,
        // width: 150,
        fontSize: 40,
        fontFamily: FONTS?.medium
    },
});
