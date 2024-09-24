import { artists } from './best-selling-music-artists';

function App() {

  return (
    <div className="app-container">
      <h1>Best-selling music artists</h1>
        <div className="best-seller-list">
          {artists.map((artists, index) => (
            <div key={index} className="group-list" style={{ marginBottom: "20px", padding: "10px", borderRadius: "5px" }}>
              <img
                className="artists-image"
                src={artists.photo_url}
                alt={artists.name}
                style={{ width: '110px', height: '110px', display: 'block', marginBottom: '10px' }}
              />
              <div>
                <h2>{artists.name}</h2>
                <p>Country: {artists.country}</p>
                <p>Years Active: {artists.years_active}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default App;
