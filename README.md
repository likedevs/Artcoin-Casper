# Casper Fungible Tokens (CEP-18 Standard) smart contract generation in wasm

<img src="images/ArtCoin-Youtube-cover.jpg">

### Table of Content:
1. [Library Description](#library-description)
2. [Project Description](#project-description)
3. [Installation](#installation)
    * [Development](#development)
    * [Build Smart Contracts](#build-smart-contracts)
    * [Locating Smart Contract Wasm](#locating-smart-contract-wasm)
    * [Test](#test)
    * [JavaScript Client SDK](#javaScript_client_sdk)
    * [Documentation](#documentation)


<a id="library-description"></a>
## Library Description
A library for developing fungible tokens (CEP-18 Tokens) tokens for the Casper Network.
The main functionality is provided via the CEP-18 struct, and is intended to be consumed by a smart contract written to be deployed on the Casper Network.

<a id="project-description"></a>
## Project Description
ArtCoin - a Sharing Economy tool that facilitates the exchange of assets within the Creative Community and the usage of underutilized assets.
ArtCoin is a bridge for Institutions and their communities to a sharing economy.
ArtCoin.
We are building:
1. <b>ArtCoin currency:</b> an exchange coin for the underutilized assets
2. <b>ArtCoin technology:</b> a technology that allows individuals and entities to exchange their underutilized assets (similar to PayPal smart buttons)


## Installation
### Development

Make sure the `wasm32-unknown-unknown` Rust target is installed.

```
make prepare
```

<a id="build-smart-contracts"</a>
### Build Smart Contracts

To build the example fungible token contract and supporting test contracts:

```
make build-contracts
```

<a id="locating-smart-contract-wasm"</a>
### Locating Smart Contract Wasm

The Wasm for your new project can be found in the following local directory:

```
casper/cep18/target/wasm32-unknown-unknown/release/cep18_token.wasm
```

### Test

```
make test
```

<a id="javaScript_client_sdk"></a>
### JavaScript Client SDK

A [JavaScript client SDK](https://github.com/casper-ecosystem/erc20/tree/master/client-js#readme) can be used to interact with the fungible token contract.

### Documentation

For more information, visit the below guides:

- [Casper Fungible Token Tutorial](/docs/TUTORIAL.md) - An illustrated guide on how to implement, deploy, and test an fungible token contract.
- [Casper Fungible Token How-To Guide](/docs/Sample-Guide.md) - An example-driven guide on how to setup, query, transfer, approve, and check the balance of an fungible token contract.
- [Casper Fungible Token Quick Deploying Guide](/docs/Deploy-Token.md) - A quick guide on how to deploy the Casper fungible token to the Casper Network.
