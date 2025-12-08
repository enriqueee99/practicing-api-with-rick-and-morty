import CharacterList from "./CharacterList";

function Character({ character }) {
  return (
    <div className="text-center p-5">
      <h3>{character.name}</h3>
      <img
        className="img-fluid rounded-pill"
        src={character.image}
        alt={character.name}
      ></img>
      <div className="mt-4">
        <b>Origen: </b>
        {character.origin.name}
        <br />
        <b>Especie: </b>
        {character.species}
      </div>
    </div>
  );
}

export default Character;
