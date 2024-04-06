import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../constants';
import KidsAppCommBtn from '../utils/KidsAppCommBtn';

const CustomButtomModal = ({ visible, toggleModal, buttonText, onPressButton, customView }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={toggleModal}
    >
      <View style={{
        flex: 1,
        justifyContent: 'flex-end',
        //  alignItems: 'center', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)'

      }}>

        <View style={{
          backgroundColor: COLORS.white,
          // padding: 10,
          // borderRadius: 20,
          // marginHorizontal: 20
          borderTopRightRadius:20,
          borderTopLeftRadius:20
        }}>
          {customView}

          {buttonText &&
            <View
              style={{
                marginHorizontal: 20,
                marginBottom: 20
              }}
            >
              <KidsAppCommBtn
                height={55}
                width={'100%'}
                borderRadius={15}
                marginTop={30}
                textSize={17}
                borderColor={COLORS?.customColor}
                textColor={COLORS?.white}
                text={buttonText}
                onPress={onPressButton}
                textStyle={{ fontFamily: FONTS?.semi_bold, color: COLORS.colorPrimary }}
              />
            </View>
          }
        </View>
      </View>
    </Modal>
  );
};

export default CustomButtomModal;
