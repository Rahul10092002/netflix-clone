import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.table(request.data.results);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

   const handleClick = (movie) => {
     if (trailerUrl) {
       settrailerUrl("");
     } else {
       movieTrailer(movie?.name || "")
         .then((url) => {
           const urlParam = new URLSearchParams(new URL(url).search);
           settrailerUrl(urlParam.get("v"));
         })
         .catch(() =>
           console.log("Temporarily not available")
         );
     }
   };
  // console.log(trailerUrl)
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <>
            <img
              key={movie.id}
              onClick={()=> handleClick(movie)}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          </>
        ))}
      </div>
     {trailerUrl && <Youtube videoId="2g811Eo7K8U" opts={opts}  />}
    </div>
  );
}

export default Row;
