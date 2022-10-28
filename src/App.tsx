//Hooks
import { useAPI } from "./hooks/useAPI";

type Repository = {
  name: string;
}

function App() {
  const { data: pokemonList, isLoading} = useAPI<Repository[]>('pokemon')

  return (
    <div className="App">
      <ul>
        {isLoading && <p>Carregando...</p>}
        {pokemonList?.map(repo => {
          return (
            <li key={repo.name}>
              <strong>{repo.name}</strong>
            </li>
          )
        })}
      </ul>
    
    </div>
  );
}

export default App;
