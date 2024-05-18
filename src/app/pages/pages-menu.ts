import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Quản lý đề án',
    icon: 'list-outline',
    link: '/pages/Plan',
  },
  {
    title: 'Quản lý Ngành',
    icon: 'book',
    link: '/pages/specialized',
  },
  {
    title: 'Quản lý Môn',
    icon: 'browser',
    link: '/pages/subject',
  },
  {
    title: 'Quản lý người dùng',
    icon: 'people-outline',
    link: '/pages/users',
  },
];
