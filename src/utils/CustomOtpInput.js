import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';
import {COLORS} from '../constants';

const CustomOtpInput = () => {
  const [otp, setOtp] = useState('');
  const otpInputRefs = useRef([]);

  const handleOtpChange = (value, index) => {
    const newOtp = otp.split('');
    newOtp[index] = value;
    setOtp(newOtp.join(''));

    if (value && index < otpInputRefs.current.length - 1) {
      otpInputRefs.current[index + 1].focus();
    }
  };
  const [focused, setFocused] = React.useState(false);

  const handleOtpKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1].focus();
    }
  };
  const getBorderColor = () => {
    if (focused) {
      return COLORS.primary;
    } else {
      return COLORS.grey;
    }
  };
  const getBottomBorderColor = () => {
    if (focused) {
      return COLORS.primary;
    } else {
      return COLORS.lightest_gray1;
    }
  };
  const getBgColor = () => {
    if (focused) {
      return COLORS.white;
    } else {
      // return COLORS.lightest_gray1;
      return COLORS.white;
    }
  };
  const getElevation = () => {
    if (focused) {
      return 0;
    } else {
      return 4;
    }
  };

  const getBorderWidth = () => {
    if (focused) {
      return 1;
    } else {
      return 0;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.otpContainer}>
        {Array.from({length: 4}).map((_, index) => (
          <Input
            key={index}
            ref={ref => (otpInputRefs.current[index] = ref)}
            value={otp[index] || ''}
            onChangeText={value => handleOtpChange(value, index)}
            onKeyPress={event => handleOtpKeyPress(event, index)}
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            keyboardType={'number-pad'}
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
            inputContainerStyle={[
              styles.inputContainerStyle,
              {
                backgroundColor: getBgColor(),
                borderColor: getBorderColor(),
                elevation: getElevation(),
                borderWidth: getBorderWidth(),
                borderBottomColor: getBottomBorderColor(),
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  otpContainer: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'center',
  },
  inputContainer: {
    width: 80,
  },
  input: {
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: 16,
  },
  inputContainerStyle: {
    borderRadius: 5,
  },
});

export default CustomOtpInput;
