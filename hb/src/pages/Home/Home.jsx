import "./Home.css";

import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Countdown from "../../components/Countdown/Countdown";
import Story from "../../components/Story/Story";
import Gallery from "../../components/Gallery/Gallery";
import Timeline from "../../components/Timeline/Timeline";
import LoveLetter from "../../components/LoveLetter/LoveLetter";
import Quotes from "../../components/Quotes/Quotes";
import GiftBox from "../../components/GiftBox/GiftBox";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Loader />

      <Navbar />

      <Hero />

      <Countdown />

      <Story />

      <Gallery />

      <Timeline />

      <LoveLetter />

      <Quotes />

      <GiftBox />

      <MusicPlayer />

      <Footer />
    </>
  );
};

export default Home;