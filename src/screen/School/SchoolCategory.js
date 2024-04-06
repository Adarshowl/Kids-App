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
import CanteenSchool from './CanteenSchool';
import OnlineStore from './OnlineStore';
import NotificationSchool from './NotificationSchool';


const SchoolCategory = ({ navigation }) => {

    const [selectedItem, setSelectedItem] = useState('Canteen');

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    const renderList = () => {
        switch (selectedItem) {
            case 'Notification':
                return (
                    <NotificationSchool />
                );
            case 'Canteen':
                return (
                    <CanteenSchool />
                );
            case 'OnlineStore':
                return (
                    <OnlineStore />
                );
            default:
                return null;
        }
    };

    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer,
                // GlobalStyle?.paddingHorizontal10,

                {
                    // backgroundColor: "#FAFAFA",
                    // flexShrink: 1

                }
            ]}
        >
            <Header
                title="School"
            // onPressLeft={() => navigation.goBack(null)}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[
                    GlobalStyle?.paddingHorizontal10
                ]}
            >

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={[
                        // GlobalStyle?.marginTop15,
                        {
                            // flex: 1
                        }
                    ]}
                >

                    <TouchableOpacity
                        style={[
                            GlobalStyle.commaonBorder2,
                            {
                                backgroundColor: selectedItem == 'Notification' ? COLORS?.light_green : COLORS?.white
                            }
                        ]}
                        onPress={() => handleItemClick('Notification')}
                    >
                        <Text
                            numberOfLines={1}
                            style={[
                                GlobalStyle?.fontSize16, {
                                    fontFamily: FONTS?.medium,
                                    color: COLORS?.colorBtn
                                }
                            ]}>Notification</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            GlobalStyle.commaonBorder2,
                            {
                                backgroundColor: selectedItem == 'Canteen' ? COLORS?.light_green : COLORS?.white

                            }
                        ]}
                        onPress={() => handleItemClick('Canteen')}

                    >
                        <Text style={[
                            GlobalStyle?.fontSize16, {
                                fontFamily: FONTS?.medium,
                                color: COLORS?.colorBtn
                            }
                        ]}
                        >Canteen</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            GlobalStyle.commaonBorder2, {
                                backgroundColor: selectedItem == 'OnlineStore' ? COLORS?.light_green : COLORS?.white

                            }
                        ]}
                        onPress={() => handleItemClick('OnlineStore')}

                    >
                        <Text style={[
                            GlobalStyle?.fontSize16, {
                                fontFamily: FONTS?.medium,
                                color: COLORS?.colorBtn
                            }
                        ]}>Online Store</Text>
                    </TouchableOpacity>
                </ScrollView>
                {renderList()}
            </ScrollView>

        </SafeAreaView>
    );
};

export default SchoolCategory;
const styles = StyleSheet.create({
    switchIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginLeft: 10
    },
});