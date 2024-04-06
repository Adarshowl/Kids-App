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


const Faq = ({ navigation }) => {
    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer,
                GlobalStyle?.paddingHorizontal10,

                {
                    backgroundColor: "#FAFAFA"

                }
            ]}
        >


            <Header
                title="FAQ"
                onPressLeft={() => navigation.goBack(null)}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <TouchableOpacity
                    style={[
                        GlobalStyle?.Viewborder
                    ]}
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize18
                        ]}
                    >Profile</Text>
                    <MaterialIcons
                        name='arrow-forward-ios'
                        size={25}
                        color={COLORS?.grey}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        GlobalStyle?.Viewborder
                    ]}
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize18
                        ]}
                    >Recipes</Text>
                    <MaterialIcons
                        name='arrow-forward-ios'
                        size={25}
                        color={COLORS?.grey}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        GlobalStyle?.Viewborder
                    ]}
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize18
                        ]}
                    >Calories</Text>
                    <MaterialIcons
                        name='arrow-forward-ios'
                        size={25}
                        color={COLORS?.grey}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        GlobalStyle?.Viewborder
                    ]}
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize18
                        ]}
                    >Workout Plan</Text>
                    <MaterialIcons
                        name='arrow-forward-ios'
                        size={25}
                        color={COLORS?.grey}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        GlobalStyle?.Viewborder
                    ]}
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize18
                        ]}
                    >Grocery List</Text>
                    <MaterialIcons
                        name='arrow-forward-ios'
                        size={25}
                        color={COLORS?.grey}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        GlobalStyle?.Viewborder
                    ]}
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize18
                        ]}
                    >Directions</Text>
                    <MaterialIcons
                        name='arrow-forward-ios'
                        size={25}
                        color={COLORS?.grey}
                    />
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
};

export default Faq;
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