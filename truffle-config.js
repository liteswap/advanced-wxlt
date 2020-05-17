const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
const { mnemonic, infuraKey, etherscanApiKey } = JSON.parse(fs.readFileSync('.secrets.json', 'utf-8'));

module.exports = {
  networks: {
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraKey}`),
      network_id: 1,
      gas: 10 ** 6, // 1 million
      confirmations: 2,
      timeoutBlocks: 200,
      gasPrice: 30 ** 10, // 10 gwei
      skipDryRun: true
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,
      gas: 10 ** 6,
      confirmations: 2,
      timeoutBlocks: 20,
      gasPrice: 10 ** 9, // 1 gwei
      skipDryRun: true
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,
      gas: 10 ** 6,
      confirmations: 2,
      timeoutBlocks: 20,
      gasPrice: 10 ** 9,
      skipDryRun: true
    },
    kovan: {
      provider: () => new HDWalletProvider(mnemonic, `https://kovan.infura.io/v3/${infuraKey}`),
      network_id: 42,
      gas: 10 ** 6,
      confirmations: 2,
      timeoutBlocks: 20,
      gasPrice: 10 ** 9,
      skipDryRun: true
    }
  },

  compilers: {
    solc: {
      version: '0.6.8',
      settings: {
        optimizer: {
          enabled: true,
          runs: 999999
        },
        evmVersion: 'istanbul'
      }
    }
  },

  plugins: [
    'truffle-plugin-verify'
  ],

  api_keys: {
    etherscan: etherscanApiKey
  }
};
