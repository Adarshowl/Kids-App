import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { COLORS, SIZES, } from '../../../constants';
import { FONTS } from '../../../constants/Fonts';
import images from '../../../constants/images';
import icons from '../../../constants/icons';
import GlobalStyle from '../../../styles/GlobalStyle';

const Screen2 = () => {
    return (
        <View style={{ flex: 1, }}>
            <Image
                style={{
                    height: 400,
                    width: '100%',
                    alignSelf: 'center',
                    borderRadius: 10,
                    resizeMode: 'contain',
                    marginHorizontal: 20
                }}
                source={images.group2}
            />
            <View style={{ alignItems: 'center', marginTop: 50 }}>
                <Text style={GlobalStyle?.workOutText1}>
                    Elevate Your Health
                </Text>
                <Text style={GlobalStyle?.workOutText1}>
                    One Bite At a Time
                </Text>
                <Text style={GlobalStyle?.workOutText2}>
                    Meal plans created for both taste
                </Text>
                <Text style={GlobalStyle?.workOutText2}>
                    and efficiency
                </Text>

            </View>
        </View>
    );
};

export default Screen2;
