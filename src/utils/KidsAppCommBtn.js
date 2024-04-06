import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const KidsAppCommBtn = ({
  height,
  width,
  borderRadius,
  textSize,
  textColor,
  text,
  marginTop,

  image,
  onPress,
  paddingHorizontal,
  marginHorizontal,
  textStyle,

  style,
  icon,
  backgroundColor,
  iconPosition

}) => {


  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };


  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        onPress();
      }}>
      <LinearGradient
        colors={[COLORS.colorBtn, COLORS.colorBtn]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: width,
          height: height,
          borderRadius: borderRadius,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: marginTop || 0,
          flexDirection: 'row',
          paddingHorizontal: paddingHorizontal,
          marginHorizontal: marginHorizontal,
          flexDirection: getFlexDirection(),
          backgroundColor: backgroundColor,

          ...style,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            onPress();
          }}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: getFlexDirection(),

          }}>
          {image && (
            <Image
              source={image}
              style={{
                width: 25,
                height: 25,
                marginHorizontal: 10,
                alignSelf: 'center',
              }}
            />
          )}

          <View>{icon && icon}</View>

          <Text
            style={[
              textStyle,
              {
                color: textColor,
                fontSize: textSize || 16,
                // marginStart: -10,
              },
            ]}>
            {text}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default KidsAppCommBtn;

const styles = StyleSheet.create({});
