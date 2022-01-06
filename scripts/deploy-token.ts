// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
// eslint-disable-next-line prettier/prettier
import { ethers } from 'hardhat';

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // eslint-disable-next-line prettier/prettier
  const UtilityToken = await ethers.getContractFactory('UtilityToken');
  // eslint-disable-next-line prettier/prettier
  const utilityToken = await UtilityToken.deploy('tokenA', 'TKA', 1000000000);

  await utilityToken.deployed();

  // eslint-disable-next-line prettier/prettier
  console.log(`Token deployed at address: ', ${utilityToken.address}
               At Address https://testnet.bscscan.com/address/${utilityToken.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});