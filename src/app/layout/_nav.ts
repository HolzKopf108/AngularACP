import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Users',
    url: '/users',
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'Events',
    url: '/events',
    iconComponent: { name: 'cil-calendar' }
  },
  {
    name: 'Settings',
    url: '/settings',
    iconComponent: { name: 'cil-settings' }
  }
];
