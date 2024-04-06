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
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import Header from '../../global/Header';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';


const Feedback = ({ navigation }) => {


    const data = [
        { id: '1', title: 'Very Bad', name: "😡" },
        { id: '2', title: 'Bad', name: '😡' },
        { id: '3', title: 'Neutral', name: '😐' },
        { id: '4', title: 'Good', name: '😊' },
        { id: '5', title: 'Very Good', name: '😃' },
    ];

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={[
                    GlobalStyle?.flexAlignJustifyCenter,
                    GlobalStyle?.marginTop15,
                    {
                        marginHorizontal: 8
                    }

                ]}
            >
                <Text
                    style={{
                        fontSize: 40
                    }}
                >{item?.name}</Text>
                <Text
                    style={[
                        GlobalStyle?.fontSize16,
                        GlobalStyle?.marginTop
                    ]}
                > {item?.title}</Text>

            </TouchableOpacity>
        )
    };


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
                title="Feedback"
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
                    placeholder="Enter your Email address"
                    label="Email address (optional)"
                    keyBoardType={'email-address'}
                // onChangeText={v => setEmail(v)}
                />

                <Text
                    style={[
                        GlobalStyle?.fontSize18,
                        GlobalStyle?.marginTop15,
                        GlobalStyle?.marginLeft
                    ]}
                >
                    Rate your experience
                </Text>


                <View style={{ flex: 1 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{
                            // flex: 1,
                            // paddingLeft: 10,
                            paddingRight: 10,
                            paddingBottom: 10,
                            paddingTop: 10,
                            marginBottom: 20
                        }}
                    />

                    <KidsAppEditText
                        placeholder="Say something here..."
                        label="Comment, If any?"

                        maxLength={600}
                        multiline={true}
                        height={200} // Set a different height for the next page

                        numberOfLines={10}
                    // onChangeText={v => setEmail(v)}
                    />
                </View>

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
                        text={('Publish Feedback')}
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

export default Feedback;
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