const {CEP18Client} = require('casper-cep18-js-client');
const {Keys} = require('casper-js-sdk');
const config = require('./config');

const cep18 = new CEP18Client(config.nodeUrl, config.networkName);

const ownerKeys = Keys.Ed25519.loadKeyPairFromPrivateFile(config.ownerKeysPath);

const recipientKeys = Keys.Ed25519.loadKeyPairFromPrivateFile(config.recipientKeys);

cep18.setContractHash(config.contractHash);

const deploy = cep18.transfer(
    {
      recipient: recipientKeys.publicKey,
      amount: 5_000_000_000
    },
    5_000_000_000,
    ownerKeys.publicKey,
    config.networkName,
    [ownerKeys]
);

deploy.send(config.nodeUrl).then(deployHash => console.log('deploy hash - ' + deployHash)).catch(error => console.err(error));