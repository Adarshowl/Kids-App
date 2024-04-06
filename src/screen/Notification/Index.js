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

import { COLORS } from '../../constants';
import { FONTS } from '../../constants/Fonts';
import GlobalStyle from '../../styles/GlobalStyle';
import images from '../../constants/images';
import icons from '../../constants/icons';
import ToolBarIcon from '../../utils/ToolBarIcon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Header from '../../global/Header';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import CustomModal from '../../global/CustomModal';


const Notification = ({ navigation }) => {


    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedWeekly, setSelectedWeekly] = useState([]);
    const [selectedMonthly, setSelectedMonthly] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const handlePress = () => {
        toggleModal();
    };


    const [data, setData] = useState([
        {
            selected: true,
            name: "Money Added to Wallet",
            id: 1,
            tittle: 'Lorem Ipsum is simply dummy text.',
            images: icons?.dotred,
            price: '100'

        },
        {
            selected: false,
            name: "New Task",
            tittle: 'Lorem Ipsum is simply dummy text.',
            images: icons?.dotyellow,
            price: '200'

        },

        {
            selected: false,
            name: "Today Saving",
            tittle: 'Lorem Ipsum is simply dummy text.',
            images: icons?.dotgreen,
            price: '300'

        },
        {
            selected: false,
            name: "Canteen",
            tittle: 'Lorem Ipsum is simply dummy text.',
            images: " ",
            price: '100'

        },
        {
            selected: false,
            name: "App Update",
            tittle: 'Lorem Ipsum is simply dummy text.',
            images: "",
            price: '150'
        },

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
                        , {
                            flex: 1,
                            width: '100%',
                            borderRadius: 10,
                            marginHorizontal: 3,
                            paddingHorizontal: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderWidth: 0.5,
                            borderColor: COLORS?.gray,
                            justifyContent: 'space-between',
                            // elevation: 5,
                            marginVertical: 10,
                            paddingVertical: 20
                        }]}
                >


                    <View
                        style={[
                            GlobalStyle?.marginHorizontal5,
                            GlobalStyle?.marginLeft15,
                            {
                                flex: 1,
                                // flexDirection: 'row',
                                // justifyContent: 'space-between'
                            }
                        ]}>

                        <View
                            style={[
                                GlobalStyle?.flexRowAlignCenter,
                                {
                                }
                            ]}
                        >

                            <Text
                                style={[
                                    GlobalStyle?.fontSize18,
                                    {
                                        fontFamily: FONTS?.medium
                                    }

                                ]}
                            >{item?.name}</Text>

                        </View>
                        <Text
                            style={[
                                GlobalStyle?.fontSize14,
                                GlobalStyle?.colorGray,
                                GlobalStyle?.marginTop5,

                                {
                                    fontFamily: FONTS?.light
                                }
                            ]}>{item?.tittle}</Text>
                    </View>

                    <Image
                        source={item?.images}
                        style={{
                            width: 15,
                            height: 15,
                            marginRight: 10
                        }}
                    />
                </TouchableOpacity>

            </View>
        );
    };

    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer,
                GlobalStyle?.paddingHorizontal10,

                {
                    // backgroundColor: "#FAFAFA"

                }
            ]}
        >


            <Header
                title="Notification"
            // onPressLeft={() => navigation.goBack(null)}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <View
                    style={[
                        GlobalStyle?.paddingHorizontal10,
                        GlobalStyle?.marginTop15
                    ]}
                >
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


            <CustomModal
                visible={modalVisible}
                toggleModal={toggleModal}
                buttonText="Skip"
                customView={

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={handlePress}
                        style={[
                            , {
                                alignItems: 'center',
                                padding: 25
                            }
                        ]}
                    >
                        <Image
                            source={icons?.succes}
                            style={{
                                width: 130,
                                height: 130,
                                marginVertical: 10
                            }}
                        />
                        <Text
                            style={[
                                GlobalStyle?.fontSize25,
                                GlobalStyle?.paddingHorizontal20,
                                GlobalStyle?.colorBlack,
                                {
                                    textAlign: 'center',
                                    fontFamily: FONTS?.medium
                                }
                            ]}
                        >
                            Allowances Request
                            send Successfully
                        </Text>

                        <Text
                            style={[
                                GlobalStyle?.fontSize15,
                                GlobalStyle?.colorGray,
                                {
                                    marginTop: 10,
                                    textAlign: 'center'
                                }
                            ]}
                        >Sent your request</Text>

                    </TouchableOpacity>
                }

            />
        </SafeAreaView>
    );
};

export default Notification;
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