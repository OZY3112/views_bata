import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import Mansvg from '../compos/ui/Mansvg'
export default function LandingPage({setSearchTerm, onSearch}) {
    const nav = useNavigate()
    const handleLandingSearch = (e) => {
        onSearch(e)
        nav('/movies')
    }
  return (
    <section id="landing">
    <div className="landing__cont">
       <div className="section__title--cont">
           <h1 className="landing__title">
               Egypt's most awarded <br /> <span className="red"> Movie Watching</span> <br /> Subscription platform.
           </h1>
           <h3 className="landing__subtitle">
               Find your favorite movies at <span className="blue">Easy View</span>.
           </h3>
       </div>

       <div className="landing__search-bar">
            <input type="text" 
             placeholder='Search for your movies...' 
             className="ladning__search-bar--input" maxLength={48}
             onKeyPress={(e) => e.key === 'Enter' && handleLandingSearch(e)}
             onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
       <div className="mansvg__cont"><Mansvg/></div>
    </div>
</section>
  )
}
