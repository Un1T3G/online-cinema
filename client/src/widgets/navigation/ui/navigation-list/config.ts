import { IMenuItem } from '../menu-list/'

export const NavigationListConfig: IMenuItem[] = [
  {
    icon: 'MdHome',
    path: '/',
    title: 'Home',
  },
  {
    icon: 'MdExplore',
    path: '/genres',
    title: 'Discovery',
  },
  {
    icon: 'MdRefresh',
    path: '/fresh',
    title: 'Fresh movies',
  },
  {
    icon: 'MdLocalFireDepartment',
    path: '/trending',
    title: 'Trending now',
  },
]
