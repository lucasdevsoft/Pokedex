import logo from '../imgs/pokemon.png'

export default function Logo() {
    return (
        <nav>
            <div>
                <img className='logo' src={logo} />
            </div>
        </nav>
    )
}