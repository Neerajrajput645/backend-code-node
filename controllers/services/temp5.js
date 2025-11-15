const CryptoJS = require("crypto-js");

const CRYPTO_SECRET = "SECRET"; // must match encryption key

// Encrypted MPIN
const encryptMpin = "U2FsdGVkX1+uXlVbZLTI99KlQonGLuo1A7U7MiwvBwM=";

// Decrypt
const bytes = CryptoJS.AES.decrypt(encryptMpin, CRYPTO_SECRET);
const decrypted = bytes.toString(CryptoJS.enc.Utf8);

console.log("Decrypted:", decrypted);
