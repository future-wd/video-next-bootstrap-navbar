import Link from 'next/link'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const menuLinks = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/about',
    title: 'About',
  },
  {
    title: 'Dropdown',
    id: '1',
    subMenu: [
      {
        path: '/',
        title: 'Home',
      },
      {
        divider: true,
      },
      {
        path: '/about',
        title: 'About',
      },
    ],
  },
]

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuLinks.map((item, index) => {
              return (
                <>
                  {item.subMenu ? (
                    <NavDropdown title={item.title} id={`basic-nav-${item.id}`}>
                      {item.subMenu.map((item, index) => {
                        return (
                          <>
                            {item.divider ? (
                              <NavDropdown.Divider />
                            ) : (
                              <Link href={item.path} key={index} passHref>
                                <NavDropdown.Item>
                                  {item.title}
                                </NavDropdown.Item>
                              </Link>
                            )}
                          </>
                        )
                      })}
                    </NavDropdown>
                  ) : (
                    <Link href={item.path} key={index} passHref>
                      <Nav.Link>{item.title}</Nav.Link>
                    </Link>
                  )}
                </>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
