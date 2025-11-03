import seriesData from '../../Api/seriesData.json'
import './Movies.css'


const Movies = ({searchTearm}) => {

  const searchcard = seriesData.filter((card)=>card.name.toLowerCase().includes(searchTearm.toLowerCase()));

  return (
    <div className="container mt-3">
      <div className="row g-4">
        {searchcard.map((i) => {
          return (
            <div key={i.id} className="col-md-4 g-5">
              <div className="card-box">
                <img src={i.img_url} alt="" width="100%" height="350px" />
                <h2>{i.name}</h2>
                <h4>⭐<span className={i.rating >= 8.5 ? "su-hit" : i.rating < 5.6 ? "ave" : "hit"}>{i.rating}</span></h4>
                <p>{i.description}</p>
                <p><b>Cast:</b> {i.cast}</p>
                <p><b>Genre:</b> {i.genre}</p>
                <a href={i.watch_url} target="_blank" rel="noreferrer">
                  <button>Watch Now</button>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>

  );
}

export default Movies
