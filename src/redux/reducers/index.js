// IMPORT ALL CONSTANT STRINGS DEFINED IN action file == ../actions/Camp.js
import {
  AUDIO_PLAY,
  IS_PROJECT_EXIST,
  SHOW_LOADER,
  UPDATE_CHAT,
  UPDATE_MEDIA,
  USER_DATA,
} from '../actions/index';

const initialState = {
  userData: {},
  chatData: {},
  audioPlay: false,
  projectExist: false,
  media: {},
  loader: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case AUDIO_PLAY:
      return {
        ...state,
        audioPlay: action.payload,
      };
    case UPDATE_MEDIA:
      return {
        ...state,
        media: action.payload,
      };
    case SHOW_LOADER:
      return {
        ...state,
        loader: action.payload,
      };
    case UPDATE_CHAT:
      return {
        ...state,
        chatData: action.payload,
      };
    case IS_PROJECT_EXIST:
      return {
        ...state,
        projectExist: action.payload,
      };
    default:
      return state;
  }
};
export default Reducer;
