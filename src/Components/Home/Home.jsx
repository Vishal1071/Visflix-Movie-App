import { NavLink } from 'react-router-dom'
import './Home.css'

const Home = () => {


  return (
    <>

      <div className="movies-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="overlay">
          <h1>🎥 MovieVerse</h1>
          <p>Discover. Watch. Enjoy.</p>
          <NavLink to={"/movies"}>
          <button className="explore-btn">Explore Now</button>
          </NavLink>
        </div>
      </header>

      {/* Popular Section */}
      <section className="section">
        <h2>🔥 Trending Now</h2>
        <div className="movies-grid">
          <div className="movie-card">
            <img src="https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1000_.jpg" alt="Inception" />
            <h3>Inception</h3>
          </div>
          <div className="movie-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9maE7-yWPpULS8xay8yVKGnVZctnXkOXMg&s" alt="Interstellar" />
            <h3>Interstellar</h3>
          </div>
          <div className="movie-card">
            <img src="https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg" alt="Avengers" />
            <h3>Avengers</h3>
          </div>
          <div className="movie-card">
            <img src="https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg" alt="Batman" />
            <h3>The Dark Knight</h3>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <h2>🎬 Browse by Category</h2>
        <div className="categories">
          <span>Action</span>
          <span>Comedy</span>
          <span>Drama</span>
          <span>Sci-Fi</span>
          <span>Romance</span>
          <span>Thriller</span>
        </div>
      </section>
    </div>

    </>
  )
}

export default Home
