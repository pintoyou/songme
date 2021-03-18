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
    label: 'Market',
    icon: 'IfoIcon',
    href: 'https://market.gametoken.finance',
  },
  {
    label: 'GameVault',
    icon: 'IfoIcon',
    href: 'https://vault.gametoken.finance',
  },
  {
    label: 'GameDollar',
    icon: 'IfoIcon',
    href: 'https://gamedollar.gametoken.finance',
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
