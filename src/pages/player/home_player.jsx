import { useNavigate } from "react-router-dom";
import back_arrow_icon from "../../assets/back_arrow_icon.png";

function HomePlayer(){
    const navigate = useNavigate();

    return(
        <>
        <div className="player">
            {/* to go back , we use navigate */}
            <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-1)}} />
            <iframe width="90%" height="90%"
            src={`https://www.youtube.com/embed/Namme0qEbSk`}  title="Trailer" frameborder="0" allowFullScreen></iframe>
            <div className="player-info">
                <p>Stranger Things</p>
                <p>2024-06-23T13:00:01:000Z </p>
                <p>Trailer</p>
            </div>
        </div>
        </>
    )
}


export default HomePlayer;