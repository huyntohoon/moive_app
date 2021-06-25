import React from "react"; // 리액트의 하위 문서
import axios from "axios"; // axios => 늦게 올 수 있음을 알릴 수 있는 라이브러리
import Movie from "../components/Movie"; // Movie.js로 따로 함수를 빼서 만듬
//import "./App.css"; // design css

class Home extends React.Component {
  // setstate 같은 component에 필요한 함수를 가져오기 위해 상속

  state = {
    // 왜 state를 사용하는가?, 기본 변수가 아니라,
    // 우리가 react를 사용하는 이유 => 동적 변경의 빠른 속도이다.
    // 그것을 위해서는 가상 dom의 이용에 대한 이해가 필요하다.
    // 동적 변경이 이루어짐을 react가 알게 된다면,
    // 그것을 업데이트하기 위해서 변경점을 react가 비교할 것이고
    // 비교하여 찾은 요소만 찾아 변경한다.
    // 전체적인 업데이트가 아닌, 달라진 점만 변경하므로 더 빠르다.
    // 그렇다면 이런 변경점을 어떻게 표현할 것인가?
    // 그 이유가 state를 사용하는 이유이다.
    // 변경될 점을 state로 설정하고, 주시하기 위해 state를 사용한다.
    // 그리고 그 state를 사용하기 위해서 class를 사용한다.
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // async으로 느리게 표현될 함수를 말한다.
    const {
      data: {
        data: { movies }, // 위 movies와 다른 movies이다.
      },
    } = await axios.get(
      //
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating" // api
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    // 생명 주기 함수이다. component가 실행되면 먼저 이 함수가 실행된다.
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state; // 위 state 변수를 가져와서 render 내에 변수로 가져온다.
    return (
      <section className="comtainer">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(
              // map => 매개변수로 해당 array foreach 함수 실행
              (
                movie // movies의 벨류에게 map으로 인자 전체에게 함수 실행(괄호) => movie === 매개변수의 이름
              ) => (
                <Movie // JS파일의 movie function 실행
                  // 그리고 오른쪽은 Movie를 실행하기 위한 매개 변수
                  key={movie.id} // 다르다는 걸 알리기 위해서인데, 왜 다르다는 것을 알려야 할까??
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              )
            )}
          </div>
        )}
      </section>
    );
  }
}

export default Home; // what meaing?
