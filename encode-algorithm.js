function encode_message ({msgArray,secretKey}) {
  let msgArray = message.split (' ');

  let msgCodeArray = toCodeArray (msgArray);
  let keyCodeArray = toCodeArray (secretKey);

  let encodedCodeArray = toEncodedMessageArray (msgCodeArray, keyCodeArray);
  let encodedMsgArray = toencodedMsgArray (encodedCodeArray);

  return encodedMsgArray;
}

function toCodeArray (arr) {
  let newArray = [];
  let m = arr.toString ();
  for (let i = 0; i < m.length; i++) {
    if (m[i].match (' ') || m[i].match (',')) {
      continue;
    } else {
      let code = toCode (m[i]);
      newArray.push (code);
    }
  }
  return newArray;
}

function toEncodedMessageArray (arr, keyCode) {
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
      newArray.push (code - 26 + 96);
    } else {
      newArray.push (code + 96);
    }
    j++;
  }
  return newArray;
}

function toCode (l) {
  return l.charCodeAt (0) - 96;
}

function toencodedMsgArray (arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push (String.fromCharCode (arr[i]));
  }
  return newArray;
}

async function getEcodedMessage () {
  const encodedMessage = await encode_message ();
  console.log (encodedMessage);
}
getEcodedMessage ();
