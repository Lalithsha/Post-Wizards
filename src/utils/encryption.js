// RSA/encryption.js


const NodeRSA = require('node-rsa');
const { privateKey, publicKey } = require('./keys');

const publicRSAKey = new NodeRSA(publicKey);
publicRSAKey.setOptions({ encryptionScheme: 'pkcs1' }); // New line

const privateRSAKey = new NodeRSA(privateKey);
privateRSAKey.setOptions({ encryptionScheme: 'pkcs1' }); // New line

function encryptData(data) {
    return publicRSAKey.encrypt(data, 'base64', 'utf8'); // Modified line
}

function decryptData(encryptedData) {
    return privateRSAKey.decrypt(encryptedData, 'utf8'); // Modified line
}

module.exports = { encryptData, decryptData };


// const NodeRSA = require('node-rsa');
// const { privateKey, publicKey } = require('./keys');

// const publicRSAKey = new NodeRSA(publicKey);
// const privateRSAKey = new NodeRSA(privateKey);

// function encryptData(data) {
//     return publicRSAKey.encrypt(data, 'base64');
// }

// function decryptData(encryptedData) {
//     return privateRSAKey.decrypt(encryptedData, 'utf8');
// }

// module.exports = { encryptData, decryptData };
