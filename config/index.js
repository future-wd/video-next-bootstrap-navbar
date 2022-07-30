export const mainMenu = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Dropdown Menu',
    id: '1',
    subMenu: [
      {
        title: 'Home',
        path: '/',
      },
      {
        divider: true
      },
      {
        title: 'About',
        path: '/about',
      },
    ],
  },
]

export const site = {
  title: 'Next.js Boostrap Navbar'
}
