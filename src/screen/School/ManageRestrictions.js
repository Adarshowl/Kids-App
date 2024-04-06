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
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';


const ManageRestrictions = ({ navigation }) => {



    const [data, setData] = useState([
        {
            selected: true,
            name: "Drinks",
            id: 1,
            tittle: '3/2/2023 at 8:00 PM',
            images: icons?.shopping,
            price: '55.00'

        },
        {
            selected: false,
            name: "Sandwich",
            tittle: '3/2/2023 at 8:00 PM',
            images: icons?.shopping,
            price: '15.00'

        },

        {
            selected: false,
            name: "Salad",
            tittle: '3/2/2023 at 8:00 PM',
            images: icons?.food,
            price: '10.00'

        },
        {
            selected: false,
            name: "Main Dish",
            tittle: '3/2/2023 at 8:00 PM',
            images: icons?.other,
            price: '10.00'
        },
        {
            selected: false,
            name: "Dessert / Snack / Fruit",
            tittle: '3/2/2023 at 8:00 PM',
            images: icons?.other,
            price: '10.00'
        },
        {
            selected: false,
            name: "Bakery",
            tittle: '3/2/2023 at 8:00 PM',
            images: icons?.other,
            price: '10.00'
        },
        {
            selected: false,
            name: "Kids Meals",
            tittle: '3/2/2023 at 8:00 PM',
            images: icons?.other,
            price: '10.00'
        }

    ]);
    const renderItem = ({ item, index }) => {
        return (
            <View
                style={[

                ]}
            >
                <TouchableOpacity
                    style={[
                        GlobalStyle?.mainContainer,
                        GlobalStyle?.paddingVertical10,
                        // GlobalStyle?.marginVertical10,

                        , {
                            flex: 1,
                            borderRadius: 15,
                            flexDirection: 'row',
                            alignItems: 'center',

                        }]}
                >

                    <View
                        style={[
                            // GlobalStyle?.marginHorizontal5,
                            // GlobalStyle?.marginLeft15,
                            {
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }
                        ]}>

                        <View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize18,
                                    GlobalStyle?.marginTop5,

                                    {
                                        fontFamily: FONTS?.regular
                                    }
                                ]}>{item?.name}</Text>

                        </View>
                        <View
                            style={[
                                // GlobalStyle?.flexRowAlignCenter,
                                {
                                    // flex:1,
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end'
                                }
                            ]}
                        >

                            <Image
                                source={icons?.arrowdown}
                                style={{
                                    width: 18,
                                    height: 18,
                                    resizeMode: 'contain'
                                }}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
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


            <Header
                title="Add Restrictions"
            // onPressLeft={() => navigation.goBack(null)}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    paddingHorizontal: 15
                }}
            >

                <View
                    style={[
                        GlobalStyle?.paddingHorizontal10,
                        GlobalStyle?.marginTop15
                    ]}
                >

                    <View
                        style={[
                            GlobalStyle?.flexRowJustifyBtwn
                        ]}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize20, {
                                    fontFamily: FONTS?.medium,
                                    marginTop: 15
                                }
                            ]}
                        >Master Catering</Text>
                    </View>

                    <FlatList
                        style={{
                            flex: 1,
                            // marginHorizontal: 8,
                            marginTop: 15
                        }}
                        showsVerticalScrollIndicator={false}
                        data={data}
                        extraData={data}
                        renderItem={renderItem}
                    />



                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ManageRestrictions;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 0.5,
        borderRadius: 30,
        borderColor: COLORS?.gray,
        paddingVertical: 10,
        backgroundColor: COLORS?.background,
        paddingHorizontal: 10
    },
    statusButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 8,
        borderRadius: 20,
    },
    selectedButton: {
        backgroundColor: COLORS?.dark_green,
    },
    statusText: {
        fontSize: 16,
    },
});