import { NavLink } from "react-router-dom";
import { Loader } from "./Loader"

export const CharacterList = ({ data, error, loading }) => {

    if (error) {
        return <p>Something went wrong..</p>;
    }

    if (loading) {
        return <Loader />;
    }

    const characters = data.results;

    return (
        <div className="page__characters">
            {characters ? (
                characters.map((character) => {
                    return (
                        <NavLink className='page__character' to={`/characters/${character.id}`} key={character.id}>
                            <p className="page__character-name">
                                {character.name}
                            </p>
                            <img src={character?.image?.url} alt={character.name} />
                        </NavLink>
                    );
                })
            ) : (
                <p className="not-found">characters not searched</p>
            )}
        </div>
    );
};