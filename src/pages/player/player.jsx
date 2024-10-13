import "./player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Player(){
    {/* using id from react router */}
    const {id} = useParams()
    const navigate = useNavigate();

    const [apiData,setApiData] = useState({
        name: "",
        key:"",
        published_at: "",
        typeof:""
    });


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjE1NDMxZGJmOGI3ODUyZmExNDZkNTA2MDM0NDQzNiIsIm5iZiI6MTcyODExNDQ5MC4zMTM1ODYsInN1YiI6IjY2ZWMyZTAyNjJjNGJiMThjOTc0YTc5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KY7RoRNy5KH-EXjRsFt7yiskB1gHRVYP-KDt6f1xWT8'
        }
      };

      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        // data from 1st object , so results[0]
        .then(response => setApiData(response.results[0]))
        .catch(err => console.error(err));
      },[])
      
      
    return (
        <div className="player">
            {/* to go back , we use navigate */}
            <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-1)}} />
            <iframe width="90%" height="90%"
            src={`https://www.youtube.com/embed/${apiData.key}`}  title="Trailer" frameborder="0" allowFullScreen></iframe>
            <div className="player-info">
                <p>{apiData.published_at}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
}

export default Player;