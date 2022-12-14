import './styles/App.css'
import movieData from './data/movies.json'
import Movie from './components/Movie'
import Genres from './components/Genres'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie List</h1>
      </header>
      <div>
        {movieData.map((eachMovie, idx) => (
          <div>
            <Movie
              key={idx}
              name={eachMovie.title}
              picture={eachMovie.backdrop_path}
              date={eachMovie.release_date}
              detail={eachMovie.overview}
            />
            {eachMovie.genres.map((eachGenres, index) => (
              <Genres key={index} names={eachGenres.name} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
