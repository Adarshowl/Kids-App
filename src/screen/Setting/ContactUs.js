import React, { useState, useRef } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    FlatList,
    Image,
    TextInput

} from 'react-native';

import { COLORS } from '../../constants';
import { FONTS } from '../../constants/Fonts';
import GlobalStyle from '../../styles/GlobalStyle';
import images from '../../constants/images';
import icons from '../../constants/icons';
import ToolBarIcon from '../../utils/ToolBarIcon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import Header from '../../global/Header';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';


const ContactUs = ({ navigation }) => {







    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer,
                GlobalStyle?.paddingHorizontal10,

                {
                    backgroundColor: COLORS?.white

                }
            ]}
        >
            <Header
                title="Contact Us"
                onPressLeft={() => navigation.goBack(null)}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[
                    GlobalStyle?.marginHorizontal10,
                    GlobalStyle?.marginTop15
                ]}
            >

                <KidsAppEditText
                    placeholder="Enter subject"
                    label="Subject"
                // keyBoardType={'email-address'}
                // onChangeText={v => setEmail(v)}
                />

                <KidsAppEditText
                    placeholder="Describe your problem here...."
                    label="Describe your problem"
                    // keyBoardType={'email-address'}
                    multiline={true}
                    height={200} // Set a different height for the next page

                    numberOfLines={10}
                // onChangeText={v => setEmail(v)}
                />






                <View style={[
                    // GlobalStyle?.marginHorizontal10,
                    GlobalStyle?.marginTop15,
                ]}>
                    <KidsAppCommBtn
                        height={55}
                        width={'100%'}
                        borderRadius={30}
                        marginTop={30}
                        textSize={17}
                        textColor={COLORS?.white}
                        text={('Submit')}
                        backgroundColor={COLORS?.white}
                        onPress={() => {
                            // navigation.navigate('NewPlan');
                            // openBottomSheet();
                        }}
                        textStyle={{
                            fontFamily: FONTS?.semi_bold,
                            color: COLORS.colorPrimary,
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ContactUs;
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    textInput: {
        height: 300,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        fontSize: 16,

    },
});