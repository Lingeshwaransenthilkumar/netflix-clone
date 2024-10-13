import Home from "./pages/home/home";
import { Routes,Route } from "react-router-dom";
import Login from "./pages/Login/login";
import Player from "./pages/player/player";
import HomePlayer from "./pages/player/home_player";
function App(){
  return(
    <>
      <div>
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/player/:id" element={<Player/>}/>
          <Route path="/player/home" element={<HomePlayer/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;