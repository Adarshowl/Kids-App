import Toast from 'react-native-simple-toast';

export const ShowToastMessage = msg => {
  Toast.showWithGravity(msg + '' || '', Toast.SHORT, Toast.BOTTOM);
};

export const ShowConsoleLogMessage = msg => {
  console.log(msg, '');
};

export const validateFieldNotEmpty = text => {
  return !!text;
};

export const validateEmail = text => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(text) === false) {
    console.log('Email is Not Correct');
    return false;
  } else {
    console.log('Email is Correct');
    return true;
  }
};

export const hasNumber = myString => {
  // return /\d/.test(myString);
  return /^\d+$/.test(myString);
};

export const convertTime12to24 = time12h => {
  const [time, modifier] = time12h.split(' ');

  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }
  // if (hours < 10) {
  //   return `0${hours}:${minutes}`;
  // }
  return `${hours}:${minutes}`;
};
