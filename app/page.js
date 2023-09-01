import AllPosts from "./components/AllPosts";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AllPosts />
    </div>
  );
};

export default Home;
