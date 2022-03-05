import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowLeft, AiTwotoneStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'
export default function MovieInfo({chosenMovieInfo, chosenMovie}) {
  return (
      <section id="movie__info">   
          <div className="movieinfo__wrapper" key={chosenMovie}>
            <div className="movieinfo--back--link--cont">
              <Link to="/movies" className="movieinfo--back--link">
                <AiOutlineArrowLeft/> Back
              </Link>           
            </div>
          <div className="movieinfo__movie--poster--cont">
              <img src={`https://image.tmdb.org/t/p/original${chosenMovieInfo?.poster_path}`} className="movieinfo__movie--poster" alt=""  />
          </div> 
          <div className="movieinfo__description--wrapper">
                <figure className="movieinfo__description--cont"  >
                   <h3 className="movieinfo__movie--title">
                     {chosenMovieInfo.title}
                   </h3>  
                   <div className="movieinto__movie--release-date">
                    Release date:  {chosenMovieInfo.release_date} 
                    
                   </div>
                   <div className="movieinto__movie--rating">
                   Rating: {chosenMovieInfo.vote_average}
                   {
                      // new Array(Math.floor(chosenMovieInfo.vote_average/2)).fill(0).map(() => <AiTwotoneStar/>)
                    }
                    {
                      // !Number.isInteger(chosenMovieInfo.vote_average/2) &&  <BsStarHalf/>
                    }
                    
                   </div>
                   <div className="movieinto__movie--plot">
                     plot: {chosenMovieInfo.overview} 
                    </div>
                </figure>
          </div>
        </div>
      </section>
    )
}
