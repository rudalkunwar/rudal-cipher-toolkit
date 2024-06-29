function encode_message({ message, secretKey }) {
  if (typeof message !== 'string' || typeof secretKey !== 'string') {
    throw new Error('Both message and secretKey should be strings.');
  }

  let msgArray = message.split(' ');

  let msgCodeArray = toCodeArray(msgArray);
  let keyCodeArray = toCodeArray(secretKey);

  let encodedCodeArray = toEncodedMessageArray(msgCodeArray, keyCodeArray);
  let encodedMsgArray = toCharArray(encodedCodeArray);

  return encodedMsgArray.join('');
}

function toCodeArray(arr) {
  let newArray = [];
  let m = arr.toString();
  for (let i = 0; i < m.length; i++) {
    if (m[i].match(' ') || m[i].match(',')) {
      continue;
    } else {
      let code = toCode(m[i]);
      newArray.push(code);
    }
  }
  return newArray;
}

function toCode(l) {
  return l.charCodeAt(0) - 96;
}

function toEncodedMessageArray(arr, keyCode) {
  let newArray = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (j > keyCode.length - 1) {
      j = 0;
    }
    let tempKeyCode = keyCode[j];
    let tempMessageCode = arr[i];

    let code = tempMessageCode + tempKeyCode;

    if (code > 26) {
      newArray.push(code - 26 + 96);
    } else {
      newArray.push(code + 96);
    }
    j++;
  }
  return newArray;
}

function toCharArray(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(String.fromCharCode(arr[i]));
  }
  return newArray;
}

function decode_message({ message, secretKey }) {
  if (typeof message !== 'string' || typeof secretKey !== 'string') {
    throw new Error('Both message and secretKey should be strings.');
  }

  let msgArray = message.split(' ');

  let msgCodeArray = toCodeArray(msgArray);
  let keyCodeArray = toCodeArray(secretKey);

  let decodedCodeArray = toDecodedMessageArray(msgCodeArray, keyCodeArray);
  let decodedMsgArray = toCharArray(decodedCodeArray);

  return decodedMsgArray.join('');
}

function toDecodedMessageArray(arr, keyCode) {
  let newArray = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (j > keyCode.length - 1) {
      j = 0;
    }
    let tempKeyCode = keyCode[j];
    let tempMessageCode = arr[i];

    let code = tempMessageCode - tempKeyCode;

    if (code <= 0) {
      newArray.push(code + 26 + 96);
    } else {
      newArray.push(code + 96);
    }
    j++;
  }
  return newArray;
}

module.exports = {
  encode_message,
  decode_message,
};
