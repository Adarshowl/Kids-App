import {
  Animated,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalStyle from '../styles/GlobalStyle';

const ITEM_SIZE = 40;

const CategoryDropdown = ({
  data,
  label,
  star,
  value,
  error,
  height,
  onSelect = () => {},
}) => {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const [showOption, setShowOption] = useState(false);
  const [focused, setFocused] = useState(false);

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
      return COLORS.primaryColor;
    } else {
      return COLORS.editTextTitle;
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

  const renderItem = ({item, index}) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    return (
      <TouchableOpacity
        style={[
          styles.optionItem,
          {
            backgroundColor: item === value ? COLORS.primary : COLORS.white,
          },
        ]}
        onPress={() => {
          onSelectedItem(item);
          setFocused(false);
        }}>
        <Text
          style={[
            styles.optionText,
            {
              color: item === value ? COLORS.white : COLORS.black,
            },
          ]}>
          {item}
        </Text>
        {/*{item === value ? (*/}
        {/*  <MaterialIcons name="check" style={styles.optionIcon} />*/}
        {/*) : null}*/}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity
        onPress={() => setFocused(true)}
        style={[
          styles.wrapper,
          {
            borderRadius: 3,
            alignItems: 'center',
            flexDirection: 'row',
            // backgroundColor: 'yellow',
          },
          {shadowColor: getShadowColor()},
        ]}>
        <Text
          style={{
            fontSize: 16,
            color: COLORS.black,
            fontFamily: FONTS.medium,
            paddingVertical: 3,
            paddingHorizontal: 20,
          }}>
          {value ? value : '' + label}
        </Text>
        <Ionicons name={'chevron-down-outline'} color={COLORS.grey} size={15} />
      </TouchableOpacity>
      <Modal
        visible={focused}
        animationType="slide"
        transparent={true}
        // onRequestClose={() => setFocused(false)}
      >
        <View
          style={styles.modalBackground}
          activeOpacity={1}
          // onPress={() => setFocused(false)}
        >
          <View style={styles.modalContent}>
            <View
              style={[
                GlobalStyle.flexRowAlignCenter,
                GlobalStyle.paddingVertical10,
                GlobalStyle.paddingHorizontal15,
              ]}>
              <Text
                style={[
                  styles.label,
                  {
                    marginTop: 0,
                    flex: 1,
                  },
                ]}>
                Select quantity
              </Text>
              <Ionicons
                name={'close'}
                color={COLORS.black}
                size={25}
                onPress={() => setFocused(false)}
              />
            </View>
            <View
              style={{
                height: 0.5,
                width: '100%',
                backgroundColor: COLORS.lightest_gray1,
                marginBottom: 5,
              }}
            />
            {/*{data.map((item, index) => (*/}
            {/*  <TouchableOpacity*/}
            {/*    key={index}*/}
            {/*    style={styles.optionItem}*/}
            {/*    onPress={() => {*/}
            {/*      onSelectedItem(item);*/}
            {/*      setFocused(false);*/}
            {/*    }}>*/}
            {/*    <Text*/}
            {/*      style={[*/}
            {/*        styles.optionText,*/}
            {/*        {*/}
            {/*          color: item === value ? COLORS.primary : COLORS.black,*/}
            {/*        },*/}
            {/*      ]}>*/}
            {/*      {item}*/}
            {/*    </Text>*/}
            {/*    {item === value ? (*/}
            {/*      <MaterialIcons name="check" style={styles.optionIcon} />*/}
            {/*    ) : null}*/}
            {/*  </TouchableOpacity>*/}
            {/*))}*/}
            <View
              style={{
                flexGrow: 1,
                width: '100%',
              }}>
              <FlatList
                nestedScrollEnabled={true}
                // onScroll={Animated.event(
                //   [
                //     {
                //       nativeEvent: {contentOffset: {y: scrollY}},
                //     },
                //   ],
                //   {useNativeDriver: true},
                // )}

                style={{
                  maxHeight: SIZES.width - 120,
                  width: '100%',
                }}
                data={data}
                renderItem={renderItem}
              />
            </View>
            <View style={GlobalStyle.marginVertical5} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CategoryDropdown;

const styles = StyleSheet.create({
  wrapper: {
    // paddingHorizontal: 5,
    marginTop: 5,
    paddingHorizontal: 5,
    // width: 50,
  },
  label: {
    fontSize: 16,
    marginTop: 16,
    color: COLORS.black,
    fontFamily: FONTS.semi_bold,
  },
  inputContainer: {
    // paddingHorizontal: 5,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderRadius: 3,
    elevation: 5,
    // paddingHorizontal: 10,
    alignItems: 'center',
  },
  optionItem: {
    // paddingVertical: 10,
    // flexDirection: 'row',
    // alignItems: 'center',
    flex: 1,
    // borderWidth: 1,
    // borderColor: COLORS.primary,
    // height: 45,
    // width: 45,
    margin: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 10,
  },
  optionText: {
    fontSize: 20,
    fontFamily: FONTS.medium,
    marginBottom: 3,
  },
  optionIcon: {
    fontSize: 24,
    color: COLORS.primary,
    marginEnd: 10,
  },
});
