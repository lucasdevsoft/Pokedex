import { Pokemon } from "../pokemon/pokemon";
import { Pagination } from "../pages/pagination";
import {LoadingGif} from '../Loading/loadinggif'


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
                {loading ? <LoadingGif/>:
                (<section className = "m-3 ">
                <div className = "pokedex-grid">
                    {/* Estructura base */ }
                    {
                        pokemons.map((pokemon, idx) => {
                        return <Pokemon pokemon={pokemon} key={idx} />
                    })}
                </div>
                </section >
                )}
            <div className="div-pagination">
                <Pagination
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            </div>
        </>
    )
}

export default Pokedex;
