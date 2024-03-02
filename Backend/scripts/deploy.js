const { ethers } = require("hardhat");
require("dotenv").config();
async function main() {
  const contractFactory = await ethers.getContractFactory("Artvault");
  console.log("Deploying the contract ....");
  const simpleTodo = await contractFactory.deploy();
  await simpleTodo.waitForDeployment();
  console.log("Deployed contract to:", simpleTodo.target);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
