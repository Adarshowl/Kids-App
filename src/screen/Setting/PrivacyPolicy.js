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


const PrivacyPolicy = ({ navigation }) => {
    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer,
                GlobalStyle?.paddingHorizontal10,

                {
                }
            ]}
        >
            <Header
                title="Privacy Policy"
            // onPressLeft={() => navigation.goBack()}
            />



            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={[
                        GlobalStyle?.marginHorizontal15,
                        GlobalStyle?.marginTop5, {
                            flex: 1
                        }
                    ]}
                >
                    <Text style={[
                        GlobalStyle?.fontSize18,
                        GlobalStyle?.marginBottom
                    ]}>Privacy Policy - BodyRecomp</Text>
                    <Text style={[
                        GlobalStyle?.fontSize13, {
                            fontSize: 14.5,
                            color:COLORS?.grey

                        }
                    ]}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                    <Text style={[
                        GlobalStyle?.fontSize18,
                        GlobalStyle?.marginTop15
                    ]}>Why do we use it?</Text>
                    <Text style={[
                        GlobalStyle?.fontSize13,
                        GlobalStyle?.marginTop15,

                        {
                            fontSize: 14.5,
                            fontFamily: FONTS?.regular,
                            color: COLORS?.gray
                        }
                    ]}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </Text>


                    <Text style={[
                        GlobalStyle?.fontSize18,
                        GlobalStyle?.marginTop15
                    ]}>Where can I get some?</Text>

                    <Text style={[
                        GlobalStyle?.fontSize13,
                        GlobalStyle?.marginTop15,

                        {
                            fontSize: 14.5,
                            fontFamily: FONTS?.regular,
                            color: COLORS?.gray
                        }
                    ]}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PrivacyPolicy;
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