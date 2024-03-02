# Backend @Artvault 🖌️

This folder contains the backend of the Artvault platform, developed using the Hardhat framework.
Contracts

The Contracts folder includes the smart contracts required for the platform. These contracts facilitate interactions and manage essential functionalities of the Artvault platform.
Deployment

To compile the smart contract you can use,

```shell
yarn hardhat compile

```

To deploy the smart contract yourself, you can use the following command:

```shell
yarn hardhat run scripts/deploy.js --network sepolia
```

> ⭕ Ensure to modify the deployment script as necessary before executing the command and make sure to add the private key and the and node key in the .env file
