import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { memo, useContext } from 'react';
import { COLORS } from '../../constants/Colors';
import themeContext from '../../constants/themeContext';
import GlobalStyle from '../../styles/GlobalStyle';
import { FONTS } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

const DateItem = ({ item, onDateClick }) => {
  const theme = useContext(themeContext);
  const handlePress = () => {
    onDateClick(item);
  };
  return (


    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.9}
      style={[
        styles.wrapper,
        item.selected && {
          backgroundColor: 'transparent',
        },
      ]}>
      {item.selected ? (
        <LinearGradient
          colors={[COLORS?.primary1, COLORS?.primary3]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.wrapper}
        >
          <Text
            style={[
              GlobalStyle?.fontSize16,
              {
                color: COLORS.white,
                fontFamily: FONTS?.regular,
                fontSize: 15
              },
            ]}>
            {item.dayName}
          </Text>
          <Text
            style={[
              GlobalStyle.fontSize18,
              {
                color: COLORS.white,
              },
            ]}>
            {item.date}
          </Text>
        </LinearGradient>
      ) : (
        <TouchableOpacity
          onPress={onDateClick}
          activeOpacity={0.9}
          style={[
            styles.wrapper,
            {
              backgroundColor: COLORS?.li_gray

              // backgroundColor: item?.selected
              //   ? COLORS?.customColor
              //   : COLORS.light_gray,
            },
          ]}>
          <Text
            style={[
              GlobalStyle?.fontSize16,
              {
                color: COLORS.black,
                fontFamily: FONTS?.regular,
                fontSize: 15


              },
            ]}>
            {item?.dayName}
          </Text>
          <Text
            style={[
              GlobalStyle.fontSize18,
              {
                color: item?.selected ? COLORS.white : COLORS.black,
              },
            ]}>
            {item?.date}
          </Text>

        </TouchableOpacity>
      )}

      <View
        style={[
          GlobalStyle?.paddingTop
        ]}
      >
        {item?.days === 'working' ? (
          <Text
            style={[
              GlobalStyle?.fontSize18, {
                color: COLORS?.green,
                fontFamily: FONTS?.semi_bold
              }
            ]}
          >W</Text>
        ) : (
          <Text
            style={[
              GlobalStyle?.fontSize18, {
                color: COLORS?.red,
                fontFamily: FONTS?.semi_bold
              }
            ]}
          >R</Text>
        )}

      </View>
    </TouchableOpacity>
  );
};

export default memo(DateItem);

const styles = StyleSheet.create({

  wrapper: {
    flex: 1,

    borderRadius: 30,
    marginHorizontal: 5,
    width: 43,
    // height: 90,
    // padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10
  },

});
