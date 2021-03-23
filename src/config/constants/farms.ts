import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    depositFee: 0,
    lpSymbol: 'GME',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0xD470c422e3AFD6C788f447CFC8dC869ccDF55B5E',
    },
    tokenSymbol: 'KEY',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0x762C2CDC25acf4B1F3FD0114965163C8Dfee579B',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    depositFee: 0,
    lpSymbol: 'GME-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x87066260c5cFd4202A48F28C19A000e0D30963eb',
    },
    tokenSymbol: 'GME',
    tokenAddresses: {
      97: '',
      56: '0xD470c422e3AFD6C788f447CFC8dC869ccDF55B5E',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 2,
    depositFee: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 3,
    depositFee: 3,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
