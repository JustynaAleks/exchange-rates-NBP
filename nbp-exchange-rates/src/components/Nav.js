import { Link } from 'react-router-dom'

function Nav() {
    return(
        <nav>
            <ul>
            <li>
                <Link to={'/'}>Strona Główna</Link>
            </li>
            <li>
                <Link to={'/gold'}>Złoto</Link>
            </li>
            </ul>
        </nav>
    )
}

export default Nav