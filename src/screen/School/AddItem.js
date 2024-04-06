import React, { useState, useRef } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    FlatList,
    Image

} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { COLORS, SIZES } from '../../constants';
import { FONTS } from '../../constants/Fonts';
import GlobalStyle from '../../styles/GlobalStyle';
import images from '../../constants/images';
import icons from '../../constants/icons';
import ToolBarIcon from '../../utils/ToolBarIcon';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Header from '../../global/Header';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import CustomButtomModal from '../../global/CustomButtomModal';
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import LinearGradient from 'react-native-linear-gradient';


const AddItem = ({ navigation }) => {



    const [item, setItem] = useState([

        {
            selected: false,
            name: "Gluten",
            weight: '90.2 kg',
            id: 1,
            images: 'https://cdn-icons-png.flaticon.com/128/9293/9293703.png'
        },
        {
            images: "https://cdn-icons-png.flaticon.com/128/1581/1581832.png",
            selected: false,
            name: "Peanuts",
            weight: '90.2 kg',
            id: 2,

        },
        {
            selected: true,
            name: "Egg",
            weight: '90.2 kg',
            id: 3,
            images: 'https://cdn-icons-png.flaticon.com/128/532/532573.png'

        },
        {
            selected: false,
            name: "Dairy",
            weight: '90.2 kg',
            id: 4,
            images: 'https://cdn-icons-png.flaticon.com/128/10489/10489269.png'
        },
        {
            selected: false,
            name: "Fish",
            weight: '90.2 kg',
            id: 5,
            images: 'https://cdn-icons-png.flaticon.com/128/15365/15365190.png'
        },
        {
            selected: false,
            name: "Soy",
            weight: '90.2 kg',
            id: 6,
            images: 'https://cdn-icons-png.flaticon.com/128/5377/5377965.png'
        },
        {
            selected: false,
            name: "Kiwi",
            weight: '90.2 kg',
            id: 7,
            images: 'https://cdn-icons-png.flaticon.com/128/3786/3786242.png'
        },
        {
            selected: false,
            name: "Tree Nuts",
            weight: '90.2 kg',
            id: 8,
            images: 'https://cdn-icons-png.flaticon.com/128/665/665440.png'
        },
        {
            selected: false,
            name: "Banana",
            weight: '90.2 kg',
            id: 9,
            images: 'https://cdn-icons-png.flaticon.com/128/2990/2990510.png'
        },
        {
            selected: false,
            name: "Strawberry",
            weight: '90.2 kg',
            id: 10,
            images: 'https://cdn-icons-png.flaticon.com/128/590/590685.png'
        },
        {
            selected: false,
            name: "Berries",
            weight: '90.2 kg',
            id: 11,
            images: 'https://cdn-icons-png.flaticon.com/128/1515/1515043.png'
        },
        {
            selected: false,
            name: "Mango",
            weight: '90.2 kg',
            id: 12,
            images: 'https://cdn-icons-png.flaticon.com/128/701/701008.png'
        },
    ]);


    const [selectedItem, setSelectedItem] = useState(null);

    const handlePress = (itemId) => {
        const updatedData = item.map(item => {
            if (item.id === itemId) {
                return { ...item, selected: true };
            } else {
                return { ...item, selected: false };
            }
        });
        setItem(updatedData);
    };
    const renderMeal = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => handlePress(item.id)}
                style={[
                    GlobalStyle?.marginHorizontal10,
                    GlobalStyle?.marginVertical10

                    , {
                        flex: 1,
                        width: 105,
                        height: 100,
                        borderRadius: 10,
                        borderWidth: 1.5,
                        borderColor: COLORS?.colorBtn,

                        backgroundColor: item?.selected ? COLORS?.light_green : COLORS?.white,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }]}
            >
                <Image
                    style={{
                        width: 40,
                        height: 40,
                        tintColor: COLORS?.colorBtn
                        // borderRadius: 15,
                    }}
                    source={{
                        uri: item?.images
                    }}
                >
                </Image>

                <Text
                    style={[
                        GlobalStyle?.fontSize18,
                        GlobalStyle?.marginTop, {
                            fontFamily: FONTS?.medium,
                            // color: COLORS?.colorPrimary,
                            // textAlign: 'center'
                        }
                    ]}>
                    {item?.name}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer,
                {
                }
            ]}
        >


            <Header
                title="Allergens Item"
            // onPressLeft={() => navigation.goBack(null)}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[
                    GlobalStyle?.paddingHorizontal10
                ]}
            >


                <View
                    style={[
                        // GlobalStyle?.marginTop15,
                        GlobalStyle?.paddingHorizontal10
                    ]}
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize16,
                            GlobalStyle?.marginTop,
                            GlobalStyle?.colorGray,

                            {
                                fontFamily: FONTS?.regular
                            }

                        ]}>
                        Please select any of the following to
                        which your family member may be allergic.
                    </Text>

                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[
                        // GlobalStyle?.flexRowAlignCenter,
                        {
                            // flex: 1,
                            alignItems: 'center'
                        }
                    ]}
                >
                    <FlatList
                        // horizontal
                        numColumns={3}
                        // showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            // flex: 1,
                            // paddingLeft: 10,
                            paddingRight: 10,
                            paddingBottom: 10,
                            paddingTop: 15,
                            marginTop: 15
                        }}
                        data={item}
                        renderItem={renderMeal}
                    />



                </ScrollView>

                <View
                    style={{
                        marginBottom: 30,
                        flex: 1
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default AddItem;
const styles = StyleSheet.create({
    switchIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginLeft: 10
    },
});