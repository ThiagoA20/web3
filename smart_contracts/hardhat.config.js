require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/u1xV9zgv5VTQ-9fAK6L-MGALC6qYQ9Yg',
      accounts: [process.env.AccountKey],
    }
  }
}