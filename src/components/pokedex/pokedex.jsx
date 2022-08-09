import { Pokemon } from "../pokemon/pokemon";
import { Pagination } from "../pages/pagination";


function Pokedex (props) {
    
    const { pokemons, page, setPage, total, loading } = props;

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    };

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total - 1);
        setPage(nextPage);
    };


    return (
        <>
            <div className="div-pagination">
                <Pagination
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            </div>
                {loading ? (<div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>):
                (<section className = "m-3 ">
                <div className = "pokedex-grid">
                    {/* Estructura base */ }
                    {
                        pokemons.map((pokemon, idx) => {
                        return <Pokemon pokemon={pokemon} key={pokemon.name} />
                    })}
                </div>
                </section >
                )}
        </>
    )
}

export default Pokedex;