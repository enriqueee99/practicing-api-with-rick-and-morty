import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props) {
  return (
    <div className="d-flex flex-column align-items-center">
      <h4 className="text-center w-100 mb-3">Página: {props.page} </h4>
      <div className="d-flex justify-content-between w-100  mb-5">
        <button
          disabled={props.page === 1}
          className="btn btn-secondary w-auto"
          onClick={() => props.setPage(props.page - 1)}
        >
          Pagina anterior
        </button>
        <button
          disabled={props.page === 42}
          className="btn btn-secondary w-auto"
          onClick={() => props.setPage(props.page + 1)}
        >
          Página siguiente
        </button>
      </div>
    </div>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const data = await response.json();
      setLoading(false); //una vez carguen los datos, desaparezco el loading a false
      console.log(data.results);
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <div>loading</div>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
