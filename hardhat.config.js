require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task(
  "contracts",
  "Prints the contract addresses for a network",
  async (args, hre) => {
    const { deployments } = hre;
    // eslint-disable-next-line no-undef
    const contracts = await deployments.all();
    for (const contract in contracts) {
      console.log(contract, contracts[contract].address);
    }
  }
);

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_SPEEDY_NODES_KEY}/polygon/mumbai`,
      accounts: [process.env.MUMBAI_PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_KEY,
  },
};
