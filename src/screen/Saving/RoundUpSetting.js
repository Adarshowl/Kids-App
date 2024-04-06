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


const RoundUpSetting = ({ navigation }) => {


    const [selectedStatus, setSelectedStatus] = useState(null);

    const handleStatusSelect = (status) => {
        setSelectedStatus(status);
    };


    const [item, setItem] = useState([
        {
            selected: true,
            name: "Ask before transferring",
            id: 1,
            tittle: 'Ask me before transferring Round Ups to General Saving',
            images: icons?.shopping,
            price: '55.00'

        },
        {
            selected: false,
            name: "Always round up",
            tittle: 'Always move Round Ups to General Savings',
            images: icons?.shopping,
            price: '15.00',
            id: 2

        },
        {
            selected: false,
            name: "Never round up",
            tittle: 'Never ask for Round Ups to be moved to General Savings',
            images: icons?.other,
            price: '10.00',
            id: 3

        }

    ]);

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
    const renderItem = ({ item, index }) => {
        return (
            <View
                style={[

                ]}
            >
                <TouchableOpacity
                    onPress={() => handlePress(item.id)}

                    style={[
                        GlobalStyle?.mainContainer,
                        GlobalStyle?.paddingVertical15,
                        GlobalStyle?.marginVertical10,

                        , {
                            flex: 1,
                            width: '100%',
                            borderRadius: 15,
                            marginHorizontal: 0,
                            // paddingHorizontal: 10,
                            flexDirection: 'row',
                            // alignItems: 'center',
                            // borderWidth: 0.5,
                            // borderColor: COLORS?.gray
                        }]}
                >

                    {item?.selected ? (
                        <Image
                            source={icons.checkBox}
                            style={{
                                width: 20,
                                height: 20,
                                resizeMode: 'contain',
                                marginTop: 5
                            }} />
                    ) : (
                        <MaterialIcons
                            name='check-box-outline-blank'
                            size={20}
                            color={COLORS.gray}
                            style={{
                                marginTop: 2
                            }}
                        />
                    )}
                    <View
                        style={[
                            GlobalStyle?.marginHorizontal5,
                            GlobalStyle?.marginLeft15,
                            {
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }
                        ]}>



                        <View>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    // GlobalStyle?.marginTop5,

                                    {
                                        fontFamily: FONTS?.regular
                                    }
                                ]}>{item?.name}</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize14,
                                    GlobalStyle?.colorGray,

                                    {
                                        fontFamily: FONTS?.regular
                                    }
                                ]}>{item?.tittle}</Text>

                        </View>




                    </View>
                </TouchableOpacity>
                <View
                    style={{
                        borderWidth: 0.2,
                        borderColor: COLORS?.gray,
                        // flexGrow:1
                    }}
                />
            </View>
        );
    };

    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer,
                {
                    // backgroundColor: "#FAFAFA"

                }
            ]}
        >


            <Header
                title="Round Up Setting"
            // onPressLeft={() => navigation.goBack(null)}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[
                    GlobalStyle?.paddingHorizontal15,
                ]}
            >

                <View
                    style={[
                        GlobalStyle?.paddingHorizontal10,
                        GlobalStyle?.marginTop15
                    ]}
                >

                    <View
                        style={{
                            flex: 1,
                            marginBottom: 20
                        }}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize16,
                                {
                                    fontFamily: FONTS?.extra_light
                                }
                            ]}
                        >
                            saving for something awesome? Round-ups
                            makes it easy. Each time you spend, you
                            can choose to have your change deposited
                            into saving - Or set it to “Always”, and we'll
                            automatically save for you!
                        </Text>
                    </View>
                    <View
                        style={{
                            borderWidth: 0.5,
                            borderColor: COLORS?.black,
                            // flexGrow:1
                        }}
                    />
                    <FlatList
                        style={{
                            flex: 1,
                            // marginHorizontal: 8,
                            marginTop: 15
                        }}
                        showsVerticalScrollIndicator={false}
                        data={item}
                        extraData={item}
                        renderItem={renderItem}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default RoundUpSetting;
const styles = StyleSheet.create({

});