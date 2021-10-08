import Link from "next/link";
import Logo from "../../assets/Logo.png";
import { useRouter } from "next/router";

import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

import { auth } from "../../src/config/firebase";

import useAuth from "../../src/hook/auth";

function Header() {
  const { user, logout } = useAuth();
  //console.log("🚀 ~ file: Header.js ~ line 10 ~ Header ~ user", user)
  const router = useRouter();

  async function signOut() {
    await logout();
    //window.location.reload();
    //return router.push("/sign-in/");
  }
  return (
    <header className="top-header">
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container className="justify-content-between justify-content-sm-between py-3 py-sm-0">
          <Navbar.Brand href="/">
            <img
              src={Logo.src}
              className="img-fluid img-logo"
              alt="SF Brandname"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="position-relative" id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/how-it-work/">How it Work</Nav.Link>
              <Nav.Link href="/services/">Services</Nav.Link>
              <Nav.Link href="/authentication/">Authentication</Nav.Link>
              {!user && <Nav.Link href="/sign-in/">Sign In</Nav.Link>}
              {user && (
                <>
                  <Nav.Link href="/orders/">My Order</Nav.Link>
                  <Nav.Link href="/account/">My Account</Nav.Link>
                  <Nav.Link href="#">
                    <button onClick={signOut}>Sign Out</button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
