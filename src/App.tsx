import './App.css';
import IndividualMovie from './movies/IndividualMovie';
import { movieDTO } from './movies/movies.model';

function App() {

  const testMovie: movieDTO = {
    id: 1,
    title: 'Spider-man: far from Home',
    poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
  }

  return (
    <>
      <IndividualMovie {...testMovie}/>
    </>
  )
}


export default App;

// import MoviesList from './movies/_MoviesList';
// import { landingPageDTO, movieDTO } from './movies/_movies.model';
// import { useEffect, useState } from 'react';

// function App() {
//   const [movies, setMovies] = useState<landingPageDTO>({})

//   useEffect(() => {
//     const timerId = setTimeout(() => {
//       setMovies({
//         inTheaters:[
//           {
//             id: 1,
//             title: 'Spider-man: far from Home',
//             poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
//           },
//           {
//             id: 2,
//             title: "Luca",
//             poster: 'https://www.metaflix.com/wp-content/uploads/2021/04/Disney-Pixar-Luca-Poster.jpg'
//           }
//         ],
//         upcomingReleases: [
//           {
//             id: 3,
//             title: 'Soul',
//             poster: 'https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_.jpg'
//           }
//         ]
//       })
//     }, 1000);

//     return () => clearTimeout(timerId);
//   });


//   return (
//     <div className="container">
//       <button className='btn btn-primary'>My button</button>
//       <h3>In Theaters</h3>
//       <MoviesList movies={movies.inTheaters}/>

//       <h3>Upcoming Realses</h3>
//       <MoviesList movies={movies.upcomingReleases}/>
//     </div>
//   );
// }

