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
import AntDesign from 'react-native-vector-icons/AntDesign'
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import { Picker } from '@react-native-picker/picker';
import KidsAppEditTextComment from '../../utils/EditText/KidsAppEditTextComment';

const CanteenSupplier = ({ navigation }) => {
    const [selectedItem, setSelectedItem] = useState('Canteen');


    const [item, setItem] = useState([
        {
            selected: true,
            name: "Racking was torn when arrived",
            id: 1,
            tittle: 'Ask me before transferring Round Ups to General Saving',
            images: icons?.shopping,
            price: '55.00'

        },
        {
            selected: false,
            name: "No cutlery present",
            tittle: 'Always move Round Ups to General Savings',
            images: icons?.shopping,
            price: '15.00',
            id: 2

        },
        {
            selected: false,
            name: "Food item($) were missing",
            tittle: 'Never ask for Round Ups to be moved to General Savings',
            images: icons?.other,
            price: '10.00',
            id: 3

        },
        {
            selected: false,
            name: "Other....",
            tittle: 'Never ask for Round Ups to be moved to General Savings',
            images: icons?.other,
            price: '10.00',
            id: 4

        }

    ]);
    const [star, setStar] = useState([
        {
            images: icons?.star1,
        },
        {
            images: icons?.star1,
        },
        {
            images: icons?.star1,
        },
        {
            images: icons?.star,
        },
        {
            images: icons?.star,
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
                        GlobalStyle?.paddingVertical10,
                        // GlobalStyle?.marginVertical10,

                        , {
                            flex: 1,
                            width: '100%',
                            borderRadius: 15,
                            marginHorizontal: 0,
                            // paddingHorizontal: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
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
                                // marginTop: 5
                            }} />
                    ) : (
                        <MaterialIcons
                            name='check-box-outline-blank'
                            size={20}
                            color={COLORS.gray}
                            style={{
                                // marginTop: 2
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
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        );
    };


    const renderStar = ({ item, index }) => {
        return (
            <View
                style={[
                    GlobalStyle?.marginHorizontal5
                    , {
                    }]}
            >
                <Image
                    source={item?.images}
                    style={{
                        width: 40,
                        height: 40
                    }}
                />
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
                title="Canteen Supplier"
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
                        GlobalStyle?.paddingHorizontal15,
                        GlobalStyle?.marginTop15
                    ]}
                >

                    <View
                        style={{
                            flex: 1,
                            marginBottom: 20
                        }}
                    >

                    </View>
                    <View
                        style={[
                            GlobalStyle?.flexRowJustifyBtwn,
                            GlobalStyle?.marginTop,
                            {
                                flex: 1,
                            }
                        ]}
                    >
                        <Image
                            source={images?.profile}
                            style={{
                                width: 55,
                                height: 55,
                                marginRight: 10,
                                borderRadius: 50
                            }}
                        />
                        <View
                            style={[
                                GlobalStyle?.flexRowJustifyBtwn,
                                {
                                    flex: 1,
                                }
                            ]}
                        >

                            <View
                                style={{
                                    flex: 1
                                }}
                            >
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize18,
                                        {
                                            fontFamily: FONTS?.semi_bold
                                        }

                                    ]}
                                >Khalid bin samad</Text>
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize14,
                                        // GlobalStyle?.marginTop,
                                        {
                                            fontFamily: FONTS?.regular
                                        }

                                    ]}
                                >Canteen Supplier</Text>
                            </View>
                        </View>
                    </View>


                    <View
                        style={[
                            GlobalStyle?.marginTop30
                        ]}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize16,
                                // GlobalStyle?.marginTop,
                                {
                                    fontFamily: FONTS?.medium
                                }

                            ]}
                        >Rate our Supplier</Text>
                    </View>

                    <View
                        style={[
                            GlobalStyle?.alignJustifyCenter,
                            GlobalStyle?.marginVertical20,
                        ]}
                    >
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            style={{
                                flex: 1,
                                // marginHorizontal: 8,
                                marginTop: 15
                            }}
                            showsVerticalScrollIndicator={false}
                            data={star}
                            extraData={star}
                            renderItem={renderStar}
                        />
                    </View>

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

                    <View
                        style={[
                            GlobalStyle?.marginTop30
                        ]}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize16,
                                // GlobalStyle?.marginTop,
                                {
                                    fontFamily: FONTS?.medium
                                }

                            ]}
                        >Comments & Notes</Text>

                        <KidsAppEditTextComment
                            placeholder="Type here"
                            // label={STRING.email}
                            // value={email}
                            height={100}
                            multiline={true}
                            maxLength={100}
                            style={{
                                borderRadius: 5,
                                ImageBackground: COLORS?.gray
                            }}
                        // keyBoardType={'email-address'}
                        // onChangeText={v => setEmail(v)}
                        />
                    </View>

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
                        >Raise Claim</Text>
                    </View>
                    <View
                        style={[
                            GlobalStyle?.commaonBorder, {
                                paddingHorizontal: 0,
                                paddingVertical: 2
                            }
                        ]}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize13,
                                GlobalStyle?.marginLeft,
                                GlobalStyle?.marginTop5, {
                                    color: COLORS?.gray
                                }
                            ]}
                        >Select your issue</Text>
                        <Picker
                            selectedValue={selectedItem}
                            onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}
                        // style={styles.picker}
                        >
                            <Picker.Item label="Other" value="Other"
                                style={{
                                    fontSize: 22,
                                    color: COLORS?.black,
                                    backgroundColor: COLORS?.white
                                }}
                            />
                            <Picker.Item label="Other option 1" value="Option1"
                                style={{
                                    fontSize: 22,
                                    color: COLORS?.black,
                                    backgroundColor: COLORS?.white
                                }}
                            />
                            <Picker.Item label="Other option 2" value="Option2"
                                style={{
                                    fontSize: 22,
                                    color: COLORS?.black,
                                    backgroundColor: COLORS?.white,
                                }}
                            />
                        </Picker>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CanteenSupplier;
const styles = StyleSheet.create({

});