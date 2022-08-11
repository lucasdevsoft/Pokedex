

export const Pokemon = (props) => {
    const { pokemon } = props;


    return (
        <>
            <div id="card" className={`${pokemon.types[0].type.name}`}>
                <div id="bckgd-img">
                    <img src={pokemon.sprites.other.dream_world.front_default} className="card-img" alt={pokemon.name} />
                </div>
                    <div id="card-body" className="card-body ">
                        <p id="id" className='card-title'>N.°{(pokemon.id).toString().padStart(3, 0)}</p>
                        <h4 className="card-title">{pokemon.name.replace(/\b\w/g, l => l.toUpperCase())}</h4>
                    <div className="card-bottom">
                            <div className='card-type'>
                                {
                                    pokemon.types.map((type, idx) => {
                                        return <div id="pokemon-type" className={`${type.type.name}`} key={idx}><h6 className='title-type'>{type.type.name}</h6></div>
                                    })
                                }
                            </div>
                    </div>
                </div>
            </div>    
        </>

        
        
        
    )
};
