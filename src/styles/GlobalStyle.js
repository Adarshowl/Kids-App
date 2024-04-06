import { Platform, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Colors';
import { SIZES } from '../constants';
import { FONTS } from '../constants/Fonts';


export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  flexRowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  flexAlignJustifyCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  alignJustifyCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  flexRowJustifyBtwn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  marginTop3: {
    marginTop: 3
  },
  marginTop5: {
    marginTop: 5
  },
  textUnderLine: {
    textDecorationLine: 'underline'
  },
  mainHeader: {
    minHeight: Platform.OS === 'android' ? 55 : 100,
    width: '100%',
    alignItems: 'center',
    elevation: 10,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    paddingTop: Platform.OS === 'android' ? 0 : 50,
  },
  mainHeaderDrawer: {
    minHeight: Platform.OS === 'android' ? 0 : 50,
    width: '100%',
    alignItems: 'center',
    elevation: 10,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    paddingTop: Platform.OS === 'android' ? 0 : 50,
  },
  mainHeaderText: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    color: COLORS.white,
    lineHeight: 24,
    fontWeight: 600,
    flex: 1,
  },
  appLogoImage: {
    height: 100,
    width: 150,
    // resizeMode: 'stretch',
    resizeMode: 'center',
    margin: 30,
    padding: 15,
    alignSelf: 'center',
  },
  // basic margin
  allSideMargin5: {
    margin: 5,
  },
  allSideMargin10: {
    margin: 10,
  },
  marginHorizontal5: {
    marginHorizontal: 5,
  },
  marginHorizontal10: {
    marginHorizontal: 10,
  },
  marginHorizontal15: {
    marginHorizontal: 15,
  },
  marginHorizontal20: {
    marginHorizontal: 20,
  },
  marginVertical5: {
    marginVertical: 5,
  },

  marginVertical10: {
    marginVertical: 10,
  },
  marginVertical15: {
    marginVertical: 15,
  },
  marginVertical20: {
    marginVertical: 20,
  },
  marginLeft5: {
    marginLeft: 5,
  },
  marginLeft: {
    marginLeft: 10,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  marginLeft20: {
    marginLeft: 20,
  },
  marginLeft25: {
    marginLeft: 25,
  },
  marginRight: {
    marginRight: 10,
  },
  marginRight5: {
    marginRight: 5,
  },
  marginTop: {
    marginTop: 10,
  },
  marginTop5: {
    marginTop: 5,
  },
  marginTop15: {
    marginTop: 15,
  },
  marginTop30: {
    marginTop: 30,
  },
  marginBottom: {
    marginBottom: 10,
  },
  // basic padding
  allSidePadding5: {
    margin: 5,
  },
  allSidePadding10: {
    margin: 10,
  },
  toolbarIconBg: {
    width: 30,
    height: 30,
    marginStart: 15,
    borderRadius: 5,
    backgroundColor: COLORS.light_gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbarLastIconBg: {
    width: 40,
    height: 40,
    marginStart: 15,
    marginEnd: 10,
    borderRadius: 5,
    backgroundColor: COLORS?.white,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 0.2
  },
  toolbarAppIcon: {
    width: 30,
    height: 30,
    marginEnd: 5,
    marginStart: 15,
    borderRadius: 5,
  },
  elevation: {
    elevation: 10
  },
  paddingHorizontal15: {
    paddingHorizontal: 15,
  },
  paddingHorizontal5: {
    paddingHorizontal: 5,
  },
  paddingHorizontal10: {
    paddingHorizontal: 10,
  },
  paddingVertical5: {
    paddingVertical: 5,
  },
  paddingVertical10: {
    paddingVertical: 10,
  },
  paddingHorizontal15: {
    paddingHorizontal: 15,
  },
  paddingHorizontal20: {
    paddingHorizontal: 20,
  },
  paddingVertical15: {
    paddingVertical: 15,
  },
  paddingLeft: {
    paddingLeft: 10,
  },
  paddingRight: {
    paddingRight: 10,
  },
  paddingTop: {
    paddingTop: 10,
  },
  paddingBottom: {
    paddingBottom: 10,
  },
  commonToolbarBG: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    minHeight: 56,
    elevation: 10,
  },
  emptyListText: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: COLORS.black,
    flex: 1,
    marginTop: SIZES.width / 1.5,
  },
  workOutText1: {
    fontSize: 33,
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: FONTS?.semi_bold
  },
  workOutText2: {
    fontSize: 15,
    fontFamily: FONTS.regular,
    color: COLORS.grey,
    textAlign: 'center'
  },
  borderRadius10: {
    borderRadius: 10
  },
  borderRadius5: {
    borderRadius: 5
  },
  fontSize13: {
    fontSize: 13,
    fontFamily: FONTS?.regular
  },
  colorWhite: {
    color: COLORS?.white
  },
  colorBlack: {
    color: COLORS?.black
  },
  colorGray: {
    color: COLORS?.grey
  },
  colorPrimary: {
    color: COLORS?.colorPrimary
  },
  fontSize16: {
    fontSize: 16,
    fontFamily: FONTS?.regular,
    color: COLORS?.black
  },
  fontSize15: {
    fontSize: 15,
    fontFamily: FONTS?.regular,
    color: COLORS?.black
  },
  fontSize14: {
    fontSize: 14,
    fontFamily: FONTS?.regular,
    color: COLORS?.black
  },
  fontSize30: {
    fontSize: 28,
    fontFamily: FONTS?.regular,
    color: COLORS?.black
  },
  fontSize18: {
    fontSize: 18,
    fontFamily: FONTS?.regular,
    color: COLORS?.black
  },
  fontSize20: {
    fontSize: 20,
    fontFamily: FONTS?.regular,
    color: COLORS?.black
  },
  fontSize22: {
    fontSize: 22,
    fontFamily: FONTS?.regular,
    color: COLORS?.black
  },
  fontSize25: {
    fontSize: 25,
    fontFamily: FONTS?.regular,
    color: COLORS?.black
  },
  label: {
    fontSize: 19,
    color: COLORS.black,
    fontFamily: FONTS.medium,
  },
  onbordingButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    // marginBottom: 10,
    borderRadius: 10,
    // borderWidth: 0.2,
    borderColor: COLORS?.gray,
  },
  selectedButtonColor: {
    borderColor: COLORS?.customColor,
    borderWidth: 2
  },
  borderRadius: {
    borderRadius: 12,
    borderWidth: 0.8
  },
  ImgaeStyle: {
    width: 50,
    height: 50,
    alignSelf: 'center'
    // margin: 5
  },
  fontSize14TextGray: {
    fontSize: 15.5,
    color: COLORS?.grey,
    fontFamily: FONTS?.regular
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: "#E7E7E7",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 15
  },
  selectedButton: {
    backgroundColor: COLORS?.white
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    // borderWidth: 2,
    // marginRight: 10,
    borderRadius: 15,
  },
  line: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: COLORS?.gray,
    // height: 1
    flex:1
  },
  activityIndicatorWrapper: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    // alignItems: 'center',
  },
  pickerStyle: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    height: 60,
    width: 60,
    // flex: 1,
    marginHorizontal: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  Viewborder: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 22,
    borderWidth: 0.5,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: COLORS?.gray,
    backgroundColor: COLORS?.white,
    alignItems: 'center'
    // elevation:2
  },
  commaonBorder: {
    borderWidth: 0.5,
    borderColor: COLORS?.grey,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10
  },
  commaonBorder2: {
    flexGrow: 1,
    borderRadius: 20,
    width: 140,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
    // paddingVertical: 5,
    borderWidth: 1,
    borderColor: COLORS?.colorBtn,
    marginHorizontal: 8
  }
});
