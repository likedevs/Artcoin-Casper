# Interact with 'casper-cep18-js-client' to create and use Fungible Tokens (CEP-18 Standard)

An example of working with [implementation of ERC20 token for the CasperLabs platform](https://github.com/casper-ecosystem/cep18) and [casper-cep18-js-client](https://github.com/casper-ecosystem/cep18/tree/master/client-js).

## Development

First of all, we need to generate the smart contract in wasm format in the specified directory.

The instructions can be found [Here](https://github.com/likedevs/Artcoin-Casper/blob/master/README.md)


Then, from the root directory

```
cd client-js && npm i
```

And prepare casper-cep18-js-client library:

```
npm run build && npm run generate:wasm
```

After this, go to the casper-interact-js directory

```
cd ../client-interact-js
```

```
npm i
```
Install casper-client, instructions can be found [here](https://docs.casper.network/resources/quick-start/)

```
npm run generate-keys && npm run generate-recipient-keys
```
Update data in ./src/config.js

Command to deploy smart contract
```
npm run deploy
```
Command to transfer tokens
```
npm run transfer
```
