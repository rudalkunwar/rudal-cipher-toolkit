# Rudal Cipher Toolkit

Rudal Cipher Toolkit provides functions for encoding and decoding messages using a variant of the Vigenère cipher.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Encoding a Message](#encoding-a-message)
  - [Decoding a Message](#decoding-a-message)
- [API](#api)
  - [encode_message](#encode_message)
  - [decode_message](#decode_message)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the package using npm:

```sh
npm install rudal-cipher-toolkit
```

## Usage

---

### Encoding a Message

To encode a message using the toolkit:

```sh
const { encode_message } = require('rudal-cipher-toolkit');
try {
  const encodedMessage = encode_message({ message: 'hello world', secretKey: 'key' });
  console.log('Encoded Message:', encodedMessage);
} catch (error) {
  console.error(error.message);
}
```

### Decoding a Message

To decode a message using the toolkit:

```sh
const { encode_message } = require('rudal-cipher-toolkit');
try {
  const encodedMessage = encode_message({ message: 'hello world', secretKey: 'key' });
  console.log('Encoded Message:', encodedMessage);
} catch (error) {
  console.error(error.message);
}
```

## API

---

### encode_message

- Parameters:
  - `options` (Object): An object containing the following properties:
    - `message` (string): The message to be encoded.
    - `secretKey` (string): The secret key used for encoding.
- Returns:
  - `string`: The encoded message.

### decode_message

- Parameters:
  - `options` (Object): An object containing the following properties:
    - `message` (string): The message to be decoded.
    - `secretKey` (string): The secret key used for decoding.
- Returns:
  - `string`: The decoded message.

## Example

---

Here's an example of using the toolkit to encode and decode a message:

```sh
const { encode_message, decode_message } = require('rudal-cipher-toolkit');
try {
  const message = 'hello world';
  const secretKey = 'key';

  const encodedMessage = encode_message({ message, secretKey });
  console.log('Encoded Message:', encodedMessage);

  const decodedMessage = decode_message({ message: encodedMessage, secretKey });
  console.log('Decoded Message:', decodedMessage);
} catch (error) {
  console.error(error.message);
}
```

## Contributing

---

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

### Steps to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## License

---

This project is licensed under the MIT License. See the LICENSE file for details.
