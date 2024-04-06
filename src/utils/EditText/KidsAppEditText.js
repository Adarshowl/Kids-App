import React, { useContext } from 'react';
import { Text, TextInput, View } from 'react-native';
import { COLORS } from '../../constants/Colors';
import styles from './styles';
import themeContext from '../../constants/themeContext';
import { FONTS } from '../../constants/Fonts';

const KidsAppEditText = ({
  onChangeText,
  iconPosition,
  icon,
  style,
  value,
  label = '',
  error,
  star,
  keyBoardType,
  maxLength,
  secureTextEntry,
  backgroundColor,
  borderWidth,
  borderRadius,
  height,
  borderColor,
  borderBottomWidth,
  borderBottomColor,
  placeholder,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);
  const theme = useContext(themeContext);

  const inputHeight = height ? height : 55;


  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };
  const getBorderWidth = () => {
    if (error) {
      return 1;
    }
    if (focused) {
      return 1;
    } else {
      return 0.2;
    }
  };

  const getBorderColor = () => {
    if (error) {
      return COLORS.red;
    }

    if (focused) {
      return theme?.colors?.colorPrimary;
    } else {
      return theme?.colors?.grey;
    }
  };

  const getBgColor = () => {
    if (error) {
      return COLORS.red;
    }
    if (focused) {
      return theme?.colors?.bg;
    } else {
      // return COLORS.lightest_gray1;
      // return COLORS.bg_color;
      return theme?.colors?.bg;
    }
  };
  const getBorderRadius = () => {
    if (error) {
      return 10;
    }
    if (focused) {
      return 25;
    } else {
      // return COLORS.lightest_gray1;
      // return COLORS.bg_color;
      return 15;
    }
  };
  const getShadowColor = () => {
    if (error) {
      return COLORS.red;
    }

    if (focused) {
      return COLORS.grey;
    } else {
      // return COLORS.transparent;
      return COLORS.grey;
    }
  };

  return (
    <View style={[styles.inputContainer,
    {
      ...props?.style,
    }
    ]}>
      {label && (
        <Text
          style={[
            styles.label,
            {
              color: COLORS?.black,
              marginLeft: 5,
              marginTop: 4,
              fontFamily: FONTS?.regular,
            },
          ]}>
          {label}
          {star}
        </Text>
      )}
      <View
        style={[
          styles.wrapper,

          {
            alignItems: icon ? 'center' : 'baseline',
          },
          {
            // paddingVertical: 10,
            // paddingHorizontal: 2,
            height: inputHeight, // Apply the calculated height
            marginVertical: 12,
            marginTop: 10
            // marginHorizontal:10,
          },
          {
            borderColor: getBorderColor(),
            flexDirection: getFlexDirection(),
          },
          {
            shadowOffset: {
              width: 3,
              height: 3,
            },
          },
          {
            backgroundColor: getBgColor(),
            borderWidth: getBorderWidth(),
            // borderRadius: 5,
            borderRadius: getBorderRadius(),
            // elevation: getElevation(),
          },
        ]}>
        <View
          style={{
            width: 40,
            alignItems: 'center',
          }}>
          {icon && icon}
        </View>
        <TextInput
          autoCapitalize="none"
          // style={{
          //   color:theme?.colors?.textColor,
          // }}
          textStyle={{
            fontFamily: FONTS?.regular,
          }}
          style={[
            styles.textInput,
            style,
            {
              textAlignVertical: 'top',
              marginTop: 8
            },
          ]}
          onChangeText={onChangeText}
          placeholderTextColor={COLORS?.gray}
          value={value}
          placeholder={placeholder}
          keyboardType={keyBoardType}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />

      </View>
    </View>
  );
};

export default KidsAppEditText;
