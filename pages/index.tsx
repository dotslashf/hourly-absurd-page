import type { NextPage } from "next";
import Cards from "../components/Cards";

const Home: NextPage = () => {
  return (
    <>
      <div className="container mx-auto my-8 px-4 md:px-8">
        <Cards />
      </div>
    </>
  );
};

export default Home;
