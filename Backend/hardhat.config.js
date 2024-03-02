require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: process.env.INFURA_SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111,
    },
  },
};
