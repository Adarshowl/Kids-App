import { StyleSheet, Text, View, Picker } from 'react-native'
import React from 'react'
import { global } from './colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, SIZES, STRING } from '../constants';


const CommHeader = (props) => {


    const { headerTitle } = props;

    return (
        <LinearGradient
            colors={[COLORS.primary1, COLORS.primary2, COLORS.primary3]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
                paddingHorizontal: 20,
                paddingVertical: 20,

                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                height: 130
            }}>
         


            <View style={{
                // flexDirection: 'row',
                // alignItems: 'center',
                marginTop: 10
            }}>
                <Text style={{
                    fontSize: 25, color: "white", alignItems: 'center',
                    fontFamily: FONTS?.semi_bold,
                    marginLeft: 10
                }}>

                    {props.headerTitle}
                </Text>
                <Text style={{
                    fontSize: 26,
                    color: "white",
                    fontFamily: FONTS.semi_bold,
                    marginLeft: 10
                }}>
                    {props.title}
                </Text>
            </View>
        </LinearGradient>

    )
}

export default CommHeader

const styles = StyleSheet.create({
    cantainer: {

        backgroundColor: COLORS?.black,
        flexDirection: 'row',



    }
})