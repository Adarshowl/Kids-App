import {firebase} from '@react-native-firebase/database';

export const senderMsg = async (msgValue, senderId, receiverId, img) => {
  try {
    await firebase
      .database()
      .ref('messages/' + senderId + '')
      // .child(receiverId + '')
      .push({
        message: {
          sendBy: senderId,
          receivedBy: receiverId,
          msg: msgValue,
          img: img,
          time: new Date().getTime(),
          selected: false,
        },
      });
  } catch (error) {
    console.log('EXCEPTION IN GETTING INFO FIREBASE DB -> ' + error);
  }
};
export const receiverMsg = async (msgValue, senderId, receiverId, img) => {
  try {
    await firebase
      .database()
      .ref('messages/' + receiverId + '')
      // .child(senderId + '')
      .push({
        message: {
          sendBy: senderId,
          receivedBy: receiverId,
          msg: msgValue,
          img: img,
          time: new Date().getTime(),
          selected: false,
        },
      });
  } catch (error) {
    console.log('EXCEPTION IN GETTING INFO FIREBASE DB -> ' + error);
  }
};

export const senderChatMsg = async (
  roomId,
  msgValue,
  senderId,
  receiverId,
  img,
  type,
) => {
  try {
    await firebase
      .database()
      .ref('messages/' + roomId + '')
      .push({
        roomId,
        sendBy: senderId,
        receivedBy: receiverId,
        msg: msgValue,
        img: img,
        send_time: new Date().getTime(),
        type: type,
      });
  } catch (error) {
    console.log('EXCEPTION IN GETTING INFO FIREBASE DB -> ' + error);
  }
};

export const updateSenderChatMsg = async (
  roomId,
  msgValue,
  senderId,
  receiverId,
  img,
  type,
) => {
  try {
    await firebase
      .database()
      .ref('messages/' + roomId + '')
      .push({
        message: {
          roomId,
          sendBy: senderId,
          receivedBy: receiverId,
          msg: msgValue,
          img: img,
          send_time: new Date().getTime(),
          type: type,
          selected: false,
        },
      });
  } catch (error) {
    console.log('EXCEPTION IN GETTING INFO FIREBASE DB -> ' + error);
  }
};

export const saveUserToDatabase = async (uid, email, name, img, phone) => {
  let data = {
    id: uid,
    email: email,
    name: name,
    img: img,
    phone: phone,
  };

  try {
    await firebase
      .database()
      .ref('/users/' + data?.id + '')
      .set(data)
      .then(() => {});
  } catch (error) {
    console.log('EXCEPTION IN GETTING INFO FIREBASE DB -> ' + error);
  }
};

function makeRandom(length) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const createChatList = async (
  senderUid,
  receiverUid,
  senderImage,
  receiverImage,
  name,
  receiverName,
  lastMessage,
) => {
  // console.log('createChatList messages = ', senderImage + ' ' + receiverImage);

  let roomId = makeRandom(10);
  let myData = {
    roomId,
    id: senderUid,
    name: receiverName,
    receiverUid: receiverUid,
    image: receiverImage,
    lastMessage: lastMessage || '',
    send_time: new Date().getTime(),
  };

  let dusreKaData = {
    roomId,
    id: receiverUid,
    name: name,
    receiverUid: senderUid,
    image: senderImage,
    lastMessage: lastMessage || '',
    send_time: new Date().getTime(),
  };
  try {
    await firebase
      .database()
      .ref('/chatlist/' + senderUid + '/' + receiverUid)
      .update(myData)
      .then(() => {})
      .catch(err => {
        console.log('user saved to error database1 ' + err);
      });

    await firebase
      .database()
      .ref('/chatlist/' + receiverUid + '/' + senderUid)
      .update(dusreKaData)
      .then(() => {})
      .catch(err => {
        console.log('user saved to error database2 ' + err);
      });
  } catch (error) {
    console.log('EXCEPTION IN GETTING INFO FIREBASE DB -> ' + error);
  }
};

export const createChatListLastMessage = async (
  senderUid,
  receiverUid,
  lastMessage,
) => {
  let myData = {
    // roomId,
    // id: senderUid,
    // name: receiverName,
    // receiverUid: receiverUid,
    // image: receiverImage,
    lastMessage: lastMessage || '',
    send_time: new Date().getTime(),
  };

  let dusreKaData = {
    // roomId,
    // id: receiverUid,
    // name: name,
    // receiverUid: senderUid,
    // image: senderImage,
    lastMessage: lastMessage || '',
    send_time: new Date().getTime(),
  };
  try {
    await firebase
      .database()
      .ref('/chatlist/' + senderUid + '/' + receiverUid)
      .update(myData)
      .then(() => {})
      .catch(err => {
        console.log('user saved to error database1 ' + err);
      });

    await firebase
      .database()
      .ref('/chatlist/' + receiverUid + '/' + senderUid)
      .update(dusreKaData)
      .then(() => {})
      .catch(err => {
        console.log('user saved to error database2 ' + err);
      });
  } catch (error) {
    console.log('EXCEPTION IN GETTING INFO FIREBASE DB -> ' + error);
  }
};

export const createChatLisImageUpdate = async (
  senderUid,
  receiverUid,
  image,
  name,
) => {
  let myData = {
    // roomId,
    // id: senderUid,
    name: name,
    // receiverUid: receiverUid,
    // image: receiverImage,
    image: image || '',
  };

  try {
    await firebase
      .database()
      .ref('/chatlist/' + receiverUid + '/' + senderUid)
      .update(myData)
      .then(() => {})
      .catch(err => {
        console.log('user saved to error database1 ' + err);
      });
  } catch (error) {
    console.log('EXCEPTION IN GETTING INFO FIREBASE DB -> ' + error);
  }
};
