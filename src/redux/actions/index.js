export const USER_DATA = 'USER_DATA';
export const AUDIO_PLAY = 'AUDIO_PLAY';
export const UPDATE_MEDIA = 'UPDATE_MEDIA';
export const UPDATE_CHAT = 'UPDATE_CHAT';
export const SHOW_LOADER = 'SHOW_LOADER';
export const IS_PROJECT_EXIST = 'IS_PROJECT_EXIST';
export const fetchUserData = data => ({
  type: USER_DATA,
  payload: data,
});

export const checkAudioPlay = data => ({
  type: AUDIO_PLAY,
  payload: data,
});

export const updateMedia = data => ({
  type: UPDATE_MEDIA,
  payload: data,
});

export const updateChat = data => ({
  type: UPDATE_CHAT,
  payload: data,
});

export const showLoader = data => ({
  type: SHOW_LOADER,
  payload: data,
});
export const fetchProjectExist = data => ({
  type: IS_PROJECT_EXIST,
  payload: data,
});
