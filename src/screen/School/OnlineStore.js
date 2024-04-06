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
import Fontisto from 'react-native-vector-icons/Fontisto'
import Header from '../../global/Header';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import CustomButtomModal from '../../global/CustomButtomModal';
import KidsAppEditText from '../../utils/EditText/KidsAppEditText';
import LinearGradient from 'react-native-linear-gradient';


const OnlineStore = ({ navigation }) => {

    const [selectedItem, setSelectedItem] = useState('OnlineStore');

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    const [onlinestorw, setData] = useState([
        {
            selected: false,
            name: "London Trip 2024",
            tittle: '5500 AED',
            images: 'https://s3-alpha-sig.figma.com/img/5e62/e28a/094b83e4ae3442d8feca4cb501291adb?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DrYDbT-EvlLraCB6tH0UGOsz5AaUgP2m8CWHtO0WLI2JzBCw9MVbNI6bgUtzWcZ9RAVPpiiVyt5qoOL5UaVSJKbFWC4vpiNZlD3FP3yf~aedSIvCZtIJfsfd7XgdDYHuzsAv~5sOuEUSeNNwl8uP8~s6m6u6p890-vRM01BhGigmSikdPZs4~1AZhzHs4MgzIod~gW4nVU3sOK4jHy6AVuRruSSWcP6fcdCqDJ~LBuqflfxQNqOK204HbptFg1Fx4RklXyiicNUl-eKzHx7NFlmi8BcbUdWf7tb0edX8VaP2Z4TQ-FPwhhXB-XluOU~3VAbKt9Hs0aTySxAKPQwfMQ__'
        },
        {
            selected: false,
            name: "Australia Trip 2024",
            tittle: '5500 AED',
            images: 'https://s3-alpha-sig.figma.com/img/a224/b69c/bb8931f32ee036c4a9d08de3a1fd055f?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q7S8OSPXCOP6ZZzDU985cynx~3CHcpRMD0rSUmXAMPxpRs3oq6M-upC7fliCujWxVO3E2Tg~ejrQ2r3ra6LEWT6RDsLJCqau7ujwDKyFiklv5H0IBqKkgbntKn2mrCUw5tpZQxotNI1lk5F-jarA72JmGEfsR9d8wVjCZo9WGI7FtkM8OiK~up5ONm3jNOG5qRxpr184xPVHga5FGIrWilCEHZ1zMPhi-aXcOh4MlYoJJI72gGy8no-eYNWXwZkzu2zUccdqMo0DapIdoc5RUsgKsuT7woCtpulxNED9uiOeh~cddSeQtmZDLBjebj~ACl2e3kNUXo2ZnfIUpuoCOw__'
        },
        {
            selected: false,
            name: "New York Trip 2024",
            tittle: '5500 AED',
            images: 'https://s3-alpha-sig.figma.com/img/dc34/b533/d84b31511ad3523d9c58e866c70ef87d?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EZTbU93MeyO4Yn9Dz~mfxVzYG~8AffDFMOrI3eUkpBS04hv~bDqPRnti6Dp1atxmOevugAQRXpv6XYeu1LjLUx0cVEUiZmL3oywCrtspjVqWPcScbX8OqGHPytEpj1OMb58Kmt79KrqyFf-2CGd2hR4EHpiSYW9JQ101kgAVAzEUq85bPtkC0qiWk8grOigQCsMoChJz6HT8mIja7ClaLfcPozv9BX~-Yrc4iCsWXIYk-nhWWj7rx30DLGqjduEo8XTgJmwdMbxC0fyDDmOrWVlXjY-HRt1GLIO713nnN7yIxTux4QcVbFlnLetvQOYFWLkrVJz4LOgGIYGhyCEbaQ__'
        },
        {
            selected: false,
            name: "Argentina Trip 2024",
            tittle: '5500 AED',
            images: 'https://s3-alpha-sig.figma.com/img/76aa/8806/06bbc6c533f7fc32b395560c57868749?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k4WhHZC~t6LVOeN~A1zzuRVWHqFnYsW82DSFnsVJjAwGNqI-oJi9QdGR4Feix2gKeeiLeoiT~0NJRteG1lbD5uO4ztgnCmmlHcJ6YXvw7Y1j~APmmdtaWMSA1XDmi9nQgHuNoA6z-QNmV6xGAU07Pd0v-eLl-sEqdlb0E6jFJX7oHk69~S56toyFR9L5CVI6A5zp02l7q4QdY5Fg9BOCnQ2RwvGeEbWsl1HMRfJsAjc-qdFU5CCxFz0GFUwZgPaglfPWp4ewAmI5gJAAR4PMU6Hgb-627NDANk2Up6pMHrK7xEYeVjjoXGPRhL4knknpDy-LG9Mzd3kqg1nRkEmrkA__'
        },


    ]);

    const [uniform, setunifrom] = useState([
        {
            selected: false,
            name: "Swim Cap",
            tittle: '5500 AED',
            images: 'https://s3-alpha-sig.figma.com/img/bed0/0cc6/fa0043c85f5bc9f8e442e6f25f063454?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XqpUolvLdiTf~yjC188dJvuGdKPX0yR2Z-IkBAWp3e71yjxiNSWBZzakvQ5wuAZW7bTb~iD-XYhbTZFjoQAid33Tdfcc-FgGuw0OnbLbPx-3QvTW6Izav1C1GSzmuEuaSsO0Azn1xbmoDDAbeSkjvfGS0Gg48DXpxPYye3a0z-vYyBhuslyQjKRGbNJTCIt6sIKVARAcZ01NKIeFQ55rtDC3LGkJSYFbI--dpeJdm9O83bbSYe5zDbYCGge4hk6MzutYNyr0~RWgmcb0TGVjSTSEbxM9b0N7Bq7XeIiyTEusf19F53lcoLtR3yLI7t0x-baeXvZXx5qyCEWLd8XHmA__'
        },
        {
            selected: false,
            name: "House Shirt",
            tittle: '5500 AED',
            images: 'https://s3-alpha-sig.figma.com/img/67bd/ad01/677e3c5f660b0a3faa408407a3eea0b5?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IYN7vViE6t~jwJMnP7ur2eDsxJRIhELUqh4CaDH8UN6~ncTQ0HOIe~jCrjBzSpEl1v3-fPngX8rdg~iT704e8BORoW7jgsJ-3a8-HXZ67elssVQ5ByHr9zB-KtYgNl0nXTA8qiO6gr0giLQTCrRZZ1cqlTF7XEUkPKCXPViqLZujmdP6J98dFNwpWjNnfVA7mW74IYaCotrokwv3eSZ~YJcMt2bt-uwSOND9z2uAYl9TMi7qwjCbUOAz3nsher8~k6FyC2M8XkDM9nXlFwAdUamApjc46bpi7jTB5VNG-8KZR55yvwC5B-TMCaHuPZTzTKkAM5XBWBt6aNmDlhMGHg__'
        },
        {
            selected: false,
            name: "Drawstring Bag",
            tittle: '5500 AED',
            images: 'https://s3-alpha-sig.figma.com/img/1d0e/3148/705aedbe5a27616d2e18c2fad2ce73ce?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FVn9wUQ9QnJ3pcJOdlI~z8V6aXL~5d4qcObk8Uk5wvhKv1~MA30Xyly9TpBZTrgqa~NzzPteNBo5TKx3RfLvoHb3MzFElqztlt4ovTaVvg4Cfdyd~6gF-gsFNscuUqCWJpFkD-AMBeH~pgX~VFTlgn6799Bt4jcnGQkUjfAnDmDEkBnd2GwrsJsddYbMDrKV-01qZo7Gw4Na3zibjr4trJVZgZsutBzktUAO2~A0iy6WVgAerZDMPjytLifGaUMgWvisVsYtTuEg2xVaA4f6sKPEyd~PQnRY-Dd-pl3q3b-tXFQExB4c0wtF26nKyrnuJp6lAAQokVeMxSgITudyOg__'

        },
        {
            selected: false,
            name: "White Cotton Towel",
            tittle: '5500 AED',
            images: 'https://s3-alpha-sig.figma.com/img/76af/2a01/29383bd56cd9fe75a07c300b4cfefdb9?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hl1a8Ro4i-1AS465RTrVV2FCL~PPgdQmFKXUhRRy~yILMdK-7qJudfQUIvWU~m2cw~tSXUVeqKY6ljf-nr6rVq3N4sS-nd8aoJSEFHcN7RwX9nGHTZspPYHbndmEuFpTGQIGhTidp7V2cS-quNMNXKuG~W4V1i1unLIdw3Ee19u~GrHQxcgY8hlXNoz7Hz38nrOQplfxmo9KtSkPdqvMCHYohev7cS7sZpjYFZwe~RowtLLmBRDOHd4FSUcn23vGTQ0qLrjLy3MlI0O91E7R4WRITq-SIRgTYgFExAzezbvhwI5pAPfhOi3jfP59qdNsePeJ2PjxwkH4efcaB5Ga4g__'

        },


    ]);

    const [otherStore, setOtherstore] = useState([
        {
            selected: false,
            name: "Student ID-re-Print",
            tittle: '5500 AED',
            images: 'https://s3-alpha-sig.figma.com/img/67f3/9bb6/d653cf989d556e608b090a5791994145?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WNvOePo7olLEnK2Px9r9WLZof6lqlFE7Vn-oDsTYV5qZfYZ4bXGCOQI~BzvSqd18ogFTIu~kBjzZa-XSaoe3XT8g4204OKjbAb0ovNrL1YQ0Kfpq096Q6KU4HUm1FtrzncX1yISezOnwudZjTNPeliz8UUSdTXYIRj4biMsg-n8LWXkCNPpPmVkeGAaoI8EeUCj2i1HQfzHNGg5TKuIplXxUL2qlgEmoNJcE3tyd6w-iMz-RgQV4wN3dq14MDj1htmTFs~NmHpIsz8YnV7i8Ex8Rc6whgA1y4i1UBrxIozlWp5aQLlvN2JWi0Q0zNpTHebKMvQyXIiKlyQGDYgTMoQ__'
        },
        {
            selected: false,
            name: "G1-G12 Arabic Notebook",
            tittle: '5500 AED',
            images: 'https://s3-alpha-sig.figma.com/img/0e0f/5f22/64e85a8875a8032e5af8062c739be047?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o54vDI35HCWwzWQdZsQjCtJpNLrYoJD31T431FYF~thP6yjYqGhERGAUPmdzwOiNTmyCt1IK5n~F0Th0sKlIJN7VHs-YuaajR5Od1ifIFHiK0a9HMolsWFEvXyGev3ObsbajCcRziEwpJdJ1brHj8kSfTICT6fdtSyePe8IADxoFcJWgrTi~YJdtHqYupvCLJ~~GAJlB7-2zr-q8x9GWlJ8SV0bpGG5UfP~~FNG99UBQ9lv08mPwoDV2xrBf5G2p3ld7S1uAeHc4I2gl6Z9ptRPECTMrrtECtuYxdPi3KKkySy5PQztKsprqIy~JmNYcgP9iTBRZa3AFr4XvQIzjSg__'
        },
        {
            selected: false,
            name: "G1 Notebook",
            tittle: '5500 AED',
            images: 'https://s3-alpha-sig.figma.com/img/2df2/c37e/a45cc77df9d2eaf0a95c1401d4dc1206?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FRzyTPHefz1b2jZU6M4U70y5OwobQaL-iWpkUR2dKM04ujAnSY-b9VIOpocpctZxV-PzRWNYtitmqAJudSHD9uSnBtRg7cUMWfnkxch617xlcLREq7xr6bobc0hiTBn5g2PDWbYfnKM~zsoUiRwILVCyYvjVSiF3SAGdgvavkcw2cUT0Y5vzOh4v6dUfD2iCK-j8YLP415p~nX5EJAAGtEQZjYyDXYIPNXpSEEs6VZxUlY4EcqilJPvOIPw~bkyaSoXY6aGzr~pWOON0yqoVCL1WXcQjZb9SFJOuAK-113xoq2AeKnxkSpfoenAeXrWr~Thj1Pm3GpoOJahur-q7ig__'

        },
    ]);

    const renderEvents = ({ item }) => {
        return (
            <View>
                <TouchableOpacity
                    style={[
                        // GlobalStyle?.mainContainer,
                        GlobalStyle?.paddingVertical15,
                        // GlobalStyle?.marginVertical10,

                        , {
                            flex: 1,
                            width: '100%',
                            borderRadius: 8,
                            marginHorizontal: 0,
                            // paddingHorizontal: 10,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }]}
                >

                    <Image
                        source={{
                            uri: item?.images
                        }}
                        style={{
                            width: 55,
                            height: 55,
                            borderRadius: 50
                            // resizeMode: 'contain'
                        }}
                    />
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
                                    GlobalStyle?.fontSize18,
                                    GlobalStyle?.marginTop5,

                                    {
                                        fontFamily: FONTS?.semi_bold
                                    }
                                ]}>{item?.name}</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    // GlobalStyle?.marginTop5,
                                    GlobalStyle?.colorGray,
                                    {
                                        fontFamily: FONTS?.light
                                    }
                                ]}>{item?.tittle}</Text>
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

                            <Fontisto
                                name="angle-right"
                                size={20}
                                color={COLORS?.black}
                            />

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


    const renderList = () => {
        switch (selectedItem) {
            case 'OnlineStore':
                return (
                    <View
                        style={[
                            GlobalStyle?.marginTop15,
                            GlobalStyle?.paddingHorizontal10
                        ]}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize20, {
                                    fontFamily: FONTS?.medium,
                                    marginTop: 15
                                }
                            ]}
                        >Event & Activities</Text>
                        <FlatList
                            style={{
                                // flex: 1,
                                // marginHorizontal: 8,
                            }}
                            showsVerticalScrollIndicator={false}
                            data={onlinestorw}
                            extraData={onlinestorw}
                            renderItem={renderEvents}
                        />
                    </View>
                );
            case 'Uniform':
                return (
                    <View
                        style={[
                            GlobalStyle?.marginTop15,
                            GlobalStyle?.paddingHorizontal10

                        ]}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize20, {
                                    fontFamily: FONTS?.medium,
                                    marginTop: 15
                                }
                            ]}
                        >Uniform</Text>
                        <FlatList
                            style={{
                                // flex: 1,
                                // marginHorizontal: 8,
                            }}
                            showsVerticalScrollIndicator={false}
                            data={
                                uniform
                            }
                            extraData={
                                uniform
                            }
                            renderItem={renderEvents}
                        />
                    </View>
                );
            case 'OtherStore':
                return (
                    <View
                        style={[
                            GlobalStyle?.marginTop15,
                            GlobalStyle?.paddingHorizontal10

                        ]}
                    >
                        <Text
                            style={[
                                GlobalStyle?.fontSize20, {
                                    fontFamily: FONTS?.medium,
                                    marginTop: 15
                                }
                            ]}
                        >Other Store Supplies</Text>
                        <FlatList
                            style={{
                                // flex: 1,
                                // marginHorizontal: 8,
                            }}
                            showsVerticalScrllIndicator={false}
                            data={otherStore}
                            extraData={otherStore}
                            renderItem={renderEvents}
                        />
                    </View>
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
                }
            ]}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[
                    GlobalStyle?.paddingHorizontal10
                ]}
            >

                <View
                    style={[
                        GlobalStyle?.flexRowJustifyBtwn,
                        GlobalStyle?.marginVertical20,

                        {
                            flex: 1
                        }

                    ]}
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize22, {
                                fontFamily: FONTS?.medium
                            }
                        ]}
                    >Greenfield High School</Text>
                    <View
                        style={[
                            // GlobalStyle?.flexRowAlignCenter
                            {
                                flexDirection: 'row',
                                alignItems: 'center'
                            }
                        ]}
                    >
                        <Image
                            source={icons?.search}
                            style={{
                                width: 23,
                                height: 23,
                                marginRight: 10
                            }}
                        />
                        <Image
                            source={icons?.shoppingbag}
                            style={{
                                width: 28,
                                height: 28,
                                marginRight: 10

                            }}
                        />
                    </View>
                </View>


                <View
                    style={[
                        // GlobalStyle?.flexRowJustifyBtwn, 
                        {
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }
                    ]}
                >
                    <TouchableOpacity
                        onPress={() => handleItemClick('OnlineStore')}
                        style={[
                            // GlobalStyle.commaonBorder2,
                            {
                                alignItems: 'center'
                            }
                        ]}
                    >
                        {selectedItem === 'OnlineStore' ? (
                            <Image
                                source={icons?.onlinstore1}
                                style={{
                                    width: 70,
                                    height: 70
                                }}
                            />
                        ) : (
                            <Image
                                source={icons?.onlinestore}
                                style={{
                                    width: 70,
                                    height: 70
                                }}
                            />
                        )}

                        <Text
                            numberOfLines={1}
                            style={[
                                GlobalStyle?.fontSize16,
                                GlobalStyle?.marginTop,
                                {
                                    fontFamily: FONTS?.medium,
                                }
                            ]}>Online Store</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleItemClick('Uniform')}
                        style={[
                            // GlobalStyle.commaonBorder2,
                            {
                                alignItems: 'center'
                            }
                        ]}
                    >
                        {selectedItem === 'Uniform' ? (
                            <Image
                                source={icons?.uniform1}
                                style={{
                                    width: 70,
                                    height: 70
                                }}
                            />
                        ) : (
                            <Image
                                source={icons?.uniform}
                                style={{
                                    width: 70,
                                    height: 70
                                }}
                            />
                        )}

                        <Text style={[
                            GlobalStyle?.fontSize16,
                            GlobalStyle?.marginTop,
                            {
                                fontFamily: FONTS?.medium,
                            }
                        ]}
                        >Uniform</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => handleItemClick('OtherStore')}
                        style={[
                            // GlobalStyle.commaonBorder2,
                            {
                                alignItems: 'center'
                            }
                        ]}
                    >
                        {selectedItem === 'OtherStore' ? (
                            <Image
                                source={icons?.otherstore1}
                                style={{
                                    width: 70,
                                    height: 70
                                }}
                            />
                        ) : (
                            <Image
                                source={icons?.otherstore}
                                style={{
                                    width: 70,
                                    height: 70
                                }}
                            />
                        )}
                        <Text style={[
                            GlobalStyle?.fontSize16,
                            GlobalStyle?.marginTop,
                            {
                                fontFamily: FONTS?.medium,
                            }
                        ]}>Other Store</Text>
                    </TouchableOpacity>
                </View>





                <View
                    style={{
                        marginBottom: 30,
                        flex: 1
                    }}
                />
            </ScrollView>
            {renderList()}

        </SafeAreaView>
    );
};

export default OnlineStore;
const styles = StyleSheet.create({
    switchIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginLeft: 10
    },
});