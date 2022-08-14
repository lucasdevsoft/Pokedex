import { useState } from "react";
import Modal from "../../Model/modal";

export const Pokemon = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const { pokemon } = props;
    


    return (
        <>  
            <div onClick={() => setIsOpen(true)}  id="card" className={`${pokemon.types[0].type.name}`}>
                <div id="bckgd-img">
                    <img src={pokemon.sprites.other.dream_world.front_default} className="card-img" alt={pokemon.name} />
                </div>
                    <div id="card-body" className="card-body">
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

            <Modal open={isOpen}>
                    <div className="content-modal">
                    <div id="modal-bgd" className={`${pokemon.types[0].type.name}`}>
                        <div id="bckgd-img">
                            <img src={pokemon.sprites.other.dream_world.front_default} className="card-img" alt={pokemon.name} />
                        </div>
                        <div id="modal-body" className="card-body">
                            <h3 className="card-title">{pokemon.name.replace(/\b\w/g, l => l.toUpperCase())}</h3>
                            <p id="id" className='card-title'>N.°{(pokemon.id).toString().padStart(3, 0)}</p>
                            <div className="modal-bottom">
                                <div className='card-type'>
                                    {
                                        pokemon.types.map((type, idx) => {
                                            return <div id="type-modal" className={`${type.type.name}`} key={idx}><h6 className='title-type'>{type.type.name}</h6></div>
                                        })
                                    }
                                </div>
                                <div>
                                    <h4>Abilities:</h4>
                                    <div className="modal-abilities">
                                    {pokemon.abilities.map((ability, idx) => {
                                        return <div key={idx}><p>{ability.ability.name}</p></div>
                                    })}
                                    </div>
                                </div>
                                <div className="modal-title-stats">
                                    <h4>Base Stats:</h4>
                                    <div className="modal-stat">
                                        <div className="modal-hw">
                                            <h6>Height: </h6><h6>{pokemon.height}</h6>
                                        </div>
                                        <div className="modal-hw">
                                            <h6>Weight: </h6><h6>{pokemon.weight}</h6>
                                        </div>
                                    </div>
                                </div>
                                
                                <button type="button" className="btn btn-danger" onClick={() => setIsOpen(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                    </div>
            </Modal>
            
        </>

        
        
        
    )
};
