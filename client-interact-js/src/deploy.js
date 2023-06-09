const {ContractWASM, CEP18Client} = require('client-js');
const {Keys} = require('casper-js-sdk');
const config = require('./config');

const cep18 = new CEP18Client(config.nodeUrl, config.networkName);

const keys = Keys.Ed25519.loadKeyPairFromPrivateFile(config.ownerKeysPath);

const deploy = cep18.install(
  ContractWASM,
  config.contractArgs,
  130_000_000_000,
  keys.publicKey,
  config.networkName,
  [keys]
);

deploy.send(config.nodeUrl)
  .then(deployHash => console.log('deploy hash - ' + deployHash))
  .catch(error => console.err(error));
