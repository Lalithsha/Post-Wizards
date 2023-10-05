// RSA/keys.js

const NodeRSA = require('node-rsa');
const keySize = 1024;

const key = new NodeRSA({ b: keySize });

module.exports = {
    privateKey: key.exportKey('private'),
    publicKey: key.exportKey('public')
}
