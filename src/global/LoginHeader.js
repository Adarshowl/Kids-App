import { StyleSheet, Text, View, Picker, Image } from 'react-native'
import React from 'react'
import { global } from './colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, SIZES, STRING } from '../constants';
import images from '../constants/images';
import GlobalStyle from '../styles/GlobalStyle';
import ToolBarIcon from '../utils/ToolBarIcon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';


const LoginHeader = (props) => {

    const navigation = useNavigation();
    const { headerTitle } = props;

    return (
        <LinearGradient
            colors={[COLORS.colorPrimary, COLORS.colorPrimary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
                paddingHorizontal: 8,
                paddingVertical: 20,

                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                height: 120
            }}>

            <View style={{
                flexDirection: "row",
                alignItems: 'center',
                flex: 1
            }}>
                <ToolBarIcon
                    title={AntDesign}
                    iconName={'arrowleft'}
                    icSize={25}
                    borderRadius={20}
                    icColor={COLORS?.colorBtn}
                    style={{
                        backgroundColor: COLORS?.white,
                        elevation: 5,
                        borderRadius: 30
                    }}
                    onPress={() => {
                        navigation.goBack()
                    }}

                />

                <Text
                    style={[
                        GlobalStyle?.fontSize22,
                        GlobalStyle?.colorWhite,
                        GlobalStyle?.marginLeft25,
                        {
                            fontFamily: FONTS?.semi_bold,
                            marginLeft: '20%',
                            fontSize: 24
                        }
                    ]}
                >
                    KIDS APP
                </Text>

            </View>

            {/* <View style={{
                alignItems: 'center',
                flex: 1,
                justifyContent:'center'
            }}>
                <Text
                style={[
                    GlobalStyle?.fontSize30,
                    GlobalStyle?.colorWhite,
                    {
                        fontFamily:FONTS?.medium
                    }
                ]}
                >
                    KIDS APP
                </Text>
            </View> */}
        </LinearGradient>

    )
}

export default LoginHeader

const styles = StyleSheet.create({
    cantainer: {

        backgroundColor: COLORS?.black,
        flexDirection: 'row',



    }
})