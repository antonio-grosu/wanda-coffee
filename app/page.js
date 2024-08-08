import Image from "next/image";
import Home_Hero from "./components/home_page/Home_Hero_Section";
import Home_Second_Section from "./components/home_page/Home_Second_Section";
import Home_Third_Section from "./components/home_page/Home_Third_Section";

const Home = () => {
  return (
    <main className="z-0">
      <Home_Hero />
      <Home_Second_Section />
      <Home_Third_Section />
    </main>
  );
};

export default Home;
