import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import icons from '../constants/icons';
import {COLORS, FONTS, STRING} from '../constants';

const Dropdown = ({
  data,
  label,
  star,
  value,
  error,
  height,
  onSelect = () => {},
}) => {
  const [showOption, setShowOption] = useState(false);
  const [focused, setFocused] = React.useState(false);

  const onSelectedItem = item => {
    setShowOption(false);
    onSelect(item);
  };

  const getBorderColor = () => {
    if (error) {
      return COLORS.red;
    }

    if (focused) {
      return COLORS.primary;
    } else {
      return COLORS.grey;
    }
  };

  const getShadowColor = () => {
    if (error) {
      return COLORS.red;
    }

    if (focused) {
      return COLORS.primary;
    } else {
      return COLORS.grey;
    }
  };

  const getBgColor = () => {
    if (error) {
      return COLORS.white;
    }

    if (focused) {
      return COLORS.white;
    } else {
      return COLORS.white;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {/*{label && (*/}
      {/*  <Text style={styles.label}>*/}
      {/*    {label}*/}
      {/*    {star}*/}
      {/*  </Text>*/}
      {/*)}*/}
      <TouchableOpacity
        onPress={() => {
          setFocused(!focused);
          setShowOption(!showOption);
        }}
        activeOpacity={0.8}
        style={[
          styles.wrapper,
          {
            backgroundColor: getBgColor(),
            borderColor: getBorderColor(),
            borderWidth: 1,
            borderRadius: 10,
            height: 50,
            alignItems: 'center',
            flexDirection: 'row',
          },
          // {
          //   shadowOffset: 10,
          // },

          {borderColor: getBorderColor()},
          {shadowColor: getShadowColor()},
          // {shadowOpacity: 10},
          // {
          //   shadowOffset: {
          //     width: 10,
          //     height: 10,
          //   },
          //   shadowRadius: 10,
          //   elevation: 10,
          // },
          {
            backgroundColor: getBgColor(),
            // borderColor: borderColor,
          },
        ]}>
        <Text
          style={{
            marginStart: 8,
            fontSize: 16,
            color: COLORS.black,
            fontFamily: value ? FONTS.medium : FONTS.regular,
          }}>
          {/* {!!value ? value : STRING.select + ' ' + label} */}
          {value ? value : STRING.select + ' production type'}
        </Text>
        <Image
          source={icons.right_arrow}
          style={[
            styles.drop_down_arrow,

            {
              tintColor: COLORS.primary,
              transform: [{rotate: showOption ? '270deg' : '90deg'}],
            },
          ]}
        />
      </TouchableOpacity>
      {showOption && (
        <Modal visible={showOption} animationType={'none'}>
          <View
            style={{
              height: height || Dimensions.get('window').height / 2.5,
            }}>
            <FlatList
              ItemSeparatorComponent={() => {
                return (
                  <View
                    style={{
                      backgroundColor: COLORS.grey,
                      height: 0.6,
                      width: '90%',
                      alignSelf: 'center',
                    }}
                  />
                );
              }}
              nestedScrollEnabled={true}
              data={data}
              keyExtractor={item => item}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: COLORS.white,
                      borderRadius: 10,
                    }}
                    key={String(index)}
                    onPress={() => {
                      onSelectedItem(item);
                      setFocused(false);
                    }}>
                    <Text
                      style={[
                        styles.listItemText,
                        {
                          fontSize: 16,
                          // backgroundColor:
                          //   item == value ? COLORS.primaryColor : COLORS.white,
                          borderWidth: 1,
                          borderColor:
                            item === value ? COLORS.primary : COLORS.white,
                          borderRadius: 5,
                          paddingVertical: 10,
                          paddingHorizontal: 10,
                          fontFamily: 'Quicksand-Medium',

                          // color: item == value ? COLORS.white : COLORS.black,
                          color: item === value ? COLORS.primary : COLORS.black,
                        },
                      ]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
            {/* {data.map((item, index) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.white,
                }}
                key={String(index)}
                onPress={() => {
                  onSelectedItem(item);
                }}>
                <Text
                  style={[
                    styles.listItemText,
                    {
                      fontSize: 16,
                      backgroundColor:
                        item == value ? COLORS.primaryColor : COLORS.white,
                      borderRadius: 10,
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                    },
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })} */}
          </View>
        </Modal>
      )}
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  wrapper: {
    height: 45,
    paddingHorizontal: 5,
    marginTop: 5,
    backgroundColor: COLORS.white,
  },
  inputContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  textInput: {
    flex: 1,
    width: '100%',
    fontSize: 16,
    // fontFamily: 'Quicksand-Medium',
    color: COLORS.black,
    borderRadius: 30,
    // borderColor: COLORS.blue,
    // borderWidth: 1,
    paddingStart: 15,
    paddingEnd: 15,
    // fontFamily: 'Quicksand-Regular',
  },
  error: {
    color: COLORS.red,
    paddingTop: 4,
    fontSize: 13,
    // fontFamily: 'Quicksand-Medium',
    // fontFamily: 'Quicksand-Regular',
  },
  label: {
    fontSize: 16,
    color: COLORS.black,
    // fontFamily: 'Quicksand-Regular',
    fontFamily: FONTS.medium,
  },

  drop_down_arrow: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 10,
  },

  listItemText: {
    fontSize: 16,
    color: COLORS.black,
    marginVertical: 10,
    marginHorizontal: 15,
  },
});
