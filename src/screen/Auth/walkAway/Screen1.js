import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { COLORS, SIZES, } from '../../../constants';
import { FONTS } from '../../../constants/Fonts';
import images from '../../../constants/images';
import icons from '../../../constants/icons';
import GlobalStyle from '../../../styles/GlobalStyle';

const Screen1 = () => (
    <View style={{
        flex: 1,
        // marginTop: '20%' 
    }}>
        <Image
            style={{
                height: 400,
                width: '100%',
                alignSelf: 'center',
                borderRadius: 10,
                resizeMode: 'contain',
                marginHorizontal: 20
            }}
            source={images.group1} />
        <View style={{ alignItems: 'center', marginTop: 50 }}>
            <Text style={GlobalStyle?.workOutText1}>
                Workouts That Get
            </Text>
            <Text style={GlobalStyle?.workOutText1}>

                Better As You Do
            </Text>
            <Text style={GlobalStyle?.workOutText2}>
                Our workout programs continually adjust
            </Text>
            <Text style={GlobalStyle?.workOutText2}>
                as you get stronger and improve your cardio
            </Text>
            <Text style={GlobalStyle?.workOutText2}>
                your cardio
            </Text>
        </View>
    </View>
);

export default Screen1;
