

export const Pokemon = (props) => {
    const { pokemon } = props;


    return (
        <>
            <div className="m-3">
            <div id="card" className="card">
                <div id="bckgd-img" className={`${pokemon.types[0].type.name}`}>
                    <img src={pokemon.sprites.other.dream_world.front_default} className="card-img" alt={pokemon.name} />
                </div>
                    <div id="card-body" className="card-body ">
                        <p id="id" className='card-title'>N.°{(pokemon.id).toString().padStart(3, 0)}</p>
                        <h4 className="card-title">{pokemon.name.replace(/\b\w/g, l => l.toUpperCase())}</h4>
                    <div className="card-bottom">
                            <div className='card-type'>
                                {
                                    pokemon.types.map((type, idx) => {
                                        return <div className='pokemon-type btn btn-info' key={idx}><h6 className='title-type'>{type.type.name}</h6></div>
                                    })
                                }
                            </div>
                    </div>
                </div>
            </div>    
            </div>
        </>

        
        
        
    )
};
