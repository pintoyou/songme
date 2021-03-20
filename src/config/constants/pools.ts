import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'GME',
    stakingTokenName: QuoteToken.GME,
    stakingTokenAddress: '0xaA73f1bb9c9b00790A40837c8588A33eD514D5c4',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x16F27dE11b88254BE89eF34067ce07D0a8606435',
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
