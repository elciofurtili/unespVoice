export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        icon: 'dashboard',
      },
    },
    {
      name: 'projects',
      displayName: 'menu.projects',
      meta: {
        icon: 'article',
      },
      children: [
        {
          name: 'my-projects',
          displayName: 'menu.my-projects',
        },
        {
          name: 'all-projects',
          displayName: 'menu.all-projects',
        },
      ],
    },
    {
      name: 'imagined-speech',
      displayName: 'menu.imagined-speech',
      meta: {
        icon: 'mic',
      },
      children: [
        {
          name: 'my-imagined-speechs',
          displayName: 'menu.my-imagined-speechs',
        },
        {
          name: 'all-imagined-speechs',
          displayName: 'menu.all-imagined-speechs',
        },
      ],
    },
    {
      name: 'organization',
      displayName: 'menu.organization',
      meta: {
        icon: 'group',
      },
      children: [
        {
          name: 'my-organizations',
          displayName: 'menu.my-organizations',
        },
        {
          name: 'all-organizations',
          displayName: 'menu.all-organizations',
        },
        {
          name: 'organization-solicitation',
          displayName: 'menu.organization-solicitation',
        },
      ],
    },
    {
      name: 'faq',
      displayName: 'menu.faq',
      meta: {
        icon: 'quiz',
      },
    },    
  ] as INavigationRoute[],
}
