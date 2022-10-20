import type { NextPage } from "next";
import Cards from "../components/Cards";
import NavbarHome from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <NavbarHome />
      <div className="container mx-auto mt-8 px-4 md:px-8">
        <Cards />
      </div>
    </>
  );
};

export default Home;
