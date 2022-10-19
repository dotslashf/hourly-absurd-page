import { Navbar } from "flowbite-react";
import { FC } from "react";

const NavbarHome: FC = () => {
  return (
    <Navbar fluid={true} rounded={true} border={true}>
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          <div className="text-yellow-400 hover:text-yellow-600 transition-colors">
            Donate
          </div>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarHome;
