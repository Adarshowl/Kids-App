import { StyleSheet, Text, View, Picker, Image } from 'react-native'
import React from 'react'
import { global } from './colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, SIZES, STRING } from '../constants';
import images from '../constants/images';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import GlobalStyle from '../styles/GlobalStyle';
import ToolBarIcon from '../utils/ToolBarIcon';
import { useNavigation } from '@react-navigation/native';


const Header = (props, navigation) => {
    // const navigation = useNavigation();

    const { headerTitle } = props;

    return (
        <View
            style={[
                // GlobalStyle?.flexRowAlignCenter,
                // GlobalStyle?.marginTop15,
                GlobalStyle?.marginBottom,
                GlobalStyle?.marginVertical15

                , {
                    // flex: 1,
                    height: 60,
                    flexDirection: 'row',
                    marginTop: 20,
                    alignItems: 'center',
                    paddingHorizontal: 5
                }
            ]}
        >
            <ToolBarIcon
                title={AntDesign}
                iconName={'arrowleft'}
                icSize={25}
                // borderWidth={0.5}
                icColor={COLORS?.colorBtn}
                style={{
                    backgroundColor: COLORS?.white,
                    // elevation: 5,
                    borderWidth: 0.5,
                    borderRadius: 20,
                    borderColor: COLORS?.gray
                }}
            // onPress={() => {
            //     // navigation.goBack()
            // }}

            />
            <Text
                style={[
                    GlobalStyle?.fontSize22,
                    GlobalStyle?.marginLeft15, {
                        fontFamily: FONTS?.medium
                    }
                ]}
            >
                {props.title}
            </Text>
        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    cantainer: {

        backgroundColor: COLORS?.black,
        flexDirection: 'row',



    }
})