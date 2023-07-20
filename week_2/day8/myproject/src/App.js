import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon';

  async function fetchPokemon() {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="text-center">
      <button className="btn btn-primary" onClick={fetchPokemon}>Fetch Pokemon</button>
    </div>
  );
}

export default App;
