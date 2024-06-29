const {encode_message, decode_message} = require ('./index');
const prompt = require ('prompt-async');

async function getMessage () {
  // Start the prompt.
  prompt.start ();
  // Get the message
  const {message, secretKey} = await prompt.get (['message', 'secretKey']);
  return {message: message.toLowerCase (), secretKey: secretKey.toLowerCase ()};
}

async function createDecodeMessage () {
  const {message, secretKey} = await getMessage ();
  const decodedMessage = encode_message ({message, secretKey});
  console.log (decodedMessage);

  const decode = decode_message (decodedMessage, 'aakash');
  console.log (decode);
}

createDecodeMessage ();
