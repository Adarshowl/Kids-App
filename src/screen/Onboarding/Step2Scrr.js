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


const Step2Scrr = ({ goToNextStep }) => {
    const [showOtp, setShowOtp] = useState(true);
    const navigation = useNavigation();


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
            >What is Mobile Number?</Text>


            <View style={{
                flex: 1
            }}>
                <KidsAppEditText
                    placeholder="Enter your Phone Number"
                    label="Mobile Number"
                    iconPosition={'left'}
                    maxLength={10}
                    style={{
                        marginHorizontal: 10,
                        marginLeft: 20

                    }}
                    // value={email}
                    icon={
                        <View style={[
                            GlobalStyle?.flexRowAlignCenter,
                            GlobalStyle?.marginLeft15
                        ]}>
                            <Image
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/128/321/321238.png'
                                }}
                                style={{
                                    width: 28,
                                    height: 32,
                                    borderRadius: 5
                                }}
                            />
                            <AntDesign
                                name='caretdown'
                                size={15}
                                color={COLORS?.black}
                                style={[GlobalStyle?.marginHorizontal5]}
                            />
                        </View>
                    }
                    keyBoardType={'number-pad'}
                // onChangeText={v => setEmail(v)}
                />
                <Text
                    style={[
                        GlobalStyle?.fontSize14,
                        GlobalStyle?.colorGray,
                        GlobalStyle?.marginTop
                    ]}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>

            </View>
            <KidsAppCommBtn
                height={55}
                width={'100%'}
                borderRadius={15}
                marginTop={30}
                textSize={17}
                borderColor={COLORS?.gray}

                textColor={COLORS?.white}
                text={('Send')}
                backgroundColor={COLORS?.white}
                onPress={goToNextStep}
                // onPress={() => {
                //     navigation.navigate('OtpScreenStep', { goToNextStep })
                // }}
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




});

export default Step2Scrr;
