import React, {useState} from 'react'
import './HoverCard.css'
import DetailsModal from '../screen/Details/DetailsModal'
import playLogo from '../assets/play-button.png'

export default function HoverCard(props) {
  const [openDetails, setOpenDetails] = useState(false)

  const openDetailsHandler = () => {
    setOpenDetails(true)
  }

  console.log("Props.movie", props.movie);

  return (
    <div className='hoverCard'>
        <img src={props.imageSrc} className='poster' alt="Movie Poster of Hover" />
        {openDetails && <DetailsModal movie = {props.movie} setOpenDetails = {setOpenDetails} />}
        <button className='watchNowBtn' onClick={openDetailsHandler}>
          <img className='playLogo' src={playLogo} alt="" />
          Watch Now
        </button>
        <span></span>
    </div>
  )
}

// props.movie
// props.openDetails
// props.setOpenDetails
