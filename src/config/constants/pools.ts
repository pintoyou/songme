import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'GME',
    stakingTokenName: QuoteToken.GME,
    stakingTokenAddress: '0x1a672b4b2C492538214D0F403BC6a92cAE7c04d9',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x484cE442c7B7F3022f2d4C43Af36977d3783F1F7',
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
