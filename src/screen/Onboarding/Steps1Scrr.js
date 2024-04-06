import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    FlatList
} from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';
import images from '../../constants/images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, FONTS, SIZES, STRING } from '../../constants';
import icons from '../../constants/icons';
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons'
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import { useNavigation } from '@react-navigation/native';


const Steps1Scrr = ({ goToNextStep }) => {
    const [showOtp, setShowOtp] = useState(true);
    const navigation = useNavigation();
    const [selectedGoal, setSelectedGoal] = useState(null);
    const [checkbox, setCheckbox] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    }

    return (
        <SafeAreaView style={[
            GlobalStyle.mainContainer,
            GlobalStyle.paddingHorizontal15,
            {
                flex: 1
            }]}>

            <Text
                style={[
                    GlobalStyle.fontSize25,
                    GlobalStyle.marginTop15,
                    GlobalStyle?.marginVertical15
                ]}
            >Let’s set up your account</Text>
            <Text
                style={[
                    GlobalStyle.fontSize20,
                    GlobalStyle.marginTop,
                    GlobalStyle?.marginVertical15
                ]}
            >What is your preferred email address?</Text>

            <View style={{
                flex: 1
            }}>
                <KidsAppEditText
                    placeholder="Enter your name"
                    label="Name"

                    keyBoardType={'email-address'}
                // onChangeText={v => setEmail(v)}
                />
                <KidsAppEditText
                    placeholder="Enter your email"
                    label="Nickname"

                    keyBoardType={'email-address'}
                // onChangeText={v => setEmail(v)}
                />

                <KidsAppEditText
                    placeholder="DD/MM/YYYY"
                    label="Date of Birth"
                    iconPosition={'left'}

                    keyBoardType={'number-pad'}
                // onChangeText={v => setEmail(v)}
                />
                <KidsAppEditText
                    placeholder="Enter your password"
                    label={STRING.password}
                    iconPosition={'right'}
                    secureTextEntry={showOtp}
                    value={password}
                    icon={
                        <Octicons
                            name={showOtp ? 'eye-closed' : 'eye'}
                            size={20}
                            onPress={() => setShowOtp(!showOtp)}
                            color={COLORS.primary}
                            style={{
                                marginHorizontal: 5,
                            }}
                        />
                    }
                    onChangeText={v => setPassword(v)}
                />

                <Text
                    style={{
                        fontSize: 19,
                        color: COLORS.black,
                        marginBottom: 5,
                        marginLeft: 5,
                        marginTop: 4,
                        fontFamily: FONTS?.regular,
                    }}
                >Gender</Text>
                <View
                    style={[
                        GlobalStyle?.flexRowJustifyBtwn,
                        {

                        }
                    ]}
                >
                    <TouchableOpacity
                        style={{
                            height: 50,
                            borderWidth: selectedOption === 'Boy' ? 1 : 0.5,
                            borderColor: selectedOption === 'Boy' ? COLORS?.black : COLORS?.gray,
                            backgroundColor: selectedOption === 'Boy' ? COLORS?.light : COLORS?.white,
                            marginVertical: 12,
                            marginTop: 10,
                            borderRadius: 25,
                            width: '47%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => handleOptionSelect('Boy')}

                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize18, {
                                    fontFamily: FONTS?.medium,

                                }
                            ]}
                        >Boy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: 50,
                            borderWidth: selectedOption === 'Girl' ? 1 : 0.5,
                            borderColor: selectedOption === 'Girl' ? COLORS?.black : COLORS?.gray,
                            backgroundColor: selectedOption === 'Girl' ? COLORS?.light : COLORS?.white,
                            marginVertical: 12,
                            marginTop: 10,
                            borderRadius: 25,
                            width: '47%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => handleOptionSelect('Girl')}

                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize18, {
                                    fontFamily: FONTS?.medium,
                                    // color: selectedOption === 'Girl' ? 'white' : 'black'
                                }
                            ]}
                        >Girl</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <KidsAppCommBtn
                height={55}
                width={'100%'}
                borderRadius={15}
                marginTop={30}
                textSize={17}
                borderColor={COLORS?.gray}

                textColor={COLORS?.white}
                text={('Next')}
                backgroundColor={COLORS?.white}
                onPress={goToNextStep}
                textStyle={{
                    fontFamily: FONTS?.semi_bold,
                    color: COLORS.colorPrimary,
                }}
            />
            <View
                style={[
                    GlobalStyle?.marginVertical10
                ]}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({



    selectedButton: {
        borderColor: 'red',
    },
    buttonText: {
        fontSize: 18,
    },
});

export default Steps1Scrr;
