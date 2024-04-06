import React, { useContext } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants/Colors';
import { FONTS } from '../../constants/Fonts';
import KidsAppCommBtn from '../../utils/KidsAppCommBtn';
import KidsAppBorderWidthBtn from '../../utils/KidsAppBorderWidthBtn';
// import useTranslation from 'react-i18next'
import Ionicons from 'react-native-vector-icons/Ionicons';


const LogoutConfirmationModal = ({ visible, onCancel, onConfirm }) => {
    // const { t } = useTranslation();

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onCancel}>
            <View
                style={[
                    styles.modalContainer,
                    {
                        // backgroundColor: theme?.colors?.transparent
                    },
                ]}>
                <View
                    style={[
                        styles.modalContent,
                        {
                            backgroundColor: COLORS?.light_green,
                            padding:10,
                        },
                    ]}>
                    <View
                        style={{
                            width: '40%',
                            height: 3,
                            backgroundColor: COLORS?.gray,
                            // borderWidth:1,
                            alignSelf: 'center',
                            marginTop: 25,
                            marginBottom: 30,
                        }}
                    />
                    <Text
                        style={[
                            styles.modalTitle,
                            {
                                color: '#E35D5E',
                                // color:theme?.colors?.textColor
                            },
                        ]}>
                        Logout
                    </Text>
                    <Text
                        style={[
                            styles.modalText,
                            {
                                color: COLORS?.black,
                            },
                        ]}>
                        Are you sure you want to log out?
                    </Text>
                    <View style={styles.buttonContainer}>
                        <KidsAppBorderWidthBtn
                            height={50}
                            width={'48%'}
                            borderRadius={20}
                            textSize={16}
                            // textColor={COLORS?.white}

                            textColor={COLORS?.white}
                            text={'Cancel'}
                            backgroundColor={COLORS?.dark_green}
                            onPress={onCancel}
                            // onPress={() => {
                            //   navigation.navigate('Checkout');
                            // }}
                            textStyle={{
                                fontFamily: FONTS?.bold,

                                // textTransform: 'uppercase',
                            }}
                        />
                        <KidsAppBorderWidthBtn
                            height={50}
                            width={'48%'}
                            borderRadius={20}
                            textSize={16}
                            textColor={COLORS?.white}
                            text={'Yes, Logout'}
                            backgroundColor={COLORS?.colorBtn}
                            onPress={onConfirm}
                            // onPress={() => {
                            //   navigation.navigate('Checkout');
                            // }}
                            textStyle={{
                                fontFamily: FONTS?.bold,
                            }}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    divLine: {
        height: 0.5,
        width: '100%',
        backgroundColor: COLORS.gray,
        alignSelf: 'center',
        marginVertical: 5,
        marginTop: 10,
        marginBottom: 10,
    },
    modalContent: {
        backgroundColor: COLORS?.white,
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 30,
    },
    modalTitle: {
        fontFamily: FONTS?.medium,
        fontSize: 25,
        color: COLORS.black,
        marginBottom: 10,
        textAlign: 'center',
    },
    modalText: {
        fontFamily: FONTS?.regular,
        fontSize: 16,
        color: COLORS.black,
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        alignItems: 'center',
    },
    confirmButton: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: COLORS.colorPrimary,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
    },
});

export default LogoutConfirmationModal;
