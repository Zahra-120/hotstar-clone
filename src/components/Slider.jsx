import React, { useEffect, useState } from "react";
import "./Slider.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchPopularSuccess,
  fetchTopRatedSuccess,
  fetchTvSuccess,
  fetchMoviesFailure,
} from "../screen/HomePage/redux/CardSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import HoverCard from "./HoverCard";

export default function Slider(props) {
  const dispatch = useDispatch();
  const latestReleases = useSelector((state) => state.movies.latestReleases);
  const popular = useSelector((state) => state.movies.popular);
  const topRated = useSelector((state) => state.movies.topRated);
  const tv = useSelector((state) => state.movies.tv);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  const [hoverId, setHoverId] = useState(null);

  //   -------------------------- Latest Releases ---------------------------
  useEffect(() => {
    const fetchMovies = async () => {
      dispatch(fetchMoviesStart());
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/all/day?api_key=23ed51049c6c8a76792e81075f71f2c7"
        );

        dispatch(fetchMoviesSuccess(response.data.results));
      } catch (err) {
        dispatch(fetchMoviesFailure(err.message));
      }
    };
    fetchMovies();
  }, [dispatch]);

  const scroll1 = (direction) => {
    const container1 = document.getElementById("scrollableDiv1");
    if (container1) {
      const { scrollLeft, clientWidth } = container1;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      container1.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  let lrContent;
  if (loading) {
    lrContent = null;
  } else if (error) {
    lrContent = <p>{error}</p>;
  } else {
    lrContent = latestReleases.map((movie) => (
      <div
        key={movie.id}
        className="horizontal-scroll-item"
        onMouseEnter={() => setHoverId(movie.id)}
        onMouseLeave={() => setHoverId(null)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          key={movie.id}
          alt="Movie Posters"
          className="horizontal-scroll-item"
        />
        {hoverId === movie.id && (
          <HoverCard
            movie={movie}
            imageSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        )}
      </div>
    ));
  }

  //   --------------------------------- Popular -------------------------------------
  useEffect(() => {
    const fetchMovies = async () => {
      dispatch(fetchMoviesStart());
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=23ed51049c6c8a76792e81075f71f2c7"
        );

        dispatch(fetchPopularSuccess(response.data.results));
      } catch (err) {
        dispatch(fetchMoviesFailure(err.message));
      }
    };
    fetchMovies();
  }, [dispatch]);

  let popContent;
  if (loading) {
    popContent = <p>Loading...</p>;
  } else if (error) {
    popContent = <p>{error}</p>;
  } else {
    popContent = popular.map((movie) => (
      <div
        key={movie.id}
        className="horizontal-scroll-item"
        onMouseEnter={() => setHoverId(movie.id)}
        onMouseLeave={() => setHoverId(null)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          key={movie.id}
          alt="Movie Posters"
          className="horizontal-scroll-item"
        />
        {hoverId === movie.id && (
          <HoverCard
            movie={movie}
            imageSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        )}
      </div>
    ));
  }

  const scroll2 = (direction) => {
    const container2 = document.getElementById("scrollableDiv2");
    if (container2) {
      const { scrollLeft, clientWidth } = container2;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      container2.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  //   --------------------------------- Top Rated -----------------------------------
  useEffect(() => {
    const fetchMovies = async () => {
      dispatch(fetchMoviesStart());
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=23ed51049c6c8a76792e81075f71f2c7"
        );

        dispatch(fetchTopRatedSuccess(response.data.results));
      } catch (err) {
        dispatch(fetchMoviesFailure(err.message));
      }
    };
    fetchMovies();
  }, [dispatch]);

  let trContent;
  if (loading) {
    trContent = <p>Loading...</p>;
  } else if (error) {
    trContent = <p>{error}</p>;
  } else {
    trContent = topRated.map((movie) => (
      <div
          key={movie.id}
          className="horizontal-scroll-item"
          onMouseEnter={() => setHoverId(movie.id)}
          onMouseLeave={() => setHoverId(null)}
        >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          key={movie.id}
          alt="Movie Posters"
          className="horizontal-scroll-item"
        />
        {hoverId === movie.id && (
          <HoverCard movie = {movie}
          imageSrc = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        )}
        </div>
    ));
  }

  const scroll3 = (direction) => {
    const container3 = document.getElementById("scrollableDiv3");
    if (container3) {
      const { scrollLeft, clientWidth } = container3;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      container3.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  //   ------------------------------- TV ---------------------------------
  useEffect(() => {
    if (props.isLoggedIn) {
      const fetchMovies = async () => {
        dispatch(fetchMoviesStart());
        try {
          const response = await axios.get(
            "https://api.themoviedb.org/3/tv/on_the_air?api_key=23ed51049c6c8a76792e81075f71f2c7"
          );

          dispatch(fetchTvSuccess(response.data.results));
        } catch (err) {
          dispatch(fetchMoviesFailure(err.message));
        }
      };
      fetchMovies();
    }
  }, [dispatch, props.isLoggedIn]);

  let tvContent;
  if (loading) {
    tvContent = <p>Loading...</p>;
  } else if (error) {
    tvContent = <p>{error}</p>;
  } else {
    tvContent = tv.map((movie) => (
      <div
          key={movie.id}
          className="horizontal-scroll-item"
          onMouseEnter={() => setHoverId(movie.id)}
          onMouseLeave={() => setHoverId(null)}
        >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          key={movie.id}
          alt="Movie Posters"
          className="horizontal-scroll-item"
        />
        {hoverId === movie.id && (
          <HoverCard movie = {movie}
          imageSrc = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        )}
        </div>
    ));
  }

  const scroll4 = (direction) => {
    const container4 = document.getElementById("scrollableDiv4");
    if (container4) {
      const { scrollLeft, clientWidth } = container4;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      container4.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ------------------------ Latest Releases ------------------------ */}
      <div className="horizontal-scroll-wrapper">
        <button className="scroll-button1 left" onClick={() => scroll1("left")}>
          {"<"}
        </button>
        <h3 className="title">Latest Releases</h3>
        <div className="horizontal-scroll-container" id="scrollableDiv1">
          <InfiniteScroll
            dataLength={latestReleases.length}
            //   next={fetchData}
            hasMore={true}
            scrollableTarget="scrollableDiv1"
            style={{ display: "flex", overflow: "auto" }}
            horizontal
          >
            {lrContent}
          </InfiniteScroll>
        </div>
        <button
          className="scroll-button1 right"
          onClick={() => scroll1("right")}
        >
          {">"}
        </button>
      </div>

      {/* --------------------------------- Popular -------------------------- */}
      <div className="horizontal-scroll-wrapper">
        <button className="scroll-button2 left" onClick={() => scroll2("left")}>
          {"<"}
        </button>
        <h3 className="title">Popular</h3>
        <div className="horizontal-scroll-container" id="scrollableDiv2">
          <InfiniteScroll
            dataLength={popular.length}
            //   next={fetchData}
            scrollableTarget="scrollableDiv2"
            style={{ display: "flex", overflow: "hidden" }}
            horizontal
          >
            {popContent}
          </InfiniteScroll>
        </div>
        <button
          className="scroll-button2 right"
          onClick={() => scroll2("right")}
        >
          {">"}
        </button>
      </div>

      {/* ---------------------------------- Top Rated --------------------------------- */}
      <div className="horizontal-scroll-wrapper">
        <button className="scroll-button3 left" onClick={() => scroll3("left")}>
          {"<"}
        </button>
        <h3 className="title">Top Rated</h3>
        <div className="horizontal-scroll-container" id="scrollableDiv3">
          <InfiniteScroll
            dataLength={topRated.length}
            //   next={fetchData}
            scrollableTarget="scrollableDiv3"
            style={{ display: "flex", overflow: "hidden" }}
            horizontal
          >
            {trContent}
          </InfiniteScroll>
        </div>
        <button
          className="scroll-button3 right"
          onClick={() => scroll3("right")}
        >
          {">"}
        </button>
      </div>

      {/* ------------------------------------- TV --------------------------------- */}
      {props.isLoggedIn && (
        <div className="horizontal-scroll-wrapper">
          <button
            className="scroll-button4 left"
            onClick={() => scroll4("left")}
          >
            {"<"}
          </button>
          <h3 className="title">TV Shows</h3>
          <div className="horizontal-scroll-container" id="scrollableDiv4">
            <InfiniteScroll
              dataLength={tv.length}
              //   next={fetchData}
              scrollableTarget="scrollableDiv4"
              style={{ display: "flex", overflow: "hidden" }}
              horizontal
            >
              {tvContent}
            </InfiniteScroll>
          </div>
          <button
            className="scroll-button4 right"
            onClick={() => scroll4("right")}
          >
            {">"}
          </button>
        </div>
      )}
    </>
  );
}
