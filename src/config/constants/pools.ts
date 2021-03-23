import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'GME',
    stakingTokenName: QuoteToken.GME,
    stakingTokenAddress: '0xD470c422e3AFD6C788f447CFC8dC869ccDF55B5E',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x29988f4b2eBcb836C4d0d19eCA8F50C785dde165',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://gametoken.finance/',
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
