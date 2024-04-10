import { Outlet, Link } from 'react-router-dom'

export function Home(){

    return <div class="container">
        <h1>Home</h1>
        <ul>
            <li><Link to="info">Des infos</Link></li>
            <li><Link to="formation">Formations</Link></li>

        </ul>
        <fieldset>
            <legend>Outlet</legend>
            <Outlet/>
        </fieldset>
    </div>
}