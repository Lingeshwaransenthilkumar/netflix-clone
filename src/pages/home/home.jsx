
import Navbar from "../../components/Navbar/Navbar";
import "./home.css";
import hero from "../../assets/home1.jpg";
import hero_title from "../../assets/homeTitle.webp";
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/footer";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <Navbar/>
      <div className="hero">
        <img src={hero} className="banner-image" alt="" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-image" />
          <p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</p>
          <div className="hero-btns">
            <Link to="/player/home"><button className="btn"><img src={play_icon} alt="" />Play</button></Link>
            <button className="btn dark-btn"><img src={info_icon} alt="" />More Info</button>
          </div>
          {/* title cards */}
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Pics for you"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;