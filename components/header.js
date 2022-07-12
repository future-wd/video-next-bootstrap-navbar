import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Link from 'next/link'
import { useRouter } from 'next/router'

const menuLinks = [
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

const MenuItem = ({ title, path, subMenu, id }) => {
  if (subMenu) {
    return (
      <NavDropdown title={title} id={`nav-dropdown-${id}`}>
        {subMenu.map((item, index) => (
          <DropdownItem {...item} key={index} />
        ))}
      </NavDropdown>
    )
  }

  return (
    <Link href={path} passHref>
      <Nav.Link>{title}</Nav.Link>
    </Link>
  )
}

const DropdownItem = ({ title, path, divider }) => {
  const router = useRouter()

  if (divider) {
    return (
      <NavDropdown.Divider />
    )
  }

  return (
    <Link href={path} passHref>
      <NavDropdown.Item active={router.pathname === path}>{title}</NavDropdown.Item>
    </Link>
  )
}

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuLinks.map((item, index) => (
              <MenuItem {...item} key={index} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
