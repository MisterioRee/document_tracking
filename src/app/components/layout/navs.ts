import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/home/dashboard',
    icon: 'icon-speedometer',
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Documents'
  },
  {
    name: 'Add Document',
    url: '/home/add-document',
    icon: 'fa fa-book'
  },
  {
    name: 'List Documents',
    url: '/home/list-document',
    icon: 'fa fa-search'
  },

  {
    divider: true
  },
  {
    title: true,
    name: 'Employees',
  },
  {
    name: 'Employee',
    icon: 'fa fa-user',
    children: [
      {
        name: 'Add Employee',
        url: '/home/add-employee',
        icon: 'fa fa-user-plus'
      },
      {
        name: 'Add Department',
        url: '/home/add-department',
        icon: 'fa fa-bank'
      },
 
    ]
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  }
];
