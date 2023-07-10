# Instructions on how to generate and use the Fungible Tokens (CEP-18 Standard) for ArtCoin Project.

<img src="../images/ArtCoin-Youtube-cover.jpg">

### Table of Content:
1. [Library Description](#library-description)
2. [Project Description](#project-description)
3. [Instruction for Developers](#instruction-for-developers)

<a id="library-description"></a>
## Library Description
This instruction is provided for developers to generate and use the Fungible Tokens, based on CEP-18 Standard.An example of working with [implementation of ERC20 token for the CasperLabs platform](https://github.com/casper-ecosystem/cep18) and [casper-cep18-js-client](https://github.com/casper-ecosystem/cep18/tree/master/client-js).

<a id="project-description"></a>
## Project Description
ArtCoin - a Sharing Economy tool that facilitates the exchange of assets within the Creative Community and the usage of underutilized assets.
ArtCoin is a bridge for Institutions and their communities to a sharing economy.
ArtCoin.
We are building:
1. <b>ArtCoin currency:</b> an exchange coin for the underutilized assets
2. <b>ArtCoin technology:</b> a technology that allows individuals and entities to exchange their underutilized assets (similar to PayPal smart buttons)

<a id="instruction-for-developers"></a>
## Instruction for Developers

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
