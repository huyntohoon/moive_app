import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  // why use {}?
  // 표현을 위함 함수를 separate
  // 아마도 array 안에 변수를 함수의 인자, 매개 변수로 받아들어야 하기 때문에
  // array임을 알려주고, 실행하기 위함이다.
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres.map(
            (
              genre,
              index // genres를 참조해서 genre, index라는 매개변수에게 map(각각 실행) 적용
            ) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            )
          )}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.prototype = {
  //왜 prototype을 확인하는가?
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, // 배열 내에 인자를 확인하기 위함
};

export default Movie;
