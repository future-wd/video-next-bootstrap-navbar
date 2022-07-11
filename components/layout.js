import Header from './header'

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

export default Layout