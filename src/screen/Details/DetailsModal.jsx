import React from "react";
import ReactDOM from "react-dom";
import "./DetailsModal.css";
import release from "../../assets/date.png";
import rate from "../../assets/star.png";

export default function DetailsModal(props) {
  const closeDetailsHandler = () => {
    props.setOpenDetails(false);
  };

  return ReactDOM.createPortal(
    <div className="backdrop">
      <div className="modal">
        <button className="closeBtn" onClick={closeDetailsHandler}>
          X
        </button>
        <div className="modal-left">
          <img
            className="detailPoster"
            src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
            alt="Movie Poster of Hover"
          />
        </div>
        <div className="modal-right">
          <h2>
            {props.movie.original_title}
            {props.movie.name}
          </h2>
          <div className="flex">
            <img className="icon1" src={release} alt="Release Date Icon" />
            <p>
              {props.movie.release_date} {props.movie.first_air_date}
            </p>
          </div>
          <div className="flex">
            <img className="icon2" src={rate} alt="Rating Icon" />
            <p>{props.movie.vote_average}/10</p>
          </div>
          <h3>Overview</h3>
          <p className="overview">{props.movie.overview}</p>
        </div>
      </div>
    </div>,
    document.getElementById("backdrop")
  );
}

// title : original_title
// overview : overview
// poster : poster_path
// date : release_date
// rating : vote_average
