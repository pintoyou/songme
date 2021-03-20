import { MenuEntry } from '@gametoken/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farming',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'GameMarket',
    icon: 'IfoIcon',
    href: 'https://market.gametoken.finance',
  },
  {
    label: 'GameDollar',
    icon: 'IfoIcon',
    href: 'https://gdollar.gametoken.financ',
  },
  {
    label: 'GameVault',
    icon: 'IfoIcon',
    href: 'https://gvault.gametoken.financ',
  },

  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/GameTokenFinance',
      },
      {
        label: 'Docs',
        href: 'https://docs.gametoken.finance/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@GameToken',
      },
    ],
  },
]

export default config
