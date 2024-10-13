import { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";




const TitleCards = ({title,category}) => {
  const cardsRef = useRef();
  const [apiData,setApidata] = useState([]);
  // api data
  const options ={
    method: 'GET',
    headers:{
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjE1NDMxZGJmOGI3ODUyZmExNDZkNTA2MDM0NDQzNiIsIm5iZiI6MTcyNjc1NTA2NS42NDg1MSwic3ViIjoiNjZlYzJlMDI2MmM0YmIxOGM5NzRhNzljIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.7KLCLQY_g_Y5LMfE4vzKmocCoEevECKzzuP2g5rT0wY'
    }
  }
  fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,options)
  .then(response => response.json())
  .then(response => setApidata(response.results))
  .catch(err => console.log(err));

  // used to scroll the cards
  const handleWheel = (e)=>{
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => setApidata(err));
    cardsRef.current.addEventListener('wheel',handleWheel);

  },[]);


  return (
    <div className="TitleCards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {/* opening video player using data in apidata */}
        {apiData.map((card,index)=>(
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt={card.name}/>
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
      
    </div>
  )
}

export default TitleCards
